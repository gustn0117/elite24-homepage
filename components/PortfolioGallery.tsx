"use client";

import { useEffect, useState } from "react";

type Item = { name: string; size: number; modified: number; url: string };

export default function PortfolioGallery() {
  const [tab, setTab] = useState<"images" | "videos">("images");
  const [images, setImages] = useState<Item[]>([]);
  const [videos, setVideos] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<Item | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [imgRes, vidRes] = await Promise.all([
          fetch("/api/media?type=images", { cache: "no-store" }),
          fetch("/api/media?type=videos", { cache: "no-store" }),
        ]);
        const imgData = await imgRes.json();
        const vidData = await vidRes.json();
        if (cancelled) return;
        setImages(imgData.files ?? []);
        setVideos(vidData.files ?? []);
      } catch {
        if (!cancelled) {
          setImages([]);
          setVideos([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const items = tab === "images" ? images : videos;

  return (
    <section className="section bg-white">
      <div className="container-pad">
        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setTab("images")}
            className={`px-6 py-3 rounded-full text-sm font-bold transition ${
              tab === "images"
                ? "bg-brand-orange text-white shadow-glow"
                : "bg-white text-navy-700 border border-navy-200 hover:border-brand-orange hover:text-brand-orange"
            }`}
          >
            <span className="mr-2">🖼️</span>
            사진 ({images.length})
          </button>
          <button
            onClick={() => setTab("videos")}
            className={`px-6 py-3 rounded-full text-sm font-bold transition ${
              tab === "videos"
                ? "bg-brand-orange text-white shadow-glow"
                : "bg-white text-navy-700 border border-navy-200 hover:border-brand-orange hover:text-brand-orange"
            }`}
          >
            <span className="mr-2">🎬</span>
            영상 ({videos.length})
          </button>
        </div>

        {loading ? (
          <div className="text-center py-16 text-navy-400">불러오는 중...</div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-navy-200 bg-navy-50/40 p-12 text-center">
            <div className="text-4xl mb-3">{tab === "images" ? "📸" : "🎥"}</div>
            <p className="text-navy-600 font-semibold">
              아직 등록된 {tab === "images" ? "사진" : "영상"}이 없습니다.
            </p>
            <p className="mt-2 text-sm text-navy-400">
              곧 업데이트될 예정입니다.
            </p>
          </div>
        ) : tab === "images" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {items.map((it, i) => (
              <button
                key={it.name}
                onClick={() => setLightbox(it)}
                className="group relative aspect-square bg-navy-50 rounded-2xl overflow-hidden hover:shadow-cardHover hover:-translate-y-1 transition animate-fade-up"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <img
                  src={it.url}
                  alt={it.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </button>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <div
                key={it.name}
                className="bg-navy-50 rounded-2xl overflow-hidden border border-navy-100 animate-fade-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <video
                  src={it.url}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full aspect-video bg-black"
                />
                <div className="px-4 py-3 text-[12px] text-navy-500 truncate">
                  {it.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[80] bg-brand-navyDeep/90 backdrop-blur-sm flex items-center justify-center p-5 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/15 text-white hover:bg-white/25 flex items-center justify-center transition"
            aria-label="닫기"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <img
            src={lightbox.url}
            alt={lightbox.name}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
