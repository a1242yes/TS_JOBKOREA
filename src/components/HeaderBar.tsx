import { useEffect, useState } from "react";
import IconCompany from "../assi/IconCompany";
import Keyword from "../assi/Keyword";
import Login from "../assi/login";
import HeaderList from "../assi/HeaderList";

export default function HeaderBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "200px",
        height: "clamp(160px, 11vw, 212px)",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        display: "flex",
        paddingLeft: "clamp(20px, 2.3vw, 45px)",
        gap: "clamp(15px, 1.3vw, 25px)",
        position: "relative",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {/* 캐릭터 이미지 */}
      <img
        src="/images/character.png"
        alt="character"
        style={{
          width: "clamp(80px, 6.5vw, 125px)",
          height: "clamp(80px, 6.5vw, 125px)",
          marginTop: "clamp(30px, 3vw, 57px)",
          flexShrink: 0,
        }}
      />

      {/* 로고 이미지 */}
      <img
        src="/images/jobko.png"
        alt="jobko"
        style={{
          width: "clamp(120px, 9.4vw, 180px)",
          height: "clamp(24px, 1.9vw, 36px)",
          marginTop: "clamp(35px, 3.4vw, 65px)",
          flexShrink: 0,
        }}
      />

      {/* 검색바 */}
      <div
        style={{
          position: "relative",
          marginTop: "clamp(30px, 2.8vw, 54px)",
          flex: "1",
          minWidth: "250px",
          maxWidth: "505px",
        }}
      >
        <input
          type="text"
          style={{
            width: "100%",
            height: "clamp(40px, 2.7vw, 51px)",
            border: "2px solid #003CFF",
            borderRadius: "11px",
            padding: "0 40px 0 10px",
            outline: "none",
            fontSize: "clamp(14px, 0.8vw, 16px)",
            boxSizing: "border-box",
          }}
        />
        <img
          src="/images/Search.png"
          alt="search"
          style={{
            position: "absolute",
            right: "16.5px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "clamp(20px, 1.25vw, 24px)",
            height: "clamp(20px, 1.25vw, 24px)",
            cursor: "pointer",
          }}
        />
      </div>

      {/* IconCompany 컴포넌트 */}
      <div
        style={{
          marginTop: "clamp(35px, 3.3vw, 63px)",
          marginLeft: "clamp(50px, 15.6vw, 300px)",
        }}
      >
        <IconCompany />
      </div>

      {/* Keyword, Login 가로 배치 */}
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          left: "clamp(100px, 10.4vw, 200px)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(100px, 12.9vw, 248px)",
          width: "auto",
        }}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <Keyword />
        <Login />
      </div>

      {/* 드롭다운 메뉴 */}
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            height: "clamp(400px, 29.7vw, 570px)",
            backgroundColor: "white",
            border: "1px solid #e0e0e0",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div>
            <HeaderList />
          </div>
        </div>
      )}

      {/* 모바일 대응을 위한 추가 스타일 */}
      <style jsx>{`
        @media (max-width: 1200px) {
          div[style*="marginLeft: clamp(50px, 15.6vw, 300px)"] {
            margin-left: clamp(20px, 5vw, 100px) !important;
          }
        }

        @media (max-width: 768px) {
          div {
            flex-direction: column !important;
            align-items: center !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            height: auto !important;
            min-height: 300px !important;
          }

          div[style*="position: absolute; bottom: 0px"] {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            margin-top: 20px !important;
            width: 100% !important;
            justify-content: space-around !important;
            gap: 50px !important;
          }

          div[style*="flex: 1"] {
            max-width: 90% !important;
            margin-top: 20px !important;
          }

          img[alt="character"],
          img[alt="jobko"] {
            margin-top: 20px !important;
          }

          div[style*="marginLeft"] {
            margin-left: 0 !important;
            margin-top: 20px !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="gap: clamp(100px, 12.9vw, 248px)"] {
            flex-direction: column !important;
            gap: 20px !important;
            align-items: center !important;
          }
        }
      `}</style>
    </div>
  );
}
