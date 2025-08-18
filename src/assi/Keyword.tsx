import { useEffect, useState } from "react";

export default function Keyword({
  keywords = [
    "채용정보",
    "원픽",
    "AI잡스",
    "하이테크",
    "공채정보",
    "헤드헌팅",
    "기업˙연봉",
    "커리어",
    "취업톡톡",
  ],
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    document.body.style.margin = "0"; // 기본 마진 삭제
  }, []);

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      {keywords.map((keyword, index) => (
        <p
          key={index}
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "color 0.3s ease",
            color: hoveredIndex === index ? "#111AFF" : "black",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {keyword}
        </p>
      ))}
    </div>
  );
}
