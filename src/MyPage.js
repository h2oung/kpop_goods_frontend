import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const [nickname, setNickname] = useState("");
  const token = localStorage.getItem("jwtToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/");
      return;
    }

    fetch("http://localhost:8080/api/mypage", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setNickname(data.nickname);
        } else {
          alert(data.message || "로그인이 필요합니다.");
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("서버 오류가 발생했습니다.");
        navigate("/");
      });
  }, [token, navigate]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>마이페이지</h1>
      {nickname ? (
        <p>
          안녕하세요, <strong>{nickname}</strong> 님!
        </p>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
}

export default MyPage;
