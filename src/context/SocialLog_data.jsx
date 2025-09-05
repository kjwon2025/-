import React, { createContext, useState } from "react";

// AuthContext 생성
export const AuthContext = createContext();

// AuthProvider (context 제공)
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 로그인 함수
  const login = (provider, userData) => {
    console.log(`${provider} 로그인 성공`, userData);
    setUser(userData);
  };

  // 로그아웃 함수
  const logout = () => {
    console.log("로그아웃");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
