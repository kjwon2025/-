import { useState } from "react";
import "./css/Splash.css";

export default function Splash({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true); // 페이드아웃 시작
    setTimeout(() => {
      if (onFinish) onFinish(); // 트랜지션 끝나면 부모에서 스플래시 제거
    }, 1800); // CSS 트랜지션 시간과 동일하게
  };

  return (
    <div id="wrapSP" className={fadeOut ? "fadeOut" : ""} onClick={handleClick}>
      <video
        className="vSP"
        autoPlay
        loop
        muted
        src="video/splash.mp4"
        type="video/mp4"
      />
      <button className="gomainbtnSP">PIN-A</button>
    </div>
  );
}
