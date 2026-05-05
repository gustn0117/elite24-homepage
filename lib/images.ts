// 단 하나의 외부 사진만 사용 — 글래스 빌딩 외관.
// 나머지 일러스트는 components/Illustrations.tsx 의 SVG 컴포넌트를 사용한다.
const u = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const IMG = {
  building: u("photo-1486406146926-c627a92ad1ab", 2000),
};
