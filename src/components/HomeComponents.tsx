import { useEffect } from "react";
import ButtonList from "../assi/CategoryButton";
import PassMoney from "../assi/PassMoney";
import Notification from "../assi/Notification";

export default function HomeComponnts() {
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);
  return (
    <div
      style={{
        width: "1575px",
        height: "450px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <img
            src="/images/poster1.png"
            alt="arrow"
            style={{
              width: "940px",
              height: "138px",
              marginRight: "20px",
              borderRadius: "10px",
            }}
          />
        </div>
        <div>
          <Notification />
        </div>
        <div>
          <img
            src="/images/poster2.png"
            alt="arrow"
            style={{
              width: "325px",
              height: "450px",
              marginLeft: "20px",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          left: "15px",
          bottom: "285px",
        }}
      >
        <ButtonList />
      </div>
      <div
        style={{
          position: "relative",
          left: "210px",
          bottom: "560px",
        }}
      >
        <PassMoney />
      </div>
    </div>
  );
}
