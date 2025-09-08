import React, { createContext, useState, useEffect } from "react";

// AuthContext 생성
export const AuthContext = createContext();

// AuthProvider (context 제공)
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 로그인 함수
  const login = (provider, userData) => {
    console.log(`${provider} 로그인 성공`, userData);
    setUser(userData);

    // ✅ 로그인 성공 시 쿠폰 병합
    const tempKey = "coupons_temp";
    const tempCoupons = JSON.parse(localStorage.getItem(tempKey) || "[]");

    if (tempCoupons.length > 0) {
      const userId = userData?.id || userData?.name;
      const storageKey = `coupons_${userId}`;
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");

      // 중복 없이 합치고 싶으면 filter/Set 사용 가능
      const merged = [...saved, ...tempCoupons];
      localStorage.setItem(storageKey, JSON.stringify(merged));

      // 임시 저장소 비우기
      localStorage.removeItem(tempKey);
    }

    // 현재 로그인 사용자 정보 저장
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
  };

  // 로그아웃 함수
  const logout = () => {
    console.log("로그아웃");
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  // 새로고침 시 로그인 유지
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
