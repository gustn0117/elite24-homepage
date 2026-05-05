import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-pad py-14">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logo-white.png"
              alt="(주)엘리트24"
              width={160}
              height={50}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed">
              기업이사 전문 이사짐센터.
              <br />
              사무실·공장·창고 이전을 안전하고
              <br />
              합리적으로 책임집니다.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold mb-4">
              사업자 정보
            </h4>
            <ul className="space-y-2 text-sm">
              <li>상호: (주)엘리트24</li>
              <li>대표: 황필성</li>
              <li>주소: 서울 금천구 독산로 106길 15</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold mb-4">
              연락처
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:01039566618"
                  className="hover:text-brand-orange transition"
                >
                  대표: 010-3956-6618
                </a>
              </li>
              <li>
                <a
                  href="tel:0269588067"
                  className="hover:text-brand-orange transition"
                >
                  사무실: 02-6958-8067
                </a>
              </li>
              <li>
                <a
                  href="mailto:pirseng0825@naver.com"
                  className="hover:text-brand-orange transition"
                >
                  pirseng0825@naver.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} (주)엘리트24. All rights reserved.</span>
          <span>기업이사 전문 · 가정이사 미진행</span>
        </div>
      </div>
    </footer>
  );
}
