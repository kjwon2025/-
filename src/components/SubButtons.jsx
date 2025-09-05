import { useNavigate } from "react-router-dom"; // ✅ 페이지 이동 훅
import "./css/SubButtons.css";

const buttons = [
  {
    img: "./img/sbtn1.png",
    label: "이벤트",
    path: "/Lottery",
    width: 60,
    height: 65,
  }, // 이동할 path 추가
  { img: "./img/sbtn2.png", label: "결혼/축하", width: 60, height: 65 },
  { img: "./img/sbtn3.png", label: "조문/화환", width: 60, height: 65 },
  { img: "./img/sbtn4.png", label: "승진/위임", width: 60, height: 58 },
  { img: "./img/sbtn5.png", label: "인테리어", width: 60, height: 65 },
  { img: "./img/sbtn6.png", label: "미니화분", width: 60, height: 65 },
  { img: "./img/sbtn7.png", label: "식물입문", width: 45, height: 60 },
  { img: "./img/sbtn8.png", label: "고객센터", width: 55, height: 55 },
];

const SubButtons = () => {
  const navigate = useNavigate(); // ✅ 라우터 네비게이트

  return (
    <div id="subMP">
      <div id="sbtnMP">
        {buttons.map((btn, index) => (
          <div
            className="sbtnboxMP"
            key={index}
            onClick={() => {
              if (btn.path) {
                navigate(btn.path); // ✅ path가 있을 때만 이동
              }
            }}
            style={{ cursor: btn.path ? "pointer" : "pointer" }} // 마우스 커서 변경
          >
            <div className="boxbgMP">
              <img
                src={btn.img}
                alt={btn.label}
                style={{ width: `${btn.width}px`, height: `${btn.height}px` }}
              />
            </div>
            <span>{btn.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubButtons;
