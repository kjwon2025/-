import React from "react";
import "./css/NavIcon.css";

export default function NavIcon() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleChatClick = () => {
    console.log("챗봇 버튼 클릭!");
    // 챗봇 열기 로직
  };

  return (
    <div id="navIcon">
      <div id="chatBot" onClick={handleChatClick}>
        <svg
          className="cbImg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM9.5 9h.01m4.99 0h.01" />
            <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
          </g>
        </svg>
      </div>

      <div id="updownBtn">
        <svg
          className="upBtn"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 7"
          onClick={scrollToTop}
        >
          <path
            fill="currentColor"
            d="M12.5 6a.47.47 0 0 1-.35-.15L8 1.71L3.85 5.85c-.2.2-.51.2-.71 0s-.2-.51 0-.71L7.65.65c.2-.2.51-.2.71 0l4.5 4.5c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
          />
        </svg>
        <svg
          className="downBtn"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 7"
          onClick={scrollToBottom}
        >
          <path
            fill="currentColor"
            d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z"
          />
        </svg>
      </div>
    </div>
  );
}
