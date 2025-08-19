import { useState } from "react";

interface ButtonProps {
  font: string;
  isActive: boolean;
  onClick: () => void;
}

function Button({ font, isActive, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "185px",
        height: "50px",
        borderRadius: "50px",
        border: "none",
        background: isActive ? "#0057FF" : "#ffffffff", // 선택 시 색상 변경
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "18px",
        cursor: "pointer",
        transition: "0.2s", // 부드럽게 색 변환
      }}
    >
      <p
        style={{
          fontSize: "17px",
          fontWeight: "bold",
          color: isActive ? "#FFFFFF" : "#6A6A6A", // 선택 시 텍스트 색상 변경
          margin: 0,
        }}
      >
        {font}
      </p>
    </button>
  );
}

export default function ButtonList() {
  const [selected, setSelected] = useState("✅ 합격축하금 공고");

  const buttons = [
    "✅ 합격축하금 공고",
    "💡 AI 추천",
    "📺 전문채용관",
    "💰 기업˙연봉",
    "🔥 공채속보",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // 세로 정렬
        gap: "7px", // 버튼 사이 간격
      }}
    >
      {buttons.map((text) => (
        <Button
          key={text}
          font={text}
          isActive={selected === text}
          onClick={() => setSelected(text)}
        />
      ))}
    </div>
  );
}
