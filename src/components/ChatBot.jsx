import React, { useState, useRef } from "react";
import "./css/ChatBot.css";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [dragPos, setDragPos] = useState({ top: null, left: null });
  const chatBoxRef = useRef();
  const chatInputRef = useRef();

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    const text = chatInputRef.current.value.trim();
    if (!text) return;

    setMessages([
      ...messages,
      { sender: "user", text },
      {
        sender: "bot",
        text: `${text}에 대해 잘 알지는 못하지만, 열심히 공부중이에요!`,
      },
    ]);
    chatInputRef.current.value = "";
  };

  // 드래그 이벤트
  let isDragging = false;
  let offset = { x: 0, y: 0 };

  const onMouseDown = (e) => {
    isDragging = true;
    const rect = chatBoxRef.current.getBoundingClientRect();
    offset = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    chatBoxRef.current.style.transition = "none";
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    let left = e.clientX - offset.x;
    let top = e.clientY - offset.y;

    const maxLeft = window.innerWidth - chatBoxRef.current.offsetWidth;
    const maxTop = window.innerHeight - chatBoxRef.current.offsetHeight;
    left = Math.max(0, Math.min(left, maxLeft));
    top = Math.max(0, Math.min(top, maxTop));

    setDragPos({ left, top });
  };

  const onMouseUp = () => {
    isDragging = false;
    chatBoxRef.current.style.transition = "";
  };

  return (
    <>
      <div id="chatBot" onClick={toggleChat}>
        챗봇
      </div>

      <div
        id="chatBox"
        ref={chatBoxRef}
        className={isOpen ? "active" : ""}
        style={{
          top: dragPos.top,
          left: dragPos.left,
          bottom: "auto",
          right: "auto",
          position: dragPos.top !== null ? "fixed" : "",
        }}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        <div id="chatHeader" onMouseDown={onMouseDown}>
          <div className="cbChat">대화</div>
          <div className="cbHome">홈</div>
          <div className="cbSet">설정</div>
        </div>
        <div id="chatContent">
          {messages.map((msg, idx) => (
            <div key={idx}>
              <b>{msg.sender === "user" ? "사용자" : "챗봇"}:</b> {msg.text}
            </div>
          ))}
        </div>
        <input
          id="chatInput"
          ref={chatInputRef}
          type="text"
          placeholder="질문을 입력하세요"
          onKeyPress={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
      </div>
    </>
  );
}
