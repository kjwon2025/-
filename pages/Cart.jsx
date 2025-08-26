import React, { useMemo, useState } from "react";

import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import Login from "../components/Login";
import NavChat from "../components/NavChat";

import "./Cart.css";

// 간단한 금액 포맷터
const formatKRW = (n) => n.toLocaleString("ko-KR");

// 데모용 초기 데이터 (원하는 데이터로 주입 가능)
const initialItems = [
  {
    id: 1,
    name: "상품명 A",
    price: 12000,
    optionLabel: "옵션 A",
    optionPrice: 3000,
    qty: 1,
    img: "./img/cartimg1.png",
  },
  {
    id: 2,
    name: "상품명 B",
    price: 18000,
    optionLabel: "옵션 B",
    optionPrice: 2000,
    qty: 1,
    img: "./img/cartimg2.png",
  },
];

export default function CartPage() {
  const [items, setItems] = useState(initialItems);
  const [loginActive, setLoginActive] = useState(false);

  const total = useMemo(
    () =>
      items.reduce((acc, it) => acc + (it.price + it.optionPrice) * it.qty, 0),
    [items]
  );

  const changeQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((it) =>
          it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
        )
        .filter(Boolean)
    );
  };

  const handleCheckout = () => {
    // TODO: 결제 로직 연결
    alert(`총 결제 금액: ${formatKRW(total)}원`);
  };

  const goBrowse = () => {
    // TODO: 상품 목록 페이지로 이동 로직 연결 (예: 라우팅)
    alert("상품 목록 페이지로 이동");
  };

  // 장바구니 비었을 때
  if (!items || items.length === 0) {
    return (
      <>
        <Header2 openLogin={() => setLoginActive(true)} />
        <div id="s1noneCT">
          <div id="noneboxCT">
            <h1 className="noneh1CT">장바구니</h1>
            <div className="nonecontentCT">
              <span className="nonespanCT">담겨진 상품이 없습니다.</span>
              <div className="noneitembtnCT" role="button" onClick={goBrowse}>
                상품 구경하기
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Login
          isActive={loginActive}
          closeLogin={() => setLoginActive(false)}
        />
        <NavChat />
      </>
    );
  }

  return (
    <>
      <Header2 openLogin={() => setLoginActive(true)} />
      <div id="s1CT">
        <div id="s1boxCT">
          <h1 className="h1CT">장바구니</h1>
          <div className="s1contentCT">
            <div className="ctc1CT">
              {items.map((it, idx) => (
                <div key={it.id} className={idx === 0 ? "tboxCT" : "bboxCT"}>
                  <div className="cartimgCT">
                    <img src={it.img} alt={`${it.name} 이미지`} />
                  </div>

                  <div className="iteminfoCT">
                    <span className="infospanCT">
                      {it.name}
                      <br />
                      {formatKRW(it.price)}원
                    </span>

                    <div className="pnmboxCT" aria-label="수량 조절">
                      {/* 감소 */}
                      <button
                        type="button"
                        className="pnm-btn minus"
                        onClick={() => changeQty(it.id, -1)}
                        aria-label="수량 감소"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14"
                          />
                        </svg>
                      </button>

                      <span className="pnmcountCT" aria-live="polite">
                        {it.qty}
                      </span>

                      {/* 증가 */}
                      <button
                        type="button"
                        className="pnm-btn plus"
                        onClick={() => changeQty(it.id, +1)}
                        aria-label="수량 증가"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 5v14m-7-7h14"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="optCT">
                    <span className="optinfoCT">
                      {it.optionLabel}
                      <br />
                      {formatKRW(it.optionPrice)}원
                    </span>
                  </div>

                  <div className="itemoptpCT">
                    <span className="iopinfoCT">
                      {formatKRW(it.price + it.optionPrice)}원
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="ctc2CT">
              <div className="resultCT">합계 {formatKRW(total)}원</div>
              <div className="buybtnCT" role="button" onClick={handleCheckout}>
                결제하기
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Login isActive={loginActive} closeLogin={() => setLoginActive(false)} />
      <NavChat />
    </>
  );
}
