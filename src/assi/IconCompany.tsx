import { useEffect } from "react";

export default function IconCompany() {
  useEffect(() => {
    document.body.style.margin = "0"; // 기본 마진 삭제
  }, []);

  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginRight: "30px",
        }}
      >
        <img
          src="/images/iconAlbamon.png"
          alt="iconAlbamon"
          style={{
            width: "30px",
            height: "30px",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        <p
          style={{
            fontSize: "18px",
            position: "relative",
            bottom: "1.5px",
            margin: 0,
          }}
        >
          알바몬
        </p>
      </div>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginRight: "30px",
        }}
      >
        <img
          src="/images/iconGamejob.png"
          alt="iconAlbamon"
          style={{
            width: "30px",
            height: "30px",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        <p
          style={{
            fontSize: "18px",
            position: "relative",
            bottom: "1.5px",
            margin: 0,
          }}
        >
          게임잡
        </p>
      </div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginRight: "30px",
        }}
      >
        <img
          src="/images/iconNinehire.png"
          alt="iconAlbamon"
          style={{
            width: "30px",
            height: "30px",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        <p
          style={{
            fontSize: "18px",
            position: "relative",
            bottom: "1.5px",
            margin: 0,
          }}
        >
          나인하이어
        </p>
      </div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img
          src="/images/iconKlik.png"
          alt="iconAlbamon"
          style={{
            width: "30px",
            height: "30px",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        <p
          style={{
            fontSize: "18px",
            position: "relative",
            bottom: "1.5px",
            margin: 0,
          }}
        >
          클릭
        </p>
      </div>
    </div>
  );
}
