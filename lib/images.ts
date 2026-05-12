// 기업 외관 빌딩 사진 — 메인 톤앤매너 anchor (밝은 톤).
// 일러스트는 components/Illustrations.tsx 의 SVG 컴포넌트를 사용한다.
const u = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

export const IMG = {
  // Hero / PageHeader 메인 — 밝은 유리 외벽 사옥
  building: u("photo-1554469384-e58fac16e23a", 2400),
  // CTA / 통계 배경 — 밝은 글래스 빌딩 (로우앵글)
  buildingModern: u("photo-1486325212027-8081e485255e", 2000),
  // About / 기타 — 도시 전경
  buildingTall: u("photo-1545324418-cc1a3fa10c00", 2000),
  // 옵션
  buildingGlass: u("photo-1564013799919-ab600027ffc6", 2000),
};
