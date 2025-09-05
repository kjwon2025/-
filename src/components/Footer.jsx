import { useState, useRef, useEffect } from "react";
import "./css/Footer.css";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const footerHideRef = useRef(null);
  const rafRef = useRef(null);
  const mapRef = useRef(null); // 지도 div 참조
  const mapInitialized = useRef(false); // 지도 초기화 여부

  // 푸터 열림/닫힘 처리
  useEffect(() => {
    const footerEl = footerHideRef.current;
    if (!footerEl) return;

    footerEl.style.maxHeight = open ? `${footerEl.scrollHeight}px` : "0px";

    const followScroll = () => {
      if (open) {
        footerEl.scrollIntoView({ behavior: "auto", block: "end" });
        rafRef.current = requestAnimationFrame(followScroll);
      }
    };

    if (open) {
      rafRef.current = requestAnimationFrame(followScroll);

      // transition이 끝난 후 스크롤 취소 + 지도 초기화
      footerEl.addEventListener(
        "transitionend",
        () => {
          // 스크롤 따라가기 취소
          if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
          }

          // 지도 초기화
          if (!mapInitialized.current && mapRef.current) {
            const KAKAO_KEY = process.env.REACT_APP_KAKAO_JS_KEY;
            const script = document.createElement("script");
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false`;
            script.async = true;
            script.onload = () => {
              window.kakao.maps.load(() => {
                new window.kakao.maps.Map(mapRef.current, {
                  center: new window.kakao.maps.LatLng(37.3081, 126.851),
                  level: 3,
                });
                mapInitialized.current = true;
              });
            };
            document.head.appendChild(script);
          }
        },
        { once: true }
      );
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [open]);

  return (
    <footer id="footerMP">
      <div id="footercon1MP">
        <div className="ftHead">
          <h1>핀아</h1>
          <span className="fthSPAN">Copyright@ 핀아.All rights reserved</span>

          <div className="fthSNS">
            {/* SNS 아이콘들 */}
            <a
              href="https://www.instagram.com/pinaanippinaanip/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01" />
                </g>
              </svg>
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              {" "}
              <path
                fill="currentColor"
                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
              />{" "}
            </svg>{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {" "}
              <g fill="none" fillRule="evenodd">
                {" "}
                <path d="..." />{" "}
                <path
                  fill="currentColor"
                  d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"
                />{" "}
              </g>{" "}
            </svg>
          </div>

          {/* 화살표 */}
          <svg
            className={`fthARCO ${open ? "rotate" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 7"
            onClick={() => setOpen(!open)}
          >
            <path
              fill="currentColor"
              d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z"
            />
          </svg>
        </div>
      </div>

      {/* 숨겨지는 하단 푸터 */}
      <div id="footerhideMP" ref={footerHideRef}>
        <div className="footerlineMP"></div>
        <div id="footercon2MP">
          <div className="ftItem1">
            <span className="ftItemSpan">
              법인명 (상호) : 핀아
              <br />
              대표자 : 김박장유리
              <br />
              <br />
              <br />
              주소 : 경기 안산시 상록구 광덕1로 375 강우프라자 5층
              이젠컴퓨터아카데미 안산교육센터
              <br />
              통신판매업 : 0000-경기안산-00000
              <br />
              사업자등록번호 : 211-88-79575
              <br />
              <br />
              고객센터 1234 - 5678
              <br />
              AM 10:00 - PM 18:00 점심시간 12:30 - 13:30 (주말 & 공휴일 휴무)
              <br />
              <br />
              당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급보증
              계약을 체결하여
              <br />
              안전거래를 보장하고 있습니다.
            </span>

            <div className="ftNav">
              <div className="ftnBtn">회사소개</div>
              <div className="ftnBtn">이용약관</div>
              <div className="ftnBtn">개인정보 취급방침</div>
              <div className="ftnBtn">이용안내</div>
            </div>
          </div>

          <div className="ftItem2">
            <span className="ftMapInfo"></span>
            {/* 지도 div */}
            <div className="ftMap" ref={mapRef}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
