import "./css/PaymentCompleted.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PaymentCompleted() {
  const navigate = useNavigate();
  const [showEventModal, setShowEventModal] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const goCategory = () => navigate("/Category");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Math.random() < 0.2) {
        // 20% 확률
        setShowEventModal(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // 모달이 열리면 컨페티 생성
  useEffect(() => {
    if (showEventModal) {
      const confettiArray = [];
      const total = 100; // 풍성하게 갯수 증가
      for (let i = 0; i < total; i++) {
        confettiArray.push({
          id: i,
          left: Math.random() * 100 + "vw",
          size: 5 + Math.random() * 10 + "px", // 크기 다양화
          bg: `hsl(${Math.random() * 360}, 100%, 50%)`,
          delay: Math.random() * 2 + "s",
          duration: 3 + Math.random() * 3 + "s",
          rotate: Math.random() * 360 + "deg",
        });
      }
      setConfetti(confettiArray);
    } else {
      setConfetti([]);
    }
  }, [showEventModal]);

  const closeModal = () => setShowEventModal(false);

  return (
    <>
      <div id="sec1allPC">
        <h1 className="sec1titlePC">결제 완료</h1>
        <div className="sec1contentPC">
          <div className="contenttopPC">
            <img src="./img/pc_flower.png" alt="pc_flower" />
          </div>
          <div className="contentbottomPC">
            <div className="completePC">주문이 완료되었습니다!</div>
            <div className="completenumPC">
              <br /> 2025.00.00 주문하신 상품의
              <br /> 주문번호는 000000 입니다.
            </div>
          </div>
        </div>
        <div id="sec1bottomPC">
          <button className="sec1buttonleftPC">주문상세 보기</button>
          <button className="sec1buttonrightPC" onClick={goCategory}>
            계속 쇼핑하기
          </button>
        </div>
      </div>

      {/* 컨페티 */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="confetti"
          style={{
            left: c.left,
            width: c.size,
            height: c.size,
            backgroundColor: c.bg,
            animationDelay: c.delay,
            animationDuration: c.duration,
            transform: `rotate(${c.rotate})`,
          }}
        />
      ))}

      {/* 이벤트 모달 */}
      <div
        id="paymenteventPCE"
        className={`modalOverlay ${showEventModal ? "show" : ""}`}
        onClick={closeModal}
      >
        <div
          className="modalContentPCE prize"
          onClick={(e) => e.stopPropagation()}
        >
          <img src="../img/pce_flower.png" alt="pce_flower" />
          <h2 className="h2PCE sparkle">yuri님, 이벤트 당첨!</h2>
          <p className="ptextPCE sparkle">튤립 한 송이를 같이 보내드립니다!</p>
          <button onClick={closeModal}>닫기</button>
        </div>
      </div>
    </>
  );
}
