import React, { useState } from "react";
import "./css/Payment.css";
import { useNavigate } from "react-router-dom";

const formatKRW = (n) => n.toLocaleString("ko-KR");

export default function PaymentPage() {
  const navigate = useNavigate();
  const [buyer, setBuyer] = useState({ name: "", phone: "" });
  const [sender, setSender] = useState({ name: "" });
  const [receiver, setReceiver] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [coupon, setCoupon] = useState("");
  const [payMethod, setPayMethod] = useState("card");
  const [cardInfo, setCardInfo] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    year: "",
    month: "",
    pw: "",
  });

  const product = {
    name: "메리골드 위시",
    price: 49900,
    option: "크리스탈 화병",
    optionPrice: 12000,
    qty: 1,
    img: "./img/paymentimg1.png",
  };
  const total = product.price + product.optionPrice;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${formatKRW(total)}원 결제가 완료되었습니다.`);
    navigate("/PaymentCompleted");
  };

  return (
    <>
      <div id="s1PM">
        <div id="s1conPM">
          <h1 className="h1PM">주문 결제</h1>

          <div className="conboxPM">
            <h2 className="h2PM">주문 내역</h2>

            <div className="subcon1PM">
              <div className="sc1iboxPM">
                <img src={product.img} alt="payment img" />
              </div>
              <div className="sc1infoPM">
                <span className="infoboldPM">{product.name}</span>
                <span>
                  {formatKRW(product.price)}원 / 수량 : {product.qty}개<br />
                  {product.option} (+{formatKRW(product.optionPrice)}원)
                </span>
                <span className="infoboldPM">총 {formatKRW(total)}원</span>
              </div>
            </div>

            <form className="buyformPM" onSubmit={handleSubmit}>
              <h3 className="h31PM">주문자 정보</h3>
              <div className="buyinfoPM">
                <span>이름</span>
                <input
                  type="text"
                  className="biidPM"
                  placeholder="이름을 입력해주세요."
                  value={buyer.name}
                  onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
                />
                <span>연락처</span>
                <input
                  type="tel"
                  className="biphonePM"
                  placeholder="연락처를 입력해주세요."
                  value={buyer.phone}
                  onChange={(e) =>
                    setBuyer({ ...buyer, phone: e.target.value })
                  }
                />
              </div>

              <h3 className="h32PM">발신인</h3>
              <div className="sendPM">
                <span>이름</span>
                <input
                  type="text"
                  className="snPM"
                  placeholder="이름을 입력해주세요."
                  value={sender.name}
                  onChange={(e) => setSender({ name: e.target.value })}
                />
              </div>

              <div className="pitbPM">
                <h3 className="h33PM">배송지 정보</h3>
                <div className="picbPM">
                  <input type="checkbox" id="directInput" />
                  <label htmlFor="directInput">받는 분이 직접 입력</label>
                </div>
              </div>

              <div className="placeinfoPM">
                <span>받는 분 이름</span>
                <input
                  type="text"
                  className="piidPM"
                  placeholder="받는 분 이름을 입력해주세요."
                  value={receiver.name}
                  onChange={(e) =>
                    setReceiver({ ...receiver, name: e.target.value })
                  }
                />
                <span>전화번호</span>
                <input
                  type="tel"
                  className="piphonePM"
                  placeholder="전화번호를 입력해주세요."
                  value={receiver.phone}
                  onChange={(e) =>
                    setReceiver({ ...receiver, phone: e.target.value })
                  }
                />
                <span>주소</span>
                <input
                  type="text"
                  className="piaddressPM"
                  placeholder="주소를 입력해주세요."
                  value={receiver.address}
                  onChange={(e) =>
                    setReceiver({ ...receiver, address: e.target.value })
                  }
                />
              </div>

              <div className="howbPM">
                <h3 className="h34PM">배송 방법</h3>
                <div className="hdivPM">오늘 배송</div>
              </div>

              <h3 className="h35PM">쿠폰</h3>
              <div className="couponPM">
                <span>쿠폰 할인</span>
                <div className="cpinfoPM">
                  <input
                    type="text"
                    className="cpcodePM"
                    placeholder="쿠폰 코드를 입력해주세요."
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => alert("쿠폰 적용 기능 구현 필요")}
                  >
                    코드적용
                  </button>
                </div>
                <div className="canusePM">
                  <span className="cuse1PM">사용 가능 쿠폰</span>
                  <span className="cuse2PM">보유한 쿠폰이 없습니다.</span>
                </div>
              </div>

              <h3 className="h36PM">결제 수단 선택</h3>
              <div className="paywayPM">
                <div className="pwbtnboxPM">
                  <button
                    type="button"
                    className="pwbtn1PM"
                    onClick={() => setPayMethod("card")}
                  >
                    신용카드
                  </button>
                  <button
                    type="button"
                    className="pwbtn2PM"
                    onClick={() => setPayMethod("bank")}
                  >
                    무통장 입금
                  </button>
                </div>

                {payMethod === "card" && (
                  <>
                    <span>신용카드 번호 (직접 입력)</span>
                    <div className="pwcardPM">
                      <input
                        type="text"
                        className="cardnum1PM"
                        maxLength="4"
                        value={cardInfo.num1}
                        onChange={(e) =>
                          setCardInfo({ ...cardInfo, num1: e.target.value })
                        }
                      />
                      <input
                        type="password"
                        className="cardnum2PM"
                        maxLength="4"
                        value={cardInfo.num2}
                        onChange={(e) =>
                          setCardInfo({ ...cardInfo, num2: e.target.value })
                        }
                      />
                      <input
                        type="password"
                        className="cardnum2PM"
                        maxLength="4"
                        value={cardInfo.num3}
                        onChange={(e) =>
                          setCardInfo({ ...cardInfo, num3: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        className="cardnum1PM"
                        maxLength="4"
                        value={cardInfo.num4}
                        onChange={(e) =>
                          setCardInfo({ ...cardInfo, num4: e.target.value })
                        }
                      />
                    </div>

                    <span>유효기간 (년/월)</span>
                    <div className="pwymPM">
                      <input
                        type="number"
                        className="yearPM"
                        placeholder="YYYY"
                        value={cardInfo.year}
                        onChange={(e) =>
                          setCardInfo({ ...cardInfo, year: e.target.value })
                        }
                      />
                      <input
                        type="number"
                        className="monthPM"
                        placeholder="MM"
                        value={cardInfo.month}
                        onChange={(e) =>
                          setCardInfo({ ...cardInfo, month: e.target.value })
                        }
                      />
                    </div>

                    <span>비밀번호 앞 두자리</span>
                    <input
                      type="number"
                      className="pwtwoPM"
                      maxLength="2"
                      value={cardInfo.pw}
                      onChange={(e) =>
                        setCardInfo({ ...cardInfo, pw: e.target.value })
                      }
                    />
                  </>
                )}
              </div>

              <div className="pwagreetextPM">
                <span>
                  이용약관 및 개인정보 처리방침에 대해 확인하였으며 결제에
                  동의합니다.
                  <br />
                  <br />
                  배송안내
                  <br />
                  배송일, 배송지 변경은 '발송대기' 상태에서만 가능합니다.
                  <br />
                  자연재해로 인하여 교통 및 기상 상황이 좋지 못할 경우, 배송이
                  지연될 수 있는 점 양해 부탁드립니다.
                  <br />
                  <br />
                  오늘배송 안내
                  <br />
                  오늘배송 주문의 특성상 '발송 준비중' 상태에서 취소와 주소지
                  변경이 어렵습니다.
                  <br />
                  필요시 고객센터로 즉시 연락해주세요.
                </span>
              </div>

              <button type="submit" className="pwlastbtnPM">
                {formatKRW(total)}원 결제하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
