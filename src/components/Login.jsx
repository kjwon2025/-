import React, { useState, useEffect } from "react";
import "./css/Login.css";
import { useNavigate } from "react-router-dom";

import SocialLog from "./SocialLog"; // ✅ SocialLog import 추가

export default function Login({ isActive, closeLogin }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  // 컴포넌트 로드될 때 localStorage 확인
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  const goMember = () => {
    closeLogin();
    navigate("/member");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.id === id && u.password === password);

    if (user) {
      alert(`환영합니다, ${user.name}님!`);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setLoggedInUser(user); // 상태 업데이트
      // closeLogin(); <-- 여기 제거
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    alert("로그아웃 되었습니다.");
    // closeLogin(); <-- 제거
  };

  const goMyPage = () => {
    closeLogin();
    navigate("/mypage");
  };
  return (
    <div id="loginBox" className={isActive ? "active" : ""}>
      <div id="bgShadow" onClick={closeLogin}></div>

      <div id="loginMain">
        <svg className="lgclosebtn" onClick={closeLogin}>
          <path
            fill="none"
            stroke="currentColor"
            strokeDasharray="12"
            strokeDashoffset="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.3s"
              values="12;0"
            />
          </path>
        </svg>

        <span className="lgtitlespan">로그인</span>
        <span className="lgspan1">
          핀아 온라인 스토어의 다양한 혜택을 만나보세요.
        </span>

        {loggedInUser ? (
          // ✅ 로그인 후 화면
          <div className="after-login">
            {/* 환영 메시지 박스 */}
            <div className="welcome-box">
              <p>{loggedInUser.name}님, 환영합니다.</p>
            </div>

            {/* 버튼 박스 */}
            <div className="button-box">
              <button className="lgmembtn" onClick={goMyPage}>
                마이페이지
              </button>
              <button className="lgloginbtn" onClick={handleLogout}>
                로그아웃
              </button>
            </div>
          </div>
        ) : (
          // ✅ 로그인 전 화면
          <form className="lgform" onSubmit={handleLogin}>
            <input
              type="text"
              className="lgidbox"
              placeholder="아이디  *"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="password"
              className="lgpwbox"
              placeholder="비밀번호  *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="lgpwspan">비밀번호를 잊으셨나요?</span>
            <button className="lgloginbtn" type="submit">
              로그인
            </button>
            <button className="lgmembtn" type="button" onClick={goMember}>
              회원가입
            </button>
            <SocialLog setLoggedInUser={setLoggedInUser} />
            <div className="lgline"></div>
          </form>
        )}
      </div>
    </div>
  );
}
