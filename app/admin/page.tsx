"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SiteInfoEditor from "@/components/SiteInfoEditor";

type MediaType = "images" | "videos" | "music" | "background";
type Tab = MediaType | "info";

type Item = { name: string; size: number; modified: number; url: string };

const KEY = "elite24_admin_pw";

export default function AdminPage() {
  const [pw, setPw] = useState("");
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState("");
  const [tab, setTab] = useState<Tab>("info");
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploads, setUploads] = useState<{ name: string; pct: number; err?: string }[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem(KEY);
    if (saved) {
      setPw(saved);
      setAuthed(true);
    }
  }, []);

  const load = useCallback(
    async (type: MediaType) => {
      setLoading(true);
      try {
        const res = await fetch(`/api/media?type=${type}`);
        const data = await res.json();
        setItems(data.files ?? []);
      } catch {
        setItems([]);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    if (authed && tab !== "info") load(tab);
  }, [authed, tab, load]);

  async function tryLogin(e: React.FormEvent) {
    e.preventDefault();
    setPwError("");
    // 임의 GET으로 비밀번호 검증 — 잘못된 비밀번호로 업로드 시도해서 401 확인
    const test = new FormData();
    test.append("type", "images");
    test.append("file", new Blob([""], { type: "image/png" }), "_probe.png");
    const res = await fetch("/api/admin/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${pwInput}` },
      body: test,
    });
    if (res.status === 401) {
      setPwError("비밀번호가 올바르지 않습니다.");
      return;
    }
    // 200 이거나 400 (확장자 등) 이면 비밀번호는 맞음
    sessionStorage.setItem(KEY, pwInput);
    setPw(pwInput);
    setAuthed(true);
  }

  function logout() {
    sessionStorage.removeItem(KEY);
    setPw("");
    setPwInput("");
    setAuthed(false);
  }

  async function uploadFiles(files: FileList | File[]) {
    const arr = Array.from(files);
    for (const f of arr) {
      const idx = uploads.length;
      setUploads((u) => [...u, { name: f.name, pct: 0 }]);

      try {
        const fd = new FormData();
        fd.append("type", tab);
        fd.append("file", f);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/admin/upload");
        xhr.setRequestHeader("Authorization", `Bearer ${pw}`);
        xhr.upload.onprogress = (ev) => {
          if (ev.lengthComputable) {
            const pct = Math.round((ev.loaded / ev.total) * 100);
            setUploads((u) =>
              u.map((it, i) => (i === idx ? { ...it, pct } : it)),
            );
          }
        };
        await new Promise<void>((resolve) => {
          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              setUploads((u) =>
                u.map((it, i) => (i === idx ? { ...it, pct: 100 } : it)),
              );
            } else {
              let err = "업로드 실패";
              try {
                err = JSON.parse(xhr.responseText)?.error ?? err;
              } catch {}
              setUploads((u) =>
                u.map((it, i) => (i === idx ? { ...it, err } : it)),
              );
            }
            resolve();
          };
          xhr.onerror = () => {
            setUploads((u) =>
              u.map((it, i) =>
                i === idx ? { ...it, err: "네트워크 오류" } : it,
              ),
            );
            resolve();
          };
          xhr.send(fd);
        });
      } catch (e) {
        const msg = e instanceof Error ? e.message : "오류";
        setUploads((u) =>
          u.map((it, i) => (i === idx ? { ...it, err: msg } : it)),
        );
      }
    }
    if (tab !== "info") await load(tab);
    setTimeout(() => setUploads([]), 3000);
  }

  async function del(name: string) {
    if (tab === "info") return;
    if (!confirm(`"${name}" 삭제할까요?`)) return;
    const res = await fetch("/api/admin/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${pw}`,
      },
      body: JSON.stringify({ type: tab, name }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      alert(`삭제 실패: ${data?.error ?? res.status}`);
    }
    await load(tab);
  }

  if (!authed) {
    return (
      <main className="min-h-[100svh] flex items-center justify-center bg-bright-mesh px-5 pt-20 pb-10">
        <form
          onSubmit={tryLogin}
          className="w-full max-w-sm bg-white rounded-2xl shadow-card border border-navy-100 p-8"
        >
          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center mb-4">
              <LockIcon />
            </div>
            <h1 className="text-xl font-bold text-brand-navy">관리자 로그인</h1>
            <p className="mt-1.5 text-[13px] text-navy-500">
              미디어 업로드 페이지에 접근하려면 비밀번호를 입력하세요.
            </p>
          </div>
          <input
            type="password"
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            placeholder="관리자 비밀번호"
            className="input mt-6"
            autoFocus
          />
          {pwError && (
            <p className="mt-2 text-[12px] text-red-600">{pwError}</p>
          )}
          <button type="submit" className="btn-primary w-full mt-4">
            로그인
          </button>
          <p className="mt-4 text-[11px] text-center text-navy-400">
            서버 환경변수 ADMIN_PASSWORD 와 일치하는 값
          </p>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-[100svh] bg-bright-mesh pt-24 pb-20">
      <div className="container-pad">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="chip">Admin</span>
            <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-navy">
              미디어 업로드
            </h1>
            <p className="mt-1 text-[13px] text-navy-500">
              업로드한 사진·영상은 작업사례 페이지에, 음악은 배경음악으로 사용됩니다.
            </p>
          </div>
          <button
            onClick={logout}
            className="text-[12px] font-semibold text-navy-500 hover:text-brand-orange transition"
          >
            로그아웃
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(
            [
              { k: "info", l: "사이트 정보", icon: "⚙️" },
              { k: "images", l: "사진", icon: "🖼️" },
              { k: "videos", l: "영상", icon: "🎬" },
              { k: "background", l: "히어로 영상", icon: "☁️" },
              { k: "music", l: "음악", icon: "🎵" },
            ] as const
          ).map((t) => (
            <button
              key={t.k}
              onClick={() => setTab(t.k)}
              className={`flex-1 sm:flex-none px-5 py-3 rounded-full text-sm font-bold transition ${
                tab === t.k
                  ? "bg-brand-orange text-white shadow-glow"
                  : "bg-white text-navy-700 border border-navy-200 hover:border-brand-orange hover:text-brand-orange"
              }`}
            >
              <span className="mr-2">{t.icon}</span>
              {t.l}
            </button>
          ))}
        </div>

        {/* Site info editor */}
        {tab === "info" && <SiteInfoEditor password={pw} />}

        {/* Drop zone (media tabs only) */}
        {tab !== "info" && (
        <>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDrag(true);
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDrag(false);
            if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
          }}
          className={`rounded-2xl border-2 border-dashed p-8 sm:p-12 text-center transition ${
            drag
              ? "border-brand-orange bg-amber-50"
              : "border-navy-200 bg-white hover:border-brand-orange hover:bg-amber-50/40"
          }`}
        >
          <div className="mx-auto w-14 h-14 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center mb-4">
            <UploadIcon />
          </div>
          <p className="text-[15px] font-semibold text-brand-navy">
            파일을 드래그하거나
          </p>
          <button
            onClick={() => fileRef.current?.click()}
            className="mt-3 btn-primary"
          >
            파일 선택
          </button>
          <input
            ref={fileRef}
            type="file"
            multiple
            accept={
              tab === "images"
                ? "image/*"
                : tab === "videos" || tab === "background"
                  ? "video/*"
                  : "audio/*"
            }
            onChange={(e) => {
              if (e.target.files?.length) uploadFiles(e.target.files);
              e.target.value = "";
            }}
            className="hidden"
          />
          <p className="mt-3 text-[11px] text-navy-400">
            {tab === "images" && "JPG, PNG, GIF, WebP, SVG · 최대 15MB"}
            {tab === "videos" && "MP4, WebM, MOV · 최대 200MB"}
            {tab === "background" && "MP4 · 최대 100MB · 메인 페이지 히어로 배경에 자동 재생 (한 개만 등록)"}
            {tab === "music" && "MP3, WAV, OGG, M4A · 최대 30MB"}
          </p>
        </div>

        {/* Upload progress */}
        {uploads.length > 0 && (
          <div className="mt-5 space-y-2">
            {uploads.map((u, i) => (
              <div
                key={i}
                className="bg-white border border-navy-100 rounded-lg p-3 text-[12px]"
              >
                <div className="flex justify-between mb-1.5">
                  <span className="font-semibold text-navy-700 truncate pr-2">
                    {u.name}
                  </span>
                  <span
                    className={
                      u.err
                        ? "text-red-600"
                        : u.pct === 100
                          ? "text-green-600"
                          : "text-navy-500"
                    }
                  >
                    {u.err ?? (u.pct === 100 ? "완료" : `${u.pct}%`)}
                  </span>
                </div>
                <div className="h-1.5 bg-navy-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      u.err ? "bg-red-400" : "bg-brand-orange"
                    }`}
                    style={{ width: `${u.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Existing files */}
        <div className="mt-10">
          <h2 className="text-base font-bold text-brand-navy mb-4">
            현재 파일 ({items.length})
          </h2>
          {loading ? (
            <p className="text-sm text-navy-400">불러오는 중...</p>
          ) : items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-navy-200 bg-white/50 p-8 text-center text-sm text-navy-400">
              아직 업로드된 파일이 없습니다.
            </div>
          ) : tab === "images" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {items.map((it) => (
                <FileCard key={it.name} item={it} type={tab} onDelete={del}>
                  <img
                    src={it.url}
                    alt={it.name}
                    className="w-full h-40 object-cover"
                  />
                </FileCard>
              ))}
            </div>
          ) : tab === "videos" || tab === "background" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((it) => (
                <FileCard key={it.name} item={it} type={tab} onDelete={del}>
                  <video
                    src={it.url}
                    controls
                    preload="metadata"
                    className="w-full aspect-video bg-black"
                  />
                </FileCard>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {items.map((it) => (
                <div
                  key={it.name}
                  className="bg-white border border-navy-100 rounded-2xl p-4 flex items-center gap-3"
                >
                  <div className="w-11 h-11 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center shrink-0">
                    <MusicIcon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[14px] text-brand-navy truncate">
                      {it.name}
                    </div>
                    <div className="text-[11px] text-navy-400">
                      {(it.size / 1024 / 1024).toFixed(2)} MB
                    </div>
                  </div>
                  <audio src={it.url} controls className="hidden sm:block h-9" />
                  <button
                    onClick={() => del(it.name)}
                    className="px-3 py-2 rounded-lg text-[12px] font-bold text-red-600 hover:bg-red-50 transition"
                  >
                    삭제
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        </>
        )}
      </div>
    </main>
  );
}

function FileCard({
  item,
  type: _type,
  onDelete,
  children,
}: {
  item: Item;
  type: MediaType;
  onDelete: (name: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl overflow-hidden group">
      {children}
      <div className="p-3 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <div className="text-[12px] font-semibold text-navy-700 truncate">
            {item.name}
          </div>
          <div className="text-[10px] text-navy-400">
            {(item.size / 1024 / 1024).toFixed(2)} MB
          </div>
        </div>
        <button
          onClick={() => onDelete(item.name)}
          className="text-[11px] font-bold text-red-600 hover:bg-red-50 px-2 py-1 rounded transition shrink-0"
        >
          삭제
        </button>
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function UploadIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 16V4M5 11l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 16v3a2 2 0 002 2h14a2 2 0 002-2v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function MusicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
