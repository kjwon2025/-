import React, { useEffect } from "react";
import "./css/SocialLog.css";

// OAuth 키
const GOOGLE_CLIENT_ID =
  "1052122433520-qog214nebl65vvq27c8gbo26b5v6klkp.apps.googleusercontent.com";
const KAKAO_JS_KEY = "245cbbe08cb5a39eddee06fbb1ffb99d";

export default function SocialLog({ setLoggedInUser }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
      });

      // 숨겨진 SDK 버튼 렌더링
      const container = document.getElementById("googleSignInDiv");
      if (!container) {
        console.error("googleSignInDiv 요소를 찾을 수 없음");
        return;
      }

      window.google.accounts.id.renderButton(container, {
        theme: "filled_blue",
        size: "medium",
        shape: "rectangular",
        text: "G",
        logo_alignment: "left",
      });

      // 내부 div를 부모 크기와 동일하게 맞춤
      const innerDiv = container.querySelector("div");
      if (innerDiv) {
        innerDiv.style.width = "100px"; // 원하는 클릭 영역
        innerDiv.style.height = "100px";
      }
    };
    document.body.appendChild(script);
  }, []);

  // 카카오 SDK 로드
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_JS_KEY);
        console.log("Kakao SDK 초기화 완료");
      }
    };
    document.body.appendChild(script);
  }, []);

  // 구글 로그인 성공 처리
  const handleGoogleResponse = (response) => {
    const base64Url = response.credential.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    const user = JSON.parse(jsonPayload);
    const googleUser = { id: user.email, name: user.name, email: user.email };
    setLoggedInUser(googleUser);
    localStorage.setItem("loggedInUser", JSON.stringify(googleUser));
  };

  // 카카오 로그인 처리
  const handleKakaoLogin = () => {
    if (!window.Kakao) return console.error("카카오 SDK 로드 실패");

    window.Kakao.Auth.login({
      success: () => {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            const kakaoUser = {
              id: res.kakao_account?.profile?.nickname, // ✅ 이메일 돈 주고 사야해서 안됨
              name: res.kakao_account?.profile?.nickname || "Kakao 사용자",
              email: res.kakao_account?.email || "알수없음",
            };
            setLoggedInUser(kakaoUser);
            localStorage.setItem("loggedInUser", JSON.stringify(kakaoUser));
          },
          fail: (err) => console.error("카카오 API 호출 실패:", err),
        });
      },
      fail: (err) => console.error("카카오 로그인 실패:", err),
    });
  };

  // 네이버 로그인 (더미)
  const handleNaverLogin = () => {
    const naverUser = {
      id: "naver@example.com",
      name: "네이버유저",
      email: "naver@example.com",
    };
    setLoggedInUser(naverUser);
    localStorage.setItem("loggedInUser", JSON.stringify(naverUser));
  };

  // 커스텀 구글 클릭 (숨겨진 SDK 버튼 클릭 트리거)
  const handleCustomGoogleClick = () => {
    const sdkButton = document.getElementById("googleSignInDiv");
    if (sdkButton) {
      const innerDiv = sdkButton.querySelector("div");
      if (innerDiv) innerDiv.click();
    }
  };

  return (
    <div className="lgsnsbox">
      {/* 네이버 버튼 */}
      <div className="lgnaverbox" onClick={handleNaverLogin}>
        <img src="./img/naverlogo.png" alt="네이버 로고" />
        <span className="naverspan">네이버</span>
      </div>

      {/* 구글 버튼 */}
      <div
        className="lggooglebox"
        style={{ position: "relative", width: "75px", textAlign: "center" }}
      >
        {/* 숨겨진 SDK 버튼: 부모 전체를 덮음 */}
        <div
          id="googleSignInDiv"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "75px", // 이미지 버튼 높이만큼
            opacity: 0,
            cursor: "pointer",
            zIndex: 5,
            top: "5px",
          }}
        ></div>

        {/* 이미지 버튼 (원형 G 버튼) */}
        <div
          className="custom-google-img"
          style={{
            width: "75px",
            height: "75px",
            borderRadius: "50%",
            backgroundImage: 'url("../img/google-circle.png")',
            backgroundSize: "cover",
            margin: "0 auto",
            zIndex: 10,
            pointerEvents: "none", // 이미지 위 클릭이 SDK 버튼으로 전달
            top: "5px",
          }}
        ></div>

        {/* 구글 텍스트 */}
        <span
          className="googlespan"
          style={{ display: "block", marginTop: "5px" }}
        >
          구글
        </span>
      </div>

      {/* 카카오 버튼 */}
      <div className="lgkakaobox" onClick={handleKakaoLogin}>
        <img src="./img/kakaologo.png" alt="카카오 로고" />
        <span className="kakaospan">카카오</span>
      </div>
    </div>
  );
}
