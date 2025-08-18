import { useEffect } from "react";
import Card from "./Card";

export default function Cardtest() {
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  return (
    <div>
      <Card
        backgroundimg="/images/test.png" // 배경 이미지 경로
        logoimg="/images/tosslogo.png" // 로고 이미지 경로
        title="양은서는 이쁘다" // 카드 제목
        sutitle="KT&G와 함께 새로운 미래를 향해 도전할 Future Rusher를 찾습니다." // 부제목
        best="🔥 평균연봉 16,000만원 이상" // 하단 강조 문구
      />
    </div>
  );
}
