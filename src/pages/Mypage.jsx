import { useContext, useState, useEffect } from "react";
import "./css/Mypage.css";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../context/SocialLog_data";

const MyPage = () => {
    const navigate = useNavigate();
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
  // 로컬 로그인
  const [localUser, setLocalUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ 로딩 상태 추가

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLocalUser(JSON.parse(storedUser));
    }
      setLoading(false); // ✅ localUser 확인 끝
  }, []);

  // 소셜 로그인
  const { user: socialUser } = useContext(AuthContext);

  // 최종적으로 쓸 사용자 (소셜 > 로컬)
  const currentUser = socialUser || localUser;

   // ✅ 로그인 안 했을 때 막기
// ✅ 로그인 안 했을 때 막기
useEffect(() => {
  if (!loading && !currentUser) {   // ✅ 로딩 끝난 뒤에만 체크
    alert("로그인이 필요합니다.");
    navigate("/", { state: { openLogin: true } });
  }
}, [currentUser, loading, navigate]);

  const { logout: socialLogout } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // 로컬
    socialLogout(); // 소셜
    alert("로그아웃 되었습니다.");
    window.location.href = "/";
  };
// 추첨페이지에서 마이페이지로 쿠폰 내용 끌어오기
const [coupons, setCoupons] = useState([]);

// ✅ 유저 정보 가져오기
const userId = currentUser?.id || currentUser?.name || "guest";

useEffect(() => {
  if (userId) {
    const storageKey = `coupons_${userId}`;
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");

    // ✅ 임시 저장된 쿠폰 확인
    const tempCoupons = JSON.parse(localStorage.getItem("coupons_temp") || "[]");

    if (tempCoupons.length > 0) {
      // 임시 쿠폰을 현재 유저 쿠폰에 병합
      const merged = [...saved, ...tempCoupons];

      // 유저별 저장소에 저장
      localStorage.setItem(storageKey, JSON.stringify(merged));

      // 임시 저장소는 삭제
      localStorage.removeItem("coupons_temp");

      setCoupons(merged);
    } else {
      setCoupons(saved);
    }
  }
}, [userId]);

// ✅ 페이지네이션 state 추가
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5;

const totalPages = Math.ceil(coupons.length / itemsPerPage);
const indexOfLast = currentPage * itemsPerPage;
const indexOfFirst = indexOfLast - itemsPerPage;
const currentCoupons = coupons.slice(indexOfFirst, indexOfLast);

const handlePageChange = (page) => {
  if (page >= 1 && page <= totalPages) {
    setCurrentPage(page);
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
          <p className="my_hello">
            안녕하세요, {currentUser ? currentUser.name : "회원"}님
          </p>
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
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="4"
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
    {/* ✅ 쿠폰 개수 표시 (없으면 0장) */}
    <p className="main">{coupons.length}장</p>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="m19 12l12 12l-12 12"
                  />
                </svg>
              </p>
            </Link>
          </div>

          <button className="my_logout" onClick={handleLogout}>
            로그아웃
          </button>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
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
              <div>
             {coupons.length === 0 ? (
  <div className="coupon_empty">보유하고 계신 쿠폰 내역이 없습니다.</div>
) : (
  <ul className="coupon_list">
    {currentCoupons.map((c, idx) => (
      <li key={idx} className="coupon_item">
        <p className="coupon_text">{c.text}</p>
        <p className="coupon_date">
          유효기간: {new Date(c.issuedAt).toLocaleDateString()} ~{" "}
          {new Date(c.expiresAt).toLocaleDateString()}
        </p>
      </li>
    ))}
  </ul>
)}
</div>
             {totalPages > 1 && (
  <ul
    className="coupon_pagination"
    role="navigation"
    aria-label="쿠폰 페이지네이션"
  >
    <li className="page prev">
      <a href="#none" onClick={() => handlePageChange(currentPage - 1)} aria-label="이전 페이지">
        <span className="iconamoon--arrow-right-2 left" />
      </a>
    </li>

    {[...Array(totalPages)].map((_, idx) => (
      <li key={idx} className={`page ${currentPage === idx + 1 ? "is-current" : ""}`}>
        <a href="#none" onClick={() => handlePageChange(idx + 1)}>
          {idx + 1}
        </a>
      </li>
    ))}

    <li className="page next">
      <a href="#none" onClick={() => handlePageChange(currentPage + 1)} aria-label="다음 페이지">
        <span className="iconamoon--arrow-right-2" />
      </a>
    </li>
  </ul>
)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
