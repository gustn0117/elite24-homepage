// Client-safe: types, defaults, URL helpers. NO node: imports.
// Server-only file ops live in lib/site-config-server.ts

export type SiteConfig = {
  companyName: string;
  representativeName: string;
  phonePrimary: string;
  phonePrimaryLabel: string;
  phoneSecondary: string;
  phoneSecondaryLabel: string;
  fax: string;
  email: string;
  address: string;
  businessNumber: string;
  businessHours: string;
};

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  companyName: "(주)엘리트24",
  representativeName: "",
  phonePrimary: "02-6958-8067",
  phonePrimaryLabel: "사무실",
  phoneSecondary: "",
  phoneSecondaryLabel: "",
  fax: "070-7507-7407",
  email: "elite_24@naver.com",
  address: "서울특별시 금천구 독산로106길 15, 102호 (독산동)",
  businessNumber: "644-88-03921",
  businessHours: "평일·주말 24시간 상담",
};

// 비워둘 수 있는(선택) 필드
export const OPTIONAL_EMPTY_FIELDS: (keyof SiteConfig)[] = [
  "phoneSecondary",
  "phoneSecondaryLabel",
  "representativeName",
  "fax",
  "businessNumber",
];

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}

export function emailHref(email: string): string {
  return `mailto:${email}`;
}
