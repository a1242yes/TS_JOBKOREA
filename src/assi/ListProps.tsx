import { useEffect } from "react";

interface ListProps {
  title: string;
  items: string[];
}

export default function List({ title, items }: ListProps) {
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  return (
    <div style={{ padding: "10px", marginLeft: "30px" }}>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "15px",
          color: "#333",
        }}
      >
        {title}
      </h3>
      <div>
        {items.map((item, index) => (
          <p
            key={index}
            style={{
              fontSize: "18px",
              margin: "8px 0",
              cursor: "pointer",
              color: "#666",
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
