"use client";

import { useEffect, useState } from "react";
import { DEFAULT_SITE_CONFIG, type SiteConfig } from "@/lib/site-config";

const FIELDS: {
  key: keyof SiteConfig;
  label: string;
  hint?: string;
  type?: "text" | "email";
  group: "company" | "phone" | "contact";
}[] = [
  { key: "companyName", label: "회사명", group: "company" },
  { key: "representativeName", label: "대표자명", group: "company" },
  { key: "phonePrimaryLabel", label: "메인 전화 라벨", hint: "예: 사무실, 대표 등", group: "phone" },
  { key: "phonePrimary", label: "메인 전화번호", hint: "헤더 / CTA 버튼에 표시되는 번호", group: "phone" },
  { key: "phoneSecondaryLabel", label: "보조 전화 라벨", hint: "예: 대표, 휴대폰", group: "phone" },
  { key: "phoneSecondary", label: "보조 전화번호", group: "phone" },
  { key: "email", label: "이메일", type: "email", group: "contact" },
  { key: "address", label: "주소", group: "contact" },
  { key: "businessHours", label: "상담 가능 시간", hint: "예: 평일·주말 24시간 상담", group: "contact" },
];

const GROUPS = [
  { key: "company", title: "회사 정보" },
  { key: "phone", title: "전화번호" },
  { key: "contact", title: "이메일 · 주소" },
] as const;

export default function SiteInfoEditor({ password }: { password: string }) {
  const [config, setConfig] = useState<SiteConfig>(DEFAULT_SITE_CONFIG);
  const [original, setOriginal] = useState<SiteConfig>(DEFAULT_SITE_CONFIG);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/site-config", { cache: "no-store" });
        const data: SiteConfig = await res.json();
        setConfig(data);
        setOriginal(data);
      } catch {
        // keep defaults
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const dirty = JSON.stringify(config) !== JSON.stringify(original);

  function update(key: keyof SiteConfig, value: string) {
    setConfig((c) => ({ ...c, [key]: value }));
    setMsg(null);
  }

  async function save() {
    setSaving(true);
    setMsg(null);
    try {
      const res = await fetch("/api/admin/site-config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify(config),
      });
      const data = await res.json();
      if (!res.ok) {
        setMsg({ type: "err", text: data?.error ?? "저장 실패" });
      } else {
        setOriginal(data.config ?? config);
        setConfig(data.config ?? config);
        setMsg({ type: "ok", text: "저장되었습니다. 모든 페이지에 즉시 반영됩니다." });
        // Trigger a soft refresh so context provider re-fetches
        setTimeout(() => {
          if (typeof window !== "undefined") window.location.reload();
        }, 1200);
      }
    } catch (e) {
      const text = e instanceof Error ? e.message : "네트워크 오류";
      setMsg({ type: "err", text });
    } finally {
      setSaving(false);
    }
  }

  function reset() {
    setConfig(original);
    setMsg(null);
  }

  function resetToDefaults() {
    if (!confirm("초기 기본값으로 되돌릴까요? (저장 버튼을 눌러야 적용됩니다)")) return;
    setConfig(DEFAULT_SITE_CONFIG);
  }

  if (loading) {
    return <div className="text-sm text-navy-400 py-12 text-center">불러오는 중...</div>;
  }

  return (
    <div>
      <div className="bg-white border border-navy-100 rounded-2xl p-6 sm:p-8 shadow-soft">
        <div className="flex items-start gap-3 mb-6 pb-6 border-b border-navy-100">
          <div className="w-10 h-10 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center shrink-0">
            <InfoIcon />
          </div>
          <div>
            <h3 className="text-base font-bold text-brand-navy">사이트 정보</h3>
            <p className="mt-1 text-[12.5px] text-navy-500 leading-[1.6]">
              여기서 수정한 값은 헤더·푸터·문의 페이지·AI 상담사·푸터 등 모든 곳에
              자동 반영됩니다.
            </p>
          </div>
        </div>

        {GROUPS.map((g) => (
          <div key={g.key} className="mb-7 last:mb-0">
            <h4 className="text-[11px] tracking-wider2 uppercase text-brand-orange font-bold mb-3">
              {g.title}
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {FIELDS.filter((f) => f.group === g.key).map((f) => (
                <label key={f.key} className="block">
                  <span className="block text-[12px] font-semibold text-navy-700 mb-1.5">
                    {f.label}
                  </span>
                  <input
                    type={f.type ?? "text"}
                    value={config[f.key] ?? ""}
                    onChange={(e) => update(f.key, e.target.value)}
                    className="input"
                    maxLength={200}
                  />
                  {f.hint && (
                    <span className="block mt-1 text-[11px] text-navy-400">
                      {f.hint}
                    </span>
                  )}
                </label>
              ))}
            </div>
          </div>
        ))}

        {msg && (
          <div
            className={`mb-4 px-4 py-3 rounded-lg text-[13px] ${
              msg.type === "ok"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {msg.text}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-navy-100">
          <button
            onClick={save}
            disabled={!dirty || saving}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? "저장 중..." : "저장하기"}
          </button>
          <button
            onClick={reset}
            disabled={!dirty || saving}
            className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            변경 취소
          </button>
          <button
            onClick={resetToDefaults}
            disabled={saving}
            className="text-[12px] text-navy-400 hover:text-red-500 ml-auto transition"
          >
            기본값으로
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v.01M12 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
