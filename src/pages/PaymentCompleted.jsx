import "./css/PaymentCompleted.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PaymentCompleted() {
  const navigate = useNavigate();
  const [showEventModal, setShowEventModal] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [event, setEvent] = useState(null); // 선택된 이벤트

  // 여기서 이벤트 옵션 배열 선언
  const eventOptions = [
    {
      img: "../img/pce_flower.png",
      title: "yuri님, 이벤트 당첨!",
      text: "튤립 한 송이를 함께 보내드립니다!",
    },
    {
      img: "../img/pce_flower2.png",
      title: "yeojin님 이벤트 당첨!",
      text: "유리 화병을 함께 보내드립니다!",
    },
    {
      img: "../img/pce_flower3.png",
      title: "jiwon님 이벤트 당첨!",
      text: "미니 화분을 함께 보내드립니다!",
    },
  ];

  const goCategoryDetail = () => navigate("/CategoryDetail");
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Math.random() < 0.8) {
        // 80% 확률로 모달 열기
        const randomEvent =
          eventOptions[Math.floor(Math.random() * eventOptions.length)];
        setEvent(randomEvent); // 선택된 이벤트 저장
        setShowEventModal(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // 모달이 열리면 컨페티 생성
  // 컨페티 생성
  useEffect(() => {
    if (showEventModal) {
      const confettiArray = [];
      const total = 100;
      for (let i = 0; i < total; i++) {
        confettiArray.push({
          id: i,
          left: Math.random() * 100 + "vw",
          size: 5 + Math.random() * 10 + "px",
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
          <button className="sec1buttonrightPC" onClick={goCategoryDetail}>
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
          {/* event 상태가 있을 때만 렌더 */}
          {event && (
            <>
              <img src={event.img} alt="event_image" />
              <h2 className="h2PCE sparkle">{event.title}</h2>
              <p className="ptextPCE sparkle">{event.text}</p>
            </>
          )}
          <button onClick={closeModal}>닫기</button>
        </div>
      </div>
    </>
  );
}
