import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (!code) {
      alert("인증 코드가 없습니다.");
      navigate("/");
      return;
    }

    // 백엔드 API 호출
    fetch(`http://localhost:8080/api/login/kakao?code=${code}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          localStorage.setItem("jwtToken", data.token); // 토큰 저장
          navigate("/mypage"); // 마이페이지로 이동
        } else {
          alert(data.message || "로그인 실패");
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("로그인 요청 오류:", err);
        alert("서버 오류가 발생했습니다.");
        navigate("/");
      });
  }, [navigate]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>로그인 처리 중...</h1>
    </div>
  );
}

export default LoginSuccess;
