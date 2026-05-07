// 기업 외관 빌딩 사진 — 메인 톤앤매너 anchor.
// 일러스트는 components/Illustrations.tsx 의 SVG 컴포넌트를 사용한다.
const u = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

export const IMG = {
  // Hero / PageHeader 메인
  building: u("photo-1486406146926-c627a92ad1ab", 2400),
  // CTA / 통계 배경
  buildingModern: u("photo-1486325212027-8081e485255e", 2000),
  // 기업 사옥 (옵션)
  buildingTall: u("photo-1554224155-6726b3ff858f", 2000),
  // 글래스 빌딩 외관
  buildingGlass: u("photo-1448630360428-65456885c650", 2000),
};
