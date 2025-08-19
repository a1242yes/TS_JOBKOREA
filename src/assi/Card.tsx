import React, { useState } from "react";

interface CardProps {
  imageUrl?: string;
  backgroundimg: string;
  logoimg: string;
  title: string;
  sutitle: string;
  best: string;
}

export default function Card({
  backgroundimg,
  logoimg,
  title,
  sutitle,
  best,
  imageUrl,
}: CardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: "375px",
          height: isHovered ? "650px" : "315px",
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          position: "relative",
          zIndex: isHovered ? 10 : 1,
        }}
      >
        {/* 상단 이미지 - 고정 영역 */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div
            style={{
              width: "100%",
              height: isHovered ? "280px" : "143px",
              backgroundImage: `url(${backgroundimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
          </div>

          {/* 로고 박스 */}
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "16px",
              background: "#fff",
              borderRadius: "8px",
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logoimg}
              alt="회사 로고"
              style={{ width: "100px", height: "20px", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* 본문 - 수정된 부분 */}
        <div
          style={{
            flex: 1,
            padding: "40px 18px 18px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: "23px",
              margin: "0",
              fontWeight: "bold",
              color: "#333",
              whiteSpace: "pre-line",
            }}
          >
            {title}
          </p>

          <div
            style={{
              opacity: isHovered ? 1 : 0,
              maxHeight: isHovered ? "300px" : "0px",
              overflow: "hidden",
              transition:
                "opacity 0.4s ease 0.2s, max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <hr
              style={{
                border: "none",
                width: "100%",
                borderTop: "2px solid #E8E8E8",
                marginTop: "24px",
                marginBottom: "22px",
              }}
            />

            <p
              style={{
                fontSize: "18px",
                color: "#6A6A6A",
                margin: "0 0 20px 0",
                whiteSpace: "pre-line",
                lineHeight: "1.4",
              }}
            >
              {sutitle}
            </p>

            <div style={{ marginBottom: "20px" }}></div>

            <button
              style={{
                width: "100%",
                height: "43px",
                background: "#02255A",
                color: "#fff",
                border: "none",
                borderRadius: "3px",
                fontSize: "19px",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "14px",
                transition: "background-color 0.2s ease",
              }}
              onMouseOver={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "#0a3068";
              }}
              onMouseOut={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "#02255A";
              }}
            >
              채용 바로가기
            </button>
          </div>

          {/* 하단 정보 - 항상 맨 아래 고정 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "15px",
              color: "#555",
              position: "absolute",
              bottom: "18px",
              left: "18px",
              right: "18px",
            }}
          >
            <span>{best}</span>
            <span>D-1 ⭐</span>
          </div>
        </div>
      </div>
    </div>
  );
}
