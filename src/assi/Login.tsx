import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.body.style.margin = "0"; // 기본 마진 삭제
  }, []);

  return (
    <div
      style={{
        display: "flex", // 가로
        alignItems: "center", // 세로
        gap: "20px",
      }}
    >
      <p style={{ margin: 0, cursor: "pointer", fontSize: "20px" }}>로그인</p>
      <p style={{ margin: 0, cursor: "pointer", fontSize: "20px" }}>회원가입</p>

      <div
        style={{
          width: "134px",
          height: "43px",
          background: "#FFFFFF",
          border: "1px solid #E8E8E8",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "0 10px",
          cursor: "pointer",
        }}
      >
        <p style={{ margin: 0, fontSize: "20px" }}>기업서비스</p>
        <img
          src="/images/arrow.png"
          alt="arrow"
          style={{ width: "9px", height: "5px" }}
        />
      </div>
    </div>
  );
}
