import React, { useState, useRef, useEffect } from "react";
import "./css/NavChat.css";

export default function NavChat() {
  const [chatOpen, setChatOpen] = useState(false);
  const chatBoxRef = useRef(null);
  const chatInputRef = useRef(null);
  const chatContentRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const toggleChat = () => setChatOpen(!chatOpen);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  const handleKeyPress = (e) => {
    if (!chatInputRef.current) return; // chatInputRef만 체크
    if (e.key === "Enter" && chatInputRef.current.value.trim() !== "") {
      const userMsg = chatInputRef.current.value.trim();

      // 메시지 상태 업데이트
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: userMsg },
        {
          sender: "bot",
          text: `${userMsg}에 대해 잘 알지는 못하지만, 열심히 공부중이에요!`,
        },
      ]);

      // 입력 후 자동 chat 탭으로 전환
      setActiveTab("chat");

      chatInputRef.current.value = "";
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = chatBoxRef.current.getBoundingClientRect();
    setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    let left = e.clientX - dragOffset.x;
    let top = e.clientY - dragOffset.y;

    const maxLeft = window.innerWidth - chatBoxRef.current.offsetWidth;
    const maxTop = window.innerHeight - chatBoxRef.current.offsetHeight;
    left = Math.max(0, Math.min(left, maxLeft));
    top = Math.max(0, Math.min(top, maxTop));

    chatBoxRef.current.style.left = left + "px";
    chatBoxRef.current.style.top = top + "px";
    chatBoxRef.current.style.bottom = "auto";
    chatBoxRef.current.style.right = "auto";
    chatBoxRef.current.style.position = "fixed";
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const [activeTab, setActiveTab] = useState("home");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (activeTab === "chat" && chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages, activeTab]);

  const [isTranslate, setIsTranslate] = useState(false);
  const [isSound, setIsSound] = useState(false);
  const [isSms, setIsSms] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  return (
    <>
      {/* 버튼 영역 */}
      <div id="navIcon">
        <div id="chatBot" onClick={toggleChat}>
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
          <svg className="upBtn" onClick={scrollToTop} viewBox="0 0 16 7">
            <path
              fill="currentColor"
              d="M12.5 6a.47.47 0 0 1-.35-.15L8 1.71L3.85 5.85c-.2.2-.51.2-.71 0s-.2-.51 0-.71L7.65.65c.2-.2.51-.2.71 0l4.5 4.5c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
            />
          </svg>
          <svg className="downBtn" onClick={scrollToBottom} viewBox="0 0 16 7">
            <path
              fill="currentColor"
              d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z"
            />
          </svg>
        </div>
      </div>

      {/* 챗봇 박스 */}
      {chatOpen && (
        <div id="chatBox" ref={chatBoxRef} onMouseDown={handleMouseDown}>
          <div id="chatHeader">
            <button
              type="button"
              className="cbChat"
              onClick={() => setActiveTab("chat")}
              style={{ color: activeTab === "chat" ? "#6C5242" : "#FFFEF8" }}
            >
              대화
            </button>
            <button
              type="button"
              className="cbHome"
              onClick={() => setActiveTab("home")}
              style={{ color: activeTab === "home" ? "#6C5242" : "#FFFEF8" }}
            >
              홈
            </button>
            <button
              type="button"
              className="cbSet"
              onClick={() => setActiveTab("set")}
              style={{ color: activeTab === "set" ? "#6C5242" : "#FFFEF8" }}
            >
              설정
            </button>
          </div>

          <div id="chatContent" ref={chatContentRef}>
            {activeTab === "home" && (
              <>
                <div className="cbHi">
                  안녕하세요, 핀아 AI 상담사입니다.
                  <br />
                  궁금한 점을 질문해주시면
                  <br />
                  안내해드릴게요!
                </div>

                <div className="cbBtns">
                  <div className="cbnineBtn1">1</div>
                  <div className="cbnineBtn2">2</div>
                  <div className="cbnineBtn3">3</div>
                  <div className="cbnineBtn4">4</div>
                  <div className="cbnineBtn5">5</div>
                  <div className="cbnineBtn6">6</div>
                  <div className="cbnineBtn7">7</div>
                  <div className="cbnineBtn8">8</div>
                  <div className="cbnineBtn9">9</div>
                </div>
              </>
            )}

            {activeTab === "chat" && (
              <div className="chatMessages">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={
                      msg.sender === "user" ? "userMessage" : "botMessage"
                    }
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "set" && (
              <div>
                <div className="cbsetcon1">
                  <div className="setimgbox"></div>
                  <span className="setusername">YURI</span>
                </div>
                <div className="cbsetcon2">
                  <div className="setspanbox1">
                    <span>언어</span>
                    <span>한국어</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="m19 12l12 12l-12 12"
                      />
                    </svg>
                  </div>
                  <div className="setspanbox2">
                    <span>메세지 번역 표시</span>
                    <div
                      className="setbtnon"
                      onClick={() => setIsTranslate(!isTranslate)}
                      style={{
                        backgroundColor: isTranslate ? "#6C5242" : "#bbb",
                      }}
                    >
                      <div
                        className="btncircle"
                        style={{ left: isTranslate ? "22px" : "6px" }}
                      ></div>
                    </div>
                  </div>
                  <div className="setspanbox3">
                    <span>알림음</span>
                    <div
                      className="setbtnon"
                      onClick={() => setIsSound(!isSound)}
                      style={{ backgroundColor: isSound ? "#6C5242" : "#bbb" }}
                    >
                      <div
                        className="btncircle"
                        style={{ left: isSound ? "22px" : "6px" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="cbsetcon3">
                  <div className="setspanbox4">
                    <span>문자 수신 거부</span>
                    <div
                      className="setbtnon"
                      onClick={() => setIsSms(!isSms)}
                      style={{ backgroundColor: isSms ? "#6C5242" : "#bbb" }}
                    >
                      <div
                        className="btncircle"
                        style={{ left: isSms ? "22px" : "6px" }}
                      ></div>
                    </div>
                  </div>
                  <div className="setspanbox5">
                    <span>이메일 수신 거부</span>
                    <div
                      className="setbtnon"
                      onClick={() => setIsEmail(!isEmail)}
                      style={{ backgroundColor: isEmail ? "#6C5242" : "#bbb" }}
                    >
                      <div
                        className="btncircle"
                        style={{ left: isEmail ? "22px" : "6px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <input
            ref={chatInputRef}
            type="text"
            placeholder="질문을 입력하세요"
            onKeyPress={handleKeyPress}
            id="chatInput"
          />
        </div>
      )}
    </>
  );
}
