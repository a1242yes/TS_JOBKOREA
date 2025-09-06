import { useEffect } from "react";

export default function IconCompany() {
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  const companyData = [
    { icon: "/images/iconAlbamon.png", name: "알바몬", alt: "iconAlbamon" },
    { icon: "/images/iconGamejob.png", name: "게임잡", alt: "iconGamejob" },
    {
      icon: "/images/iconNinehire.png",
      name: "나인하이어",
      alt: "iconNinehire",
    },
    { icon: "/images/iconKlik.png", name: "클릭", alt: "iconKlik" },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "clamp(15px, 1.6vw, 30px)",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {companyData.map((company, index) => (
        <div
          key={index}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "clamp(4px, 0.4vw, 8px)",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src={company.icon}
            alt={company.alt}
            style={{
              width: "clamp(20px, 1.6vw, 30px)",
              height: "clamp(20px, 1.6vw, 30px)",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          />
          <p
            style={{
              fontSize: "clamp(14px, 0.9vw, 24px)",
              margin: 0,
              color: "#333",
              fontWeight: "500",
              whiteSpace: "nowrap",
            }}
          >
            {company.name}
          </p>
        </div>
      ))}

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="display: flex"] {
            gap: 20px !important;
            justify-content: space-around !important;
          }

          div[style*="display: inline-flex"] {
            gap: 6px !important;
          }

          p {
            font-size: 16px !important;
          }

          img {
            width: 24px !important;
            height: 24px !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="display: flex"] {
            flex-direction: column !important;
            gap: 15px !important;
            align-items: center !important;
          }

          div[style*="display: inline-flex"] {
            min-width: 120px !important;
            justify-content: center !important;
          }

          p {
            font-size: 14px !important;
          }

          img {
            width: 20px !important;
            height: 20px !important;
          }
        }

        @media (max-width: 320px) {
          div[style*="display: flex"] {
            gap: 10px !important;
          }

          p {
            font-size: 12px !important;
          }

          img {
            width: 18px !important;
            height: 18px !important;
          }
        }
      `}</style>
    </div>
  );
}
