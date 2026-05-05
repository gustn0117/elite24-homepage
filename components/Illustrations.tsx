/* SVG illustration set — 사진 대체용. 모두 currentColor 기반으로 색상은 부모에서 제어. */

type IllusProps = { className?: string };

/* ───────── 카테고리별 메인 일러스트 ───────── */

export function OfficeIllustration({ className = "" }: IllusProps) {
  return (
    <svg viewBox="0 0 320 240" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="ilo-build" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1d3557" />
          <stop offset="1" stopColor="#0f1d3a" />
        </linearGradient>
        <pattern id="ilo-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" stroke="rgba(245,166,35,0.10)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="320" height="240" fill="url(#ilo-grid)" />

      {/* 빌딩 본체 */}
      <g className="origin-bottom animate-float-slow">
        <rect x="80" y="40" width="160" height="180" fill="url(#ilo-build)" rx="6" />
        {/* 창문 격자 */}
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 6 }).map((_, c) => (
            <rect
              key={`${r}-${c}`}
              x={92 + c * 22}
              y={56 + r * 28}
              width="14"
              height="18"
              rx="1"
              fill="#f5a623"
              opacity={(r + c) % 3 === 0 ? 0.85 : 0.18}
            />
          )),
        )}
        {/* 옥상 */}
        <rect x="140" y="24" width="40" height="20" fill="#0f1d3a" rx="2" />
        <rect x="156" y="14" width="6" height="12" fill="#0f1d3a" />
      </g>

      {/* 작은 이동 박스 */}
      <g className="origin-center animate-float">
        <rect x="22" y="170" width="48" height="38" fill="#f5a623" rx="3" />
        <path d="M22 184h48M46 170v38" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.4" />
      </g>
      <g className="origin-center animate-float-slow">
        <rect x="252" y="180" width="40" height="32" fill="#1d3557" rx="3" />
        <path d="M252 192h40M272 180v32" stroke="#fff" strokeOpacity="0.4" strokeWidth="1.4" />
      </g>

      {/* 바닥선 */}
      <line x1="0" y1="220" x2="320" y2="220" stroke="#1d3557" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="3 6" />
    </svg>
  );
}

export function FactoryIllustration({ className = "" }: IllusProps) {
  return (
    <svg viewBox="0 0 320 240" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="ilf-roof" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#1d3557" />
          <stop offset="1" stopColor="#0f1d3a" />
        </linearGradient>
        <pattern id="ilf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" stroke="rgba(245,166,35,0.10)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="320" height="240" fill="url(#ilf-grid)" />

      {/* 굴뚝 연기 */}
      <g>
        <circle cx="74" cy="60" r="9" fill="#1d3557" opacity="0.18" className="animate-rise origin-center" />
        <circle cx="80" cy="40" r="7" fill="#1d3557" opacity="0.14" className="animate-rise-delay origin-center" />
      </g>

      {/* 굴뚝 */}
      <rect x="64" y="72" width="20" height="120" fill="#1d3557" rx="2" />

      {/* 본관 - 톱니 지붕 */}
      <g className="animate-fade-up">
        <rect x="96" y="100" width="200" height="100" fill="url(#ilf-roof)" rx="3" />
        <path
          d="M96 100 L120 76 L144 100 L168 76 L192 100 L216 76 L240 100 L264 76 L288 100 L296 100 L296 100"
          fill="#1d3557"
        />
        {/* 셔터 도어 */}
        <rect x="120" y="140" width="60" height="60" fill="#f5a623" rx="2" />
        <g stroke="#fff" strokeOpacity="0.45" strokeWidth="1.2">
          <line x1="120" y1="152" x2="180" y2="152" />
          <line x1="120" y1="164" x2="180" y2="164" />
          <line x1="120" y1="176" x2="180" y2="176" />
          <line x1="120" y1="188" x2="180" y2="188" />
        </g>
        {/* 창문 */}
        {Array.from({ length: 4 }).map((_, i) => (
          <rect
            key={i}
            x={200 + i * 22}
            y={140}
            width="16"
            height="24"
            fill="#f5a623"
            opacity={i % 2 === 0 ? 0.85 : 0.4}
            rx="1"
          />
        ))}
      </g>

      {/* 지게차 실루엣 */}
      <g className="animate-float origin-center" style={{ animationDuration: "6s" }}>
        <rect x="22" y="186" width="36" height="14" fill="#f5a623" rx="2" />
        <rect x="48" y="172" width="22" height="28" fill="#1d3557" rx="2" />
        <path d="M58 172v18M58 178h22" stroke="#1d3557" strokeWidth="1.5" />
        <circle cx="32" cy="208" r="6" fill="#0f1d3a" />
        <circle cx="58" cy="208" r="6" fill="#0f1d3a" />
      </g>

      <line x1="0" y1="218" x2="320" y2="218" stroke="#1d3557" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="3 6" />
    </svg>
  );
}

export function InstitutionIllustration({ className = "" }: IllusProps) {
  return (
    <svg viewBox="0 0 320 240" className={className} fill="none" aria-hidden>
      <defs>
        <pattern id="ili-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" stroke="rgba(245,166,35,0.10)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="320" height="240" fill="url(#ili-grid)" />

      {/* 본 건물 */}
      <g className="animate-fade-up">
        {/* 지붕 삼각 */}
        <path d="M60 110 L160 50 L260 110 Z" fill="#1d3557" />
        <rect x="70" y="110" width="180" height="100" fill="#0f1d3a" />
        {/* 기둥 */}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={84 + i * 36} y={120} width="14" height="80" fill="#fff" opacity="0.92" rx="1" />
        ))}
        {/* 계단 */}
        <rect x="60" y="200" width="200" height="6" fill="#1d3557" />
        <rect x="50" y="208" width="220" height="8" fill="#0f1d3a" />

        {/* 깃발 / 심볼 */}
        <rect x="156" y="32" width="2" height="20" fill="#1d3557" />
        <path d="M158 32 L172 38 L158 44 Z" fill="#f5a623" className="origin-left animate-pulse-soft" />
      </g>

      {/* 작은 인포 카드 */}
      <g className="animate-float origin-center">
        <rect x="22" y="160" width="42" height="48" fill="#fff" stroke="#1d3557" strokeOpacity="0.18" strokeWidth="1.2" rx="3" />
        <rect x="28" y="168" width="30" height="3" fill="#f5a623" rx="1" />
        <rect x="28" y="176" width="22" height="2" fill="#1d3557" opacity="0.4" rx="1" />
        <rect x="28" y="182" width="26" height="2" fill="#1d3557" opacity="0.3" rx="1" />
        <rect x="28" y="188" width="18" height="2" fill="#1d3557" opacity="0.3" rx="1" />
      </g>
      <g className="animate-float-slow origin-center">
        <circle cx="282" cy="178" r="22" fill="#fff" stroke="#1d3557" strokeOpacity="0.18" strokeWidth="1.2" />
        <path d="M282 168v20M272 178h20" stroke="#f5a623" strokeWidth="2.6" strokeLinecap="round" />
      </g>

      <line x1="0" y1="218" x2="320" y2="218" stroke="#1d3557" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="3 6" />
    </svg>
  );
}

/* ───────── 보조 일러스트 (Quote / Hero side / About) ───────── */

export function ProcessIllustration({ className = "" }: IllusProps) {
  return (
    <svg viewBox="0 0 320 240" className={className} fill="none" aria-hidden>
      <defs>
        <pattern id="ilp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" stroke="rgba(245,166,35,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="320" height="240" fill="url(#ilp-grid)" />

      {/* 워크플로우 점선 경로 */}
      <path
        d="M30 180 C 90 90, 200 230, 290 80"
        stroke="#f5a623"
        strokeWidth="2"
        strokeDasharray="4 6"
        fill="none"
      />

      {/* 4 단계 노드 */}
      {[
        { x: 30, y: 180, label: "01" },
        { x: 120, y: 130, label: "02" },
        { x: 210, y: 168, label: "03" },
        { x: 290, y: 80, label: "04" },
      ].map((n, i) => (
        <g key={n.label} className="origin-center" style={{ animation: `fadeUp 0.6s ${i * 0.15}s both` }}>
          <circle cx={n.x} cy={n.y} r="22" fill="#fff" stroke="#f5a623" strokeWidth="2" />
          <text
            x={n.x}
            y={n.y + 5}
            textAnchor="middle"
            fontSize="13"
            fontWeight="800"
            fill="#1d3557"
            fontFamily="Pretendard, sans-serif"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* 체크 아이콘 */}
      <g className="animate-pulse-soft origin-center">
        <circle cx="160" cy="40" r="14" fill="#f5a623" />
        <path d="M154 40 l5 5 l8 -10" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function QuoteIllustration({ className = "" }: IllusProps) {
  return (
    <svg viewBox="0 0 320 320" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="ilq-build" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1d3557" />
          <stop offset="1" stopColor="#0f1d3a" />
        </linearGradient>
      </defs>

      {/* 회전 외곽 링 */}
      <g className="animate-spin-slow origin-center" style={{ transformOrigin: "160px 160px" }}>
        <circle cx="160" cy="160" r="142" stroke="#f5a623" strokeOpacity="0.25" strokeDasharray="2 8" strokeWidth="1.5" />
      </g>
      <g className="animate-spin-rev origin-center" style={{ transformOrigin: "160px 160px" }}>
        <circle cx="160" cy="160" r="118" stroke="#1d3557" strokeOpacity="0.18" strokeDasharray="6 6" strokeWidth="1.2" />
      </g>

      {/* 중앙 빌딩 */}
      <g>
        <rect x="118" y="80" width="84" height="170" rx="4" fill="url(#ilq-build)" />
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <rect
              key={`${r}-${c}`}
              x={128 + c * 17}
              y={92 + r * 22}
              width="11"
              height="14"
              rx="1"
              fill="#f5a623"
              opacity={(r + c) % 3 === 0 ? 0.9 : 0.2}
            />
          )),
        )}
        <rect x="146" y="64" width="28" height="18" fill="#0f1d3a" rx="2" />
        <rect x="158" y="50" width="4" height="14" fill="#0f1d3a" />
      </g>

      {/* 떠다니는 박스 / 배지 */}
      <g className="animate-float origin-center">
        <rect x="42" y="80" width="56" height="42" fill="#fff" stroke="#1d3557" strokeOpacity="0.2" strokeWidth="1.2" rx="4" />
        <path d="M42 96h56M70 80v42" stroke="#f5a623" strokeWidth="1.4" />
      </g>
      <g className="animate-float-slow origin-center">
        <rect x="222" y="200" width="58" height="44" fill="#f5a623" rx="4" />
        <path d="M222 218h58M251 200v44" stroke="#fff" strokeOpacity="0.6" strokeWidth="1.4" />
      </g>

      {/* 체크 메달 */}
      <g className="animate-pulse-soft origin-center">
        <circle cx="240" cy="78" r="22" fill="#1d3557" />
        <path d="M232 78 l6 6 l10 -12" stroke="#f5a623" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* 바닥 그림자 */}
      <ellipse cx="160" cy="266" rx="80" ry="6" fill="#1d3557" opacity="0.12" />
    </svg>
  );
}

/* ───────── 데코레이션 패턴 (배경용) ───────── */

export function DotsPattern({ className = "" }: IllusProps) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" aria-hidden>
      <defs>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="240" height="240" fill="url(#dots)" />
    </svg>
  );
}

export function BlueprintLines({ className = "" }: IllusProps) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none" aria-hidden>
      <defs>
        <pattern id="bp" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 40H40M40 0V40" stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="600" height="400" fill="url(#bp)" />
    </svg>
  );
}

/* ───────── 페이지 헤더용 추상 라인 데코 ───────── */

export function HeaderDecor({ className = "" }: IllusProps) {
  return (
    <svg viewBox="0 0 800 400" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="hd-line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#f5a623" stopOpacity="0" />
          <stop offset="0.5" stopColor="#f5a623" stopOpacity="0.6" />
          <stop offset="1" stopColor="#f5a623" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 도면 그리드 */}
      <g opacity="0.18">
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" stroke="#fff" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke="#fff" strokeWidth="0.5" />
        ))}
      </g>

      {/* 추상 빌딩 라인 */}
      <g opacity="0.55">
        <rect x="500" y="120" width="120" height="240" stroke="#fff" strokeOpacity="0.4" strokeWidth="1" fill="none" />
        <rect x="630" y="180" width="80" height="180" stroke="#fff" strokeOpacity="0.4" strokeWidth="1" fill="none" />
        <rect x="720" y="80" width="60" height="280" stroke="#fff" strokeOpacity="0.4" strokeWidth="1" fill="none" />
      </g>

      {/* 흐르는 골드 라인 */}
      <line x1="0" y1="260" x2="800" y2="260" stroke="url(#hd-line)" strokeWidth="2" />
    </svg>
  );
}
