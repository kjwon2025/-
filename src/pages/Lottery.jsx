import React, { useEffect, useState } from "react";
import "./css/Lottery.css";
import { Link } from "react-router-dom";

const cards = [
  {
    name: "오렌지 프린세스 튤립",
    text: ["네 곁에서", "변치 않을게"],
    back: "./img/lo_cardB1.png",
    couponText: "화환 15% 할인 쿠폰",
  },
  {
    name: "연꽃",
    text: ["고마움이", "가득해"],
    back: "./img/lo_cardB2.png",
    couponText: "15% 할인 쿠폰",
  },
  {
    name: "코스모스",
    text: ["너의 빛을", "잃지 마"],
    back: "./img/lo_cardB3.png",
    couponText: "5% 할인 쿠폰",
  },
  {
    name: "스트라이프 튤립",
    text: ["진심을", "전할게"],
    back: "./img/lo_cardB4.png",
  },
  {
    name: "카라꽃",
    text: ["마음은", "순수하게"],
    back: "./img/lo_cardB5.png",
    couponText: "향수 8% 할인 쿠폰",
  },
  {
    name: "작약",
    text: ["나를", "잊지마"],
    back: "./img/lo_cardB6.png",
    couponText: "화병 3% 할인 쿠폰",
  },
  {
    name: "라벤더",
    text: ["행운이", "너에게"],
    back: "./img/lo_cardB7.png",
    couponText: "3,000원 할인 쿠폰",
  },
  { name: "목련", text: ["다시", "피어날거야"], back: "./img/lo_cardB8.png" },
  {
    name: "은방울꽃",
    text: ["참된 우정을", "담아"],
    back: "./img/lo_cardB9.png",
    couponText: "전품목 3% 할인 쿠폰",
  },
];

export default function Lottery() {
  const [stacked, setStacked] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [canPick, setCanPick] = useState(false);
  const [hasPicked, setHasPicked] = useState(false);
  const [selected, setSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const cardEls = document.querySelectorAll(".lo_card");
    const targetIndex = 4; // 0-based index → 5번째 카드
    const targetRect = cardEls[targetIndex].getBoundingClientRect();

    cardEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const dx =
        targetRect.left + targetRect.width / 2 - (rect.left + rect.width / 2);
      const dy =
        targetRect.top +
        targetRect.height / 2 -
        (rect.top + rect.height / 2) -
        150;
      el.style.setProperty("--dx", `${dx}px`);
      el.style.setProperty("--dy", `${dy}px`);
    });

    setStacked(true); // 5번째 카드로 모이기

    const timer = setTimeout(() => {
      setStacked(false); // 다시 원래 위치로 퍼지기
      setCanPick(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (index) => {
    if (!canPick || hasPicked || flippedIndex !== null) return;
    setFlippedIndex(index);
    setHasPicked(true);

    setTimeout(() => {
      setSelected(cards[index]); // 모달 내용 세팅
      setTimeout(() => setModalVisible(true), 50); // show 클래스 딜레이 적용
    }, 1000);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelected(null), 500); // 애니메이션 끝난 뒤 제거
  };

  return (
    <div id="lottery">
      <div className="lo_title">
        <h1>오늘의 꽃말</h1>
      </div>
      <div className="lo_cardBox">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`lo_card ${stacked ? "centered" : ""} ${
              flippedIndex === index ? "is-flipped" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="lo_cardInner">
              <div className="lo_cardFace lo_cardFront">
                <div className="lo_cardFrame">
                  <img src="./img/lo_card.png" alt="앞면 아이콘" />
                  <div className="lo_cardText">
                    {card.text.map((t) => (
                      <div key={t}>{t}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lo_cardFace lo_cardBack">
                <img src={card.back} alt={`${card.name} 뒷면 카드`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          id="lo_modal"
          className={modalVisible ? "show" : ""}
          onClick={closeModal} // 🔹 배경 클릭 시 닫기
        >
          <div
            className="lo_modalWrap"
            onClick={(e) => e.stopPropagation()} // 🔹 모달 내용 클릭 시 닫히지 않게 막기
          >
            <div className="lo_modalHeader">
              <div className="name">{selected.name}</div>
              <div className="msg">{`“ ${selected.text.join(" ")} ”`}</div>
            </div>
            <img
              className="lo_modalImg"
              src={selected.back}
              alt={selected.name}
            />
            <Link to="/mypage" className="lo_coupon" onClick={closeModal}>
              {selected.couponText ?? "10% 할인 쿠폰"}
            </Link>
            <div className="lo_modalFoot">
              <p className="lo_notice">
                *쿠폰은 마이페이지에서 확인 가능합니다..
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
