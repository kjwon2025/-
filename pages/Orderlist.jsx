import React, { useState } from "react";

import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import Login from "../components/Login";
import NavChat from "../components/NavChat";

import "./Orderlist.css";

const formatKRW = (n) => n.toLocaleString("ko-KR");

// 예시 데이터
const initialOrders = [
  {
    id: "00000-00000",
    items: [
      {
        id: 1,
        name: "상품명 A",
        price: 12000,
        status: "배송 중",
        img: "./img/cartimg1.png",
      },
      {
        id: 2,
        name: "상품명 B",
        price: 18000,
        status: "배송 완료",
        img: "./img/cartimg2.png",
      },
    ],
  },
  {
    id: "00000-00001",
    items: [
      {
        id: 3,
        name: "상품명 C",
        price: 15000,
        status: "배송 준비 중",
        img: "./img/cartimg1.png",
      },
    ],
  },
];

export default function OrderList() {
  const [orders] = useState(initialOrders);
  const [loginActive, setLoginActive] = useState(false);

  const goBrowse = () => {
    alert("상품 구경하기 페이지로 이동");
  };

  if (!orders || orders.length === 0) {
    return (
      <>
        <Header2 openLogin={() => setLoginActive(true)} />
        <div id="s1noneOL">
          <div id="noneboxOL">
            <h1 className="noneh1OL">주문내역</h1>
            <div className="nonecontentOL">
              <span className="nonespanOL">주문내역이 없습니다.</span>
              <div className="noneitembtnOL" role="button" onClick={goBrowse}>
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
      <div id="s1OL">
        <div id="s1boxOL">
          <h1 className="h1OL">주문내역</h1>

          {orders.map((order, idx) => {
            const total = order.items.reduce((acc, it) => acc + it.price, 0);

            return (
              <div
                key={order.id}
                className={idx === 0 ? "s1content1OL" : "s1content2OL"}
              >
                <div className={idx === 0 ? "conbox1OL" : "con2box1OL"}>
                  {order.id}
                </div>

                <div className={idx === 0 ? "conbox2OL" : "con2box2OL"}>
                  {order.items.map((it, i) => (
                    <div
                      key={it.id}
                      className={idx === 0 ? `cbb${i + 1}OL` : `c2bb${i + 1}OL`}
                    >
                      <div className="itemimgOL">
                        <img src={it.img} alt={`${it.name} 이미지`} />
                      </div>
                      <div className="itemnameOL">{it.name}</div>
                      <div className="itempriceOL">{formatKRW(it.price)}원</div>
                      <div className="itemdlvOL">{it.status}</div>
                      <div className="reviewboxOL">
                        <button
                          className="rvbtnOL"
                          type="button"
                          onClick={() => alert(`${it.name} 리뷰 쓰기`)}
                        >
                          리뷰 쓰기
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={idx === 0 ? "conbox3OL" : "con2box3OL"}>
                  합계 : {formatKRW(total)}원
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <Login isActive={loginActive} closeLogin={() => setLoginActive(false)} />
      <NavChat />
    </>
  );
}
