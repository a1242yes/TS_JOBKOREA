import { useEffect, useState } from "react";
import IconCompany from "../assi/IconCompany";
import Keyword from "../assi/Keyword";
import Login from "../assi/login";
import HeaderList from "../assi/HeaderList";

export default function HeaderBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    document.body.style.margin = "0"; // 기본 마진 삭제
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "212px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        display: "flex",
        paddingLeft: "45px",
        gap: "25px",
        position: "relative",
        alignItems: "flex-start",
      }}
    >
      <img
        src="/images/character.png"
        alt="character"
        style={{
          width: "125px",
          height: "125px",
          marginTop: "57px",
        }}
      />
      <img
        src="/images/jobko.png"
        alt="jobko"
        style={{
          width: "180px",
          height: "36px",
          marginTop: "65px",
        }}
      />
      <div style={{ position: "relative", marginTop: "54px" }}>
        <input
          type="text"
          style={{
            width: "500px",
            height: "51px",
            border: "2px solid #003CFF",
            borderRadius: "11px",
            padding: "0 40px 0 10px",
            outline: "none",
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
            width: "24px",
            height: "24px",
            cursor: "pointer",
          }}
        />
      </div>

      {/* IconCompany 컴포넌트 */}
      <div style={{ marginTop: "63px", marginLeft: "300px" }}>
        <IconCompany />
      </div>

      {/* Keyword, Login 가로 */}
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          left: "200px",
          display: "flex",
          alignItems: "center",
          gap: "298px",
        }}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <Keyword />
        <Login />
      </div>

      {/* 드롭창 */}
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "212px", // HeaderBar 바로 아래
            left: "0",
            width: "100%",
            height: "570px",
            backgroundColor: "white",
            border: "1px solid #e0e0e0",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div style={{}}>
            <HeaderList />
          </div>
        </div>
      )}
    </div>
  );
}
