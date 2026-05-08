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
  phoneSecondary: "010-3956-6618",
  phoneSecondaryLabel: "대표",
  email: "pirseng0825@naver.com",
  address: "서울 금천구 독산로 106길 15",
  businessHours: "평일·주말 24시간 상담",
};

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}

export function emailHref(email: string): string {
  return `mailto:${email}`;
}
