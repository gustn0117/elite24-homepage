"use client";

import { useEffect, useRef, useState } from "react";

type Track = { name: string; url: string };

const VOL_KEY = "elite24_bgm_vol";
const TRACK_KEY = "elite24_bgm_track";
const ENABLED_KEY = "elite24_bgm_enabled";
const DISABLED_KEY = "elite24_bgm_disabled";

export default function MusicPlayer() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hideUntilLoaded, setHideUntilLoaded] = useState(true);

  // 트랙 목록 + 저장된 설정 로드
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/media?type=music", { cache: "no-store" });
        const data = await res.json();
        const list: Track[] = (data.files ?? []).map(
          (f: { name: string; url: string }) => ({ name: f.name, url: f.url }),
        );
        setTracks(list);
        if (list.length === 0) {
          setHideUntilLoaded(true);
          return;
        }
        setHideUntilLoaded(false);

        // 저장된 트랙 / 볼륨 복원
        const savedVol = parseFloat(localStorage.getItem(VOL_KEY) ?? "");
        if (!Number.isNaN(savedVol)) setVolume(savedVol);
        const savedTrack = localStorage.getItem(TRACK_KEY);
        const savedIdx = list.findIndex((t) => t.name === savedTrack);
        if (savedIdx >= 0) setIdx(savedIdx);

        // 사용자가 명시적으로 "끄기"를 누른 적 있으면 자동재생 시도 안 함
        const isDisabled = localStorage.getItem(DISABLED_KEY) === "1";
        if (isDisabled) return;

        // 1) 일단 바로 재생 시도 — 브라우저 정책에 따라 성공/실패 갈림
        const attempt = () => {
          if (!audioRef.current) return Promise.reject(new Error("no audio"));
          return audioRef.current.play();
        };

        setTimeout(() => {
          void attempt().then(
            () => {
              setPlaying(true);
              localStorage.setItem(ENABLED_KEY, "1");
            },
            () => {
              // 2) 차단됐으면 첫 사용자 제스처에 자동 재생
              const onGesture = () => {
                void attempt().then(
                  () => {
                    setPlaying(true);
                    localStorage.setItem(ENABLED_KEY, "1");
                  },
                  () => {},
                );
                removeGestureListeners();
              };
              const events: (keyof DocumentEventMap)[] = [
                "click",
                "touchstart",
                "keydown",
                "scroll",
                "pointerdown",
              ];
              const removeGestureListeners = () => {
                for (const e of events) {
                  document.removeEventListener(e, onGesture);
                }
              };
              for (const e of events) {
                document.addEventListener(e, onGesture, {
                  once: true,
                  passive: true,
                });
              }
            },
          );
        }, 300);
      } catch {
        setHideUntilLoaded(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
    localStorage.setItem(VOL_KEY, String(volume));
  }, [volume]);

  useEffect(() => {
    const t = tracks[idx];
    if (t) localStorage.setItem(TRACK_KEY, t.name);
  }, [idx, tracks]);

  async function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
        localStorage.setItem(ENABLED_KEY, "1");
        localStorage.removeItem(DISABLED_KEY);
      } catch {
        // autoplay denied
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  function next() {
    if (tracks.length === 0) return;
    setIdx((i) => (i + 1) % tracks.length);
    setTimeout(() => {
      void audioRef.current?.play().then(() => setPlaying(true));
    }, 100);
  }

  function prev() {
    if (tracks.length === 0) return;
    setIdx((i) => (i - 1 + tracks.length) % tracks.length);
    setTimeout(() => {
      void audioRef.current?.play().then(() => setPlaying(true));
    }, 100);
  }

  function stopBgm() {
    audioRef.current?.pause();
    setPlaying(false);
    localStorage.removeItem(ENABLED_KEY);
    localStorage.setItem(DISABLED_KEY, "1");
    setOpen(false);
  }

  if (hideUntilLoaded || tracks.length === 0) return null;

  const current = tracks[idx];

  return (
    <>
      <audio
        ref={audioRef}
        src={current.url}
        loop={tracks.length === 1}
        onEnded={() => (tracks.length > 1 ? next() : setPlaying(false))}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {/* 컴팩트 버튼 (닫혀있을 때) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="배경음악 열기"
          className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-[55] h-12 px-4 rounded-full bg-white border border-navy-200 text-brand-navy shadow-card hover:shadow-cardHover hover:-translate-y-1 transition flex items-center gap-2"
        >
          {playing ? (
            <span className="flex items-end gap-0.5 h-4">
              <span
                className="w-0.5 bg-brand-orange rounded-full origin-bottom animate-wave"
                style={{ height: "100%" }}
              />
              <span
                className="w-0.5 bg-brand-orange rounded-full origin-bottom animate-wave"
                style={{ height: "100%", animationDelay: "0.15s" }}
              />
              <span
                className="w-0.5 bg-brand-orange rounded-full origin-bottom animate-wave"
                style={{ height: "100%", animationDelay: "0.3s" }}
              />
              <span
                className="w-0.5 bg-brand-orange rounded-full origin-bottom animate-wave"
                style={{ height: "100%", animationDelay: "0.45s" }}
              />
            </span>
          ) : (
            <MusicNote />
          )}
          <span className="text-[12px] font-bold">
            {playing ? "음악 재생 중" : "배경음악"}
          </span>
        </button>
      )}

      {/* 확장 패널 */}
      {open && (
        <div className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-[55] w-[280px] bg-white rounded-2xl border border-navy-100 shadow-cardHover overflow-hidden animate-fade-up">
          <div className="bg-gradient-to-br from-brand-orange to-brand-orangeDark text-white px-4 py-3 flex items-center justify-between">
            <div className="text-[11px] tracking-wider2 uppercase font-bold">
              Background Music
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="접기"
              className="text-white/80 hover:text-white p-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center shrink-0">
                <MusicNote />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12.5px] font-bold text-brand-navy truncate">
                  {current.name}
                </div>
                <div className="text-[11px] text-navy-400">
                  {idx + 1} / {tracks.length}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-1 mb-4">
              <button
                onClick={prev}
                disabled={tracks.length <= 1}
                className="w-9 h-9 rounded-full hover:bg-navy-50 text-navy-700 flex items-center justify-center transition disabled:opacity-30"
                aria-label="이전"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
              </button>
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-brand-orange text-white hover:bg-brand-orangeDark transition flex items-center justify-center shadow-glow"
                aria-label={playing ? "일시정지" : "재생"}
              >
                {playing ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                )}
              </button>
              <button
                onClick={next}
                disabled={tracks.length <= 1}
                className="w-9 h-9 rounded-full hover:bg-navy-50 text-navy-700 flex items-center justify-center transition disabled:opacity-30"
                aria-label="다음"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2 mb-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-navy-500 shrink-0">
                <path d="M3 10v4h4l5 5V5L7 10H3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="flex-1 accent-brand-orange"
              />
              <span className="text-[10px] text-navy-400 w-7 text-right">
                {Math.round(volume * 100)}
              </span>
            </div>

            <button
              onClick={stopBgm}
              className="w-full text-[11px] text-navy-400 hover:text-red-500 py-1 transition"
            >
              배경음악 끄기
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function MusicNote() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
