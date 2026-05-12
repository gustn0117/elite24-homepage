// Client-safe: types, defaults, URL helpers. NO node: imports.
// Server-only file ops live in lib/site-config-server.ts

export type SiteConfig = {
  companyName: string;
  representativeName: string;
  phonePrimary: string;
  phonePrimaryLabel: string;
  phoneSecondary: string;
  phoneSecondaryLabel: string;
  email: string;
  address: string;
  businessHours: string;
};

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  companyName: "(주)엘리트24",
  representativeName: "황필성",
  phonePrimary: "02-6958-8067",
  phonePrimaryLabel: "사무실",
  phoneSecondary: "",
  phoneSecondaryLabel: "",
  email: "elite_24@naver.com",
  address: "서울 금천구 독산로 106길 15 1층",
  businessHours: "평일·주말 24시간 상담",
};

// 비워둘 수 있는(선택) 필드 — 보조 연락처 등
export const OPTIONAL_EMPTY_FIELDS: (keyof SiteConfig)[] = [
  "phoneSecondary",
  "phoneSecondaryLabel",
];

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}

export function emailHref(email: string): string {
  return `mailto:${email}`;
}
