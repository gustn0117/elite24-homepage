import "server-only";

import { promises as fsp, readFileSync } from "node:fs";
import path from "node:path";
import {
  DEFAULT_SITE_CONFIG,
  OPTIONAL_EMPTY_FIELDS,
  type SiteConfig,
} from "./site-config";

const CONFIG_PATH =
  process.env.SITE_CONFIG_PATH ?? "/app/data/site-config.json";

/* sync — used by server components and API routes */
export function getSiteConfig(): SiteConfig {
  try {
    const raw = readFileSync(CONFIG_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SITE_CONFIG, ...sanitize(parsed) };
  } catch {
    return DEFAULT_SITE_CONFIG;
  }
}

export async function saveSiteConfig(input: unknown): Promise<SiteConfig> {
  const merged = { ...DEFAULT_SITE_CONFIG, ...sanitize(input) };
  await fsp.mkdir(path.dirname(CONFIG_PATH), { recursive: true });
  await fsp.writeFile(CONFIG_PATH, JSON.stringify(merged, null, 2), "utf-8");
  return merged;
}

function sanitize(raw: unknown): Partial<SiteConfig> {
  if (!raw || typeof raw !== "object") return {};
  const out: Partial<SiteConfig> = {};
  const keys: (keyof SiteConfig)[] = [
    "companyName",
    "representativeName",
    "phonePrimary",
    "phonePrimaryLabel",
    "phoneSecondary",
    "phoneSecondaryLabel",
    "fax",
    "email",
    "address",
    "businessNumber",
    "cargoLicense",
    "insurance",
    "businessHours",
  ];
  const r = raw as Record<string, unknown>;
  for (const k of keys) {
    const v = r[k];
    if (typeof v === "string") {
      const trimmed = v.trim().slice(0, 200);
      if (trimmed || OPTIONAL_EMPTY_FIELDS.includes(k)) out[k] = trimmed;
    }
  }
  return out;
}
