import { useEffect, useState } from "react";

interface KeywordProps {
  keywords?: string[];
}

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
}: KeywordProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "clamp(15px, 2.1vw, 40px)",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {keywords.map((keyword, index) => (
        <p
          key={index}
          style={{
            fontSize: "clamp(16px, 1.3vw, 25px)",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
            color: hoveredIndex === index ? "#111AFF" : "black",
            margin: 0,
            padding: "clamp(4px, 0.3vw, 8px) clamp(6px, 0.4vw, 12px)",
            borderRadius: "8px",
            whiteSpace: "nowrap",
            textDecoration: hoveredIndex === index ? "underline" : "none",
            transform:
              hoveredIndex === index ? "translateY(-2px)" : "translateY(0)",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {keyword}
        </p>
      ))}

      <style jsx>{`
        @media (max-width: 1200px) {
          div[style*="display: flex"] {
            gap: 30px !important;
          }

          p {
            font-size: 24px !important;
          }
        }

        @media (max-width: 768px) {
          div[style*="display: flex"] {
            gap: 15px !important;
            justify-content: flex-start !important;
            overflow-x: auto !important;
            scroll-behavior: smooth !important;
            padding: 0 10px !important;
          }

          p {
            font-size: 18px !important;
            flex-shrink: 0 !important;
            padding: 6px 10px !important;
          }
        }

        @media (max-width: 640px) {
          div[style*="display: flex"] {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
            overflow-x: visible !important;
            max-height: 200px !important;
            overflow-y: auto !important;
          }

          p {
            font-size: 16px !important;
            width: 100% !important;
            text-align: center !important;
            padding: 8px 12px !important;
            background-color: #f8f9fa !important;
            border-radius: 12px !important;
          }

          p:hover {
            background-color: #e3f2fd !important;
            box-shadow: 0 2px 8px rgba(17, 26, 255, 0.3) !important;
          }
        }

        @media (max-width: 480px) {
          p {
            font-size: 14px !important;
            padding: 6px 10px !important;
          }
        }

        @media (max-width: 320px) {
          p {
            font-size: 12px !important;
            padding: 4px 8px !important;
          }
        }

        /* 스크롤바 스타일링 */
        div[style*="overflow-x: auto"] {
          scrollbar-width: thin;
          scrollbar-color: #ccc transparent;
        }

        div[style*="overflow-x: auto"]::-webkit-scrollbar {
          height: 6px;
        }

        div[style*="overflow-x: auto"]::-webkit-scrollbar-track {
          background: transparent;
        }

        div[style*="overflow-x: auto"]::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
