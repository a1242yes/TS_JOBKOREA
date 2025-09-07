import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "clamp(15px, 1.04vw, 26px)",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          margin: 0,
          cursor: "pointer",
          fontSize: "clamp(16px, 1.04vw, 26px)",
          fontWeight: "500",
          color: "#333",
          transition: "color 0.3s ease",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#111AFF";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#333";
        }}
      >
        로그인
      </p>

      <p
        style={{
          margin: 0,
          cursor: "pointer",
          fontSize: "clamp(16px, 1.04vw, 26px)",
          fontWeight: "500",
          color: "#333",
          transition: "color 0.3s ease",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#111AFF";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#333";
        }}
      >
        회원가입
      </p>

      <div
        style={{
          width: "clamp(120px, 6.97vw, 178px)",
          height: "clamp(36px, 2.24vw, 57px)",
          background: "#FFFFFF",
          border: "1px solid #E8E8E8",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(6px, 0.42vw, 10px)",
          padding: "0 clamp(8px, 0.52vw, 13px)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#111AFF";
          e.currentTarget.style.boxShadow =
            "0 4px 12px rgba(17, 26, 255, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#E8E8E8";
          e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "clamp(16px, 1.04vw, 26px)",
            fontWeight: "500",
            color: "#333",
            whiteSpace: "nowrap",
          }}
        >
          기업서비스
        </p>
        <img
          src="/images/arrow.png"
          alt="arrow"
          style={{
            width: "clamp(6px, 0.47vw, 12px)",
            height: "clamp(3px, 0.26vw, 6px)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          div[style*="gap: clamp"] {
            gap: 18px !important;
          }

          p {
            font-size: 22px !important;
          }

          div[style*="width: clamp"] {
            width: 150px !important;
            height: 48px !important;
          }

          div[style*="width: clamp"] p {
            font-size: 22px !important;
          }

          img {
            width: 10px !important;
            height: 5px !important;
          }
        }

        @media (max-width: 768px) {
          div[style*="display: flex"] {
            gap: 15px !important;
            justify-content: center !important;
          }

          p {
            font-size: 18px !important;
          }

          div[style*="width: clamp"] {
            width: 130px !important;
            height: 42px !important;
            padding: 0 10px !important;
          }

          div[style*="width: clamp"] p {
            font-size: 18px !important;
          }

          img {
            width: 8px !important;
            height: 4px !important;
          }
        }

        @media (max-width: 640px) {
          div[style*="display: flex"] {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: center !important;
          }

          p {
            font-size: 16px !important;
            padding: 8px 16px !important;
            background-color: #f8f9fa !important;
            border-radius: 20px !important;
            min-width: 80px !important;
            text-align: center !important;
          }

          p:hover {
            background-color: #e3f2fd !important;
          }

          div[style*="width: clamp"] {
            width: 140px !important;
            height: 44px !important;
            margin-top: 8px !important;
          }

          div[style*="width: clamp"] p {
            font-size: 16px !important;
            background-color: transparent !important;
            padding: 0 !important;
            min-width: auto !important;
          }
        }

        @media (max-width: 480px) {
          p {
            font-size: 14px !important;
            padding: 6px 12px !important;
          }

          div[style*="width: clamp"] {
            width: 120px !important;
            height: 38px !important;
          }

          div[style*="width: clamp"] p {
            font-size: 14px !important;
          }

          img {
            width: 7px !important;
            height: 3px !important;
          }
        }

        @media (max-width: 320px) {
          p {
            font-size: 12px !important;
            padding: 4px 10px !important;
          }

          div[style*="width: clamp"] {
            width: 100px !important;
            height: 32px !important;
          }

          div[style*="width: clamp"] p {
            font-size: 12px !important;
          }

          img {
            width: 6px !important;
            height: 3px !important;
          }
        }
      `}</style>
    </div>
  );
}
