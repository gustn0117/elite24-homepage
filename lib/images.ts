// 기업 외관 빌딩 사진 — 메인 톤앤매너 anchor (밝은 톤).
// 일러스트는 components/Illustrations.tsx 의 SVG 컴포넌트를 사용한다.
const u = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

export const IMG = {
  // Hero / PageHeader 메인 — 밝은 커튼월 글래스 빌딩 (로우앵글)
  building: u("photo-1496307042754-b4aa456c4a2d", 2400),
  // CTA / 통계 배경 — 푸른 하늘 + 빌딩
  buildingModern: u("photo-1486325212027-8081e485255e", 2000),
  // About / 기타 — 도시 전경
  buildingTall: u("photo-1545324418-cc1a3fa10c00", 2000),
  // 옵션
  buildingGlass: u("photo-1517445312882-bc9910d016b7", 2000),
};
