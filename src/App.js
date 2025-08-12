import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginSuccess from "./LoginSuccess";
import MyPage from "./MyPage";

function App() {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/login-success"; // 프론트 주소로 변경
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ padding: "50px" }}>
            <h1>Kpop Goods 로그인</h1>
            <button
              onClick={handleLogin}
              style={{
                backgroundColor: "#FEE500",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              카카오로 로그인
            </button>
          </div>
        }
      />
      <Route path="/login-success" element={<LoginSuccess />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
