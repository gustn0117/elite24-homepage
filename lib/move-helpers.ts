import "server-only";
import KoreanLunarCalendar from "korean-lunar-calendar";

/* ───────────── 날짜 추출 ───────────── */

const WEEKDAY_KR = ["일", "월", "화", "수", "목", "금", "토"];

/**
 * 사용자 메시지에서 한국어 날짜 표현을 ISO yyyy-mm-dd 배열로 추출.
 * 지원:
 *  - "2026년 5월 20일", "5월 20일", "5월20일"
 *  - "5/20", "5-20"
 *  - "오늘", "내일", "모레", "글피"
 *  - "다음주 토요일", "이번주 토요일"
 */
export function extractDates(text: string, now = new Date()): string[] {
  const out = new Set<string>();

  // YYYY년 M월 D일
  const r1 = /(?:(\d{4})년\s*)?(\d{1,2})월\s*(\d{1,2})일/g;
  for (const m of text.matchAll(r1)) {
    const year = m[1] ? +m[1] : pickYear(+m[2], +m[3], now);
    const iso = isoDate(year, +m[2], +m[3]);
    if (iso) out.add(iso);
  }

  // M/D or M-D (must not be part of larger number; allow at start, after space, or after non-digit)
  const r2 = /(?:^|[^\d./-])(\d{1,2})[\/\-](\d{1,2})(?!\d)/g;
  for (const m of text.matchAll(r2)) {
    const month = +m[1];
    const day = +m[2];
    if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      const year = pickYear(month, day, now);
      const iso = isoDate(year, month, day);
      if (iso) out.add(iso);
    }
  }

  if (/오늘/.test(text)) out.add(toIso(now));
  if (/내일/.test(text)) out.add(toIso(addDays(now, 1)));
  if (/모레/.test(text)) out.add(toIso(addDays(now, 2)));
  if (/글피/.test(text)) out.add(toIso(addDays(now, 3)));

  // 다음주 X요일 / 이번주 X요일
  const r3 = /(이번주|다음주|다다음주)\s*([일월화수목금토])요일/g;
  for (const m of text.matchAll(r3)) {
    const wd = WEEKDAY_KR.indexOf(m[2]);
    if (wd < 0) continue;
    const baseOffset = m[1] === "다음주" ? 7 : m[1] === "다다음주" ? 14 : 0;
    const cur = now.getDay();
    const delta = (wd - cur + 7) % 7;
    out.add(toIso(addDays(now, baseOffset + delta)));
  }

  return [...out].slice(0, 6);
}

function pickYear(month: number, day: number, now: Date): number {
  const y = now.getFullYear();
  const candidate = new Date(y, month - 1, day);
  // 오늘 이전이면 내년으로
  const today0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return candidate < today0 ? y + 1 : y;
}

function isoDate(y: number, m: number, d: number): string | null {
  if (m < 1 || m > 12 || d < 1 || d > 31) return null;
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function toIso(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function addDays(d: Date, n: number): Date {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

/* ───────────── 날씨 (Open-Meteo, 무료/무인증) ───────────── */

const WMO: Record<number, string> = {
  0: "맑음",
  1: "대체로 맑음",
  2: "구름 조금",
  3: "흐림",
  45: "안개",
  48: "짙은 안개",
  51: "약한 이슬비",
  53: "이슬비",
  55: "강한 이슬비",
  61: "약한 비",
  63: "비",
  65: "강한 비",
  71: "약한 눈",
  73: "눈",
  75: "강한 눈",
  77: "싸락눈",
  80: "소나기",
  81: "강한 소나기",
  82: "매우 강한 소나기",
  85: "약한 눈 소나기",
  86: "강한 눈 소나기",
  95: "뇌우",
  96: "뇌우(우박 동반)",
  99: "강한 뇌우(우박)",
};

export type WeatherInfo = {
  date: string;
  desc: string;
  precipitationMm: number;
  tMax: number;
  tMin: number;
  isBad: boolean; // 비/눈/뇌우/소나기 등 이사 비추천 날
};

export async function fetchWeather(date: string): Promise<WeatherInfo | null> {
  try {
    // 서울 좌표 기본 (사용자가 지역 명시 안 한 경우)
    const url = `https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&daily=weathercode,precipitation_sum,temperature_2m_max,temperature_2m_min&timezone=Asia%2FSeoul&start_date=${date}&end_date=${date}`;
    const r = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!r.ok) return null;
    const data = await r.json();
    const daily = data?.daily;
    if (!daily?.time?.length) return null;
    const code = Number(daily.weathercode?.[0] ?? -1);
    const precip = Number(daily.precipitation_sum?.[0] ?? 0);
    const tMax = Number(daily.temperature_2m_max?.[0] ?? 0);
    const tMin = Number(daily.temperature_2m_min?.[0] ?? 0);
    const desc = WMO[code] ?? "예측 어려움";
    // 이사 비추천 조건: 강수량 1mm 이상이거나 비/눈/뇌우 계열 코드
    const isBad =
      precip >= 1 ||
      (code >= 51 && code <= 67) ||
      (code >= 71 && code <= 77) ||
      (code >= 80 && code <= 99);
    return { date, desc, precipitationMm: precip, tMax, tMin, isBad };
  } catch {
    return null;
  }
}

/* ───────────── 손없는 날 ───────────── */
// 음력 일의 끝자리 9 또는 0인 날 = 손없는 날 (전통).
// 매월 음력 9, 10, 19, 20, 29, 30일 (큰달).

function lunarDayOf(iso: string): number | null {
  try {
    const [y, m, d] = iso.split("-").map(Number);
    const cal = new KoreanLunarCalendar();
    const ok = cal.setSolarDate(y, m, d);
    if (!ok) return null;
    const l = cal.getLunarCalendar();
    return l?.day ?? null;
  } catch {
    return null;
  }
}

export function isSonEopneunNal(iso: string): boolean {
  const d = lunarDayOf(iso);
  if (d === null) return false;
  const last = d % 10;
  return last === 9 || last === 0;
}

/**
 * 지정 날짜로부터 향후 N개의 손없는 날 ISO 배열.
 * 최대 90일까지 탐색.
 */
export function nextSonEopneunNal(fromIso: string, count = 3): string[] {
  const out: string[] = [];
  const [y, m, d] = fromIso.split("-").map(Number);
  const start = new Date(y, m - 1, d);
  for (let i = 0; i < 90 && out.length < count; i++) {
    const cur = new Date(start);
    cur.setDate(cur.getDate() + i);
    const iso = `${cur.getFullYear()}-${String(cur.getMonth() + 1).padStart(2, "0")}-${String(cur.getDate()).padStart(2, "0")}`;
    if (isSonEopneunNal(iso)) out.push(iso);
  }
  return out;
}

/* ───────────── 날짜 컨텍스트 빌드 ───────────── */

/**
 * 사용자가 언급한 날짜들에 대해 날씨 + 손없는날 정보를 종합한 컨텍스트 문자열.
 * AI 시스템 프롬프트나 사용자 메시지에 prepend.
 */
export async function buildDateContext(text: string): Promise<string | null> {
  const dates = extractDates(text);
  if (dates.length === 0) return null;

  const lines: string[] = ["[참고: 사용자가 언급한 날짜에 대한 사실 정보]"];

  for (const date of dates) {
    const weatherP = fetchWeather(date);
    const son = isSonEopneunNal(date);
    const lunar = lunarDayOf(date);
    const weather = await weatherP;

    const wStr = weather
      ? `${weather.desc}, 강수량 ${weather.precipitationMm}mm, 최고/최저 ${weather.tMax}°C / ${weather.tMin}°C${
          weather.isBad ? " (⚠️ 비/눈/궂은 날씨로 이사 비추천)" : " (양호)"
        }`
      : "예보 범위 밖 (16일 이후 또는 데이터 없음)";

    lines.push(
      `- ${date}: 날씨 ${wStr} / 음력 ${lunar ?? "?"}일${son ? " — ✅ 손없는 날" : ""}`,
    );
  }

  // 추가로 향후 손없는 날 3건 자동 추천 (오늘 기준)
  const today = new Date();
  const todayIso = toIso(today);
  const upcoming = nextSonEopneunNal(todayIso, 3);
  if (upcoming.length) {
    lines.push("");
    lines.push(`참고로 오늘 이후 가장 가까운 손없는 날: ${upcoming.join(", ")}`);
  }

  return lines.join("\n");
}
