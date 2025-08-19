import Cardtest from "../assi/Cardtest";
import HeaderBar from "../components/HeaderBar";
import HomeComponnts from "../components/HomeComponents";

export default function HomePage() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <HeaderBar />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "40px",
          marginBottom: "60px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <HomeComponnts />
      </div>
      <div>
        <Cardtest />
      </div>
    </div>
  );
}
