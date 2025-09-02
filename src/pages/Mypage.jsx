import { useState, useEffect } from "react";
import "./css/Mypage.css";
import { Link } from "react-router-dom";

const MyPage = () => {
  const ORDERS_ID = "panel-orders";
  const COUPONS_ID = "panel-coupons";

  // 현재 보여줄 패널 상태
  const [activePanel, setActivePanel] = useState(ORDERS_ID);

  // URL 해시 기반 초기 패널 설정
  useEffect(() => {
    const hashId = window.location.hash.replace("#", "");
    if (hashId === ORDERS_ID || hashId === COUPONS_ID) {
      setActivePanel(hashId);
    }
  }, []);

  // 좌측 메뉴 / 쿠폰 버튼 클릭
  const handleMenuClick = (panelTarget) => {
    if (panelTarget) {
      // 특정 패널 지정 시 바로 열기
      setActivePanel(panelTarget);
    } else {
      // 쿠폰 패널이 열려 있으면 기본 주문/배송으로 복귀
      if (activePanel === COUPONS_ID) setActivePanel(ORDERS_ID);
    }
  };

  return (
    <div id="mypage">
      {/* 상단 타이틀 */}
      <div className="my_title">
        <h1>마이페이지</h1>
      </div>

      {/* 인사말 & 회원 카드 */}
      <div className="my_introduce">
        <div className="my_name">
          <p className="my_hello">안녕하세요 oo님 </p>
          <div className="my_alarm">
            기념일을 저장하시면 5%할인 쿠폰과
            <br />
            알림을 받을 수 있습니다.
          </div>
        </div>

        <div className="my_current">
          <div className="current_card">
            <div className="my_rank">
              <p className="title">회원등급</p>
              <div className="my_value">
                <p className="main">VIP</p>
                <a href="#none" className="sub">
                  혜택보기
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="m19 12l12 12l-12 12"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="my_line"></div>

            <div className="my_coupon">
              <p className="title">쿠폰</p>
              <div className="my_value">
                <p className="main">1장</p>
                <span
                  className="sub toggle-panel"
                  onClick={() => handleMenuClick(COUPONS_ID)}
                  style={{ cursor: "pointer" }}
                >
                  확인
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="m19 12l12 12l-12 12"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 좌측 메뉴 + 우측 패널 */}
      <div className="my_accessBox">
        {/* 좌측 메뉴 */}
        <div className="my_search">
          <div className="my_hmmm">
            <div className="my_order" onClick={() => handleMenuClick()}>
              <p>주문내역/배송조회</p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m19 12l12 12l-12 12"
                  />
                </svg>
              </p>
            </div>
            <div className="my_order" onClick={() => handleMenuClick()}>
              <p>나의 주문내역</p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m19 12l12 12l-12 12"
                  />
                </svg>
              </p>
            </div>
            <div className="my_order" onClick={() => handleMenuClick()}>
              <p>좋아요 내역</p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m19 12l12 12l-12 12"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="my_hmmm02">
            <div className="my_order" onClick={() => handleMenuClick()}>
              <p>프로필 관리</p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m19 12l12 12l-12 12"
                  />
                </svg>
              </p>
            </div>
            <div className="my_order" onClick={() => handleMenuClick()}>
              <p>배송지 관리</p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m19 12l12 12l-12 12"
                  />
                </svg>
              </p>
            </div>
            <div className="my_order" onClick={() => handleMenuClick()}>
              <p>회원등급 안내</p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m19 12l12 12l-12 12"
                  />
                </svg>
              </p>
            </div>

            <div
              className="my_order"
              onClick={() => handleMenuClick(COUPONS_ID)}
            >
              <p>쿠폰</p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m19 12l12 12l-12 12"
                  />
                </svg>
              </p>
            </div>

            <Link
              className="my_order"
              to={"/qna"}
              onClick={() => handleMenuClick()}
            >
              <p className="qna-link">1:1 문의하기</p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m19 12l12 12l-12 12"
                  />
                </svg>
              </p>
            </Link>
          </div>

          <Link to={"/"} className="my_logout">
            로그아웃
          </Link>
        </div>

        {/* 우측 패널 */}
        <div className="my_access">
          {/* 주문/배송 패널 */}
          <div
            className="panel"
            id={ORDERS_ID}
            hidden={activePanel !== ORDERS_ID}
          >
            <h1>주문/배송 조회</h1>
            <div className="my_delivery">
              <div className="my_deliWait">
                <p>0</p>
                <p>입금 대기중</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m19 12l12 12l-12 12"
                  />
                </svg>
              </div>
              <div className="my_deliWait">
                <p>1</p>
                <p>발송 대기중</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m19 12l12 12l-12 12"
                  />
                </svg>
              </div>
              <div className="my_deliWait">
                <p>0</p>
                <p>배송중</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m19 12l12 12l-12 12"
                  />
                </svg>
              </div>
              <div className="my_deliWait">
                <p>0</p>
                <p>발송 완료</p>
              </div>
            </div>

            <div className="my_history">
              <p>나의 주문내역</p>
              <div>
                <p>주문 내역이 존재하지 않습니다.</p>
              </div>
            </div>

            <div className="my_service">
              <div className="service_box">
                <p>회원등급 안내</p>
                <p>신규 회원가입 혜택 안내</p>
              </div>
              <div className="service_box">
                <p>배송지 관리</p>
                <p>배송지 확인하기</p>
              </div>
            </div>
          </div>

          {/* 쿠폰 패널 */}
          <div
            className="panel"
            id={COUPONS_ID}
            hidden={activePanel !== COUPONS_ID}
          >
            <h1>쿠폰 내역</h1>
            <div className="coupon_box">
              <form
                className="coupon_form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="coupon_input"
                  type="text"
                  placeholder="12자리를 입력하세요. ex)0000-0000-0000"
                />
                <button className="coupon_btn" type="submit">
                  쿠폰번호 입력
                </button>
              </form>
              <div className="coupon_empty">
                보유하고 계신 쿠폰 내역이 없습니다.
              </div>
              <ul
                className="coupon_pagination"
                role="navigation"
                aria-label="쿠폰 페이지네이션"
              >
                <li className="page prev">
                  <a href="#none" aria-label="이전 페이지">
                    <span class="iconamoon--arrow-right-2 left" />
                  </a>
                </li>
                <li className="page is-current">
                  <a href="#none" aria-current="page">
                    1
                  </a>
                </li>
                <li className="page next">
                  <a href="#none" aria-label="다음 페이지">
                    <span class="iconamoon--arrow-right-2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
