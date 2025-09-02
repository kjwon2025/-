import React from "react";
import "./css/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login({ isActive, closeLogin }) {
  const navigate = useNavigate();

  const goMember = () => {
    closeLogin();
    navigate("/member");
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

        <form className="lgform">
          <input type="text" className="lgidbox" placeholder="아이디  *" />
          <input
            type="password"
            className="lgpwbox"
            placeholder="비밀번호  *"
          />
          <span className="lgpwspan">비밀번호를 잊으셨나요?</span>
          <button className="lgloginbtn" type="submit">
            로그인
          </button>
          <button className="lgmembtn" type="button" onClick={goMember}>
            회원가입
          </button>

          <div className="lgline"></div>

          <div className="lgsnsbox">
            <div className="lgnaverbox">
              <img src="./img/naverlogo.png" alt="naverlogo" />
              <span className="naverspan">네이버</span>
            </div>
            <div className="lggooglebox">
              <img src="./img/googlelogo.png" alt="googlelogo" />
              <span className="googlespan">구글</span>
            </div>
            <div className="lgkakaobox">
              <img src="./img/kakaologo.png" alt="kakaologo" />
              <span className="kakaospan">카카오</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
