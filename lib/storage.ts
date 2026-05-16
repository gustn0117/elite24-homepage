import path from "node:path";

// 영구 볼륨 (docker-compose.yml에서 /app/data 로 마운트됨)
export const STORAGE_ROOT =
  process.env.STORAGE_ROOT ?? "/app/data/uploads";

export const MEDIA_TYPES = ["images", "videos", "music", "background"] as const;
export type MediaType = (typeof MEDIA_TYPES)[number];

export const ALLOWED_EXT: Record<MediaType, readonly string[]> = {
  images: ["jpg", "jpeg", "png", "gif", "webp", "svg"],
  videos: ["mp4", "webm", "mov", "m4v"],
  music: ["mp3", "wav", "ogg", "m4a", "aac"],
  background: ["mp4", "webm", "mov", "m4v"],
};

export const MIME_BY_EXT: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
  svg: "image/svg+xml",
  mp4: "video/mp4",
  webm: "video/webm",
  mov: "video/quicktime",
  m4v: "video/mp4",
  mp3: "audio/mpeg",
  wav: "audio/wav",
  ogg: "audio/ogg",
  m4a: "audio/mp4",
  aac: "audio/aac",
};

export const MAX_BYTES_BY_TYPE: Record<MediaType, number> = {
  images: 15 * 1024 * 1024, // 15MB
  videos: 200 * 1024 * 1024, // 200MB
  music: 30 * 1024 * 1024, // 30MB
  background: 100 * 1024 * 1024, // 100MB — 짧고 가벼운 루프 영상 권장
};

export function isMediaType(s: unknown): s is MediaType {
  return (
    typeof s === "string" && (MEDIA_TYPES as readonly string[]).includes(s)
  );
}

export function safeName(filename: string): string {
  const base = path.basename(filename).replace(/[^\w.\-가-힣]/g, "_");
  if (!base || base === "." || base === "..") return "file";
  return base.slice(0, 200);
}

export function dirFor(type: MediaType): string {
  return path.join(STORAGE_ROOT, type);
}

export function pathFor(type: MediaType, name: string): string {
  return path.join(dirFor(type), safeName(name));
}

export function extOf(name: string): string {
  const idx = name.lastIndexOf(".");
  return idx >= 0 ? name.slice(idx + 1).toLowerCase() : "";
}

export function isAuthed(req: Request): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const auth = req.headers.get("authorization") ?? "";
  const m = auth.match(/^Bearer\s+(.+)$/i);
  return !!m && m[1] === expected;
}
