import { useEffect } from "react";

interface PassProps {
  company: string;
  title: string;
  text: string;
}

export default function Pass({ company, title, text }: PassProps) {
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);
  return (
    <div
      style={{
        width: "325px",
        height: "272px",
        background: "#ffffffff",
        border: "2px solid #e8e8e8",
        borderRadius: "10px",
      }}
    >
      <img
        src="/images/pick.png"
        alt="원픽아이콘"
        style={{
          width: "50px",
          height: "34px",
          marginLeft: "250px",
          marginTop: "22px",
        }}
      />
      <div style={{ marginLeft: "30px" }}>
        <p
          style={{
            fontSize: "16px",
            color: "#3F3F3F",
            margin: "0px",
            marginTop: "3px",
          }}
        >
          {company}
        </p>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#000000ff",
            margin: "0px",
            marginTop: "9px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#A4A4A4",
            margin: "0px",
            marginTop: "12px",
          }}
        >
          {text}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between", // 양 끝 배치
            alignItems: "center", // 세로 가운데 정렬
            marginTop: "70px", // 필요 시 간격
          }}
        >
          <p style={{ margin: 0 }}>🪙 합격축하금 100만원</p>
          <p style={{ margin: 0, marginRight: "30px" }}>D-24</p>
        </div>
      </div>
    </div>
  );
}
