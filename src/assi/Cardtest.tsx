import { useEffect } from "react";
import Card from "./Card";

export default function Cardtest() {
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  return (
    <div>
      <div
        style={{
          width: "1575px",
          background: "#ffffffff",
          height: "315px",
          display: "flex",
          margin: "0 auto", // 👉 화면 가로 가운데 정렬
          marginTop: "25px",
        }}
      >
        <div style={{ marginRight: "25px" }}>
          <Card
            backgroundimg="/images/lou.png"
            logoimg="/images/loulogo.png"
            title="2025 LOUIS VUITTON
            신입 및 경력 채용"
            sutitle="WE NEVER STOP DREAMING, 
            WE CRAFT NEW REALITIES."
            best="💎 매출액 5000억 이상"
          />
        </div>
        <div style={{ marginRight: "25px" }}>
          <Card
            backgroundimg="/images/toss.png"
            logoimg="/images/tosslogo.png"
            title="[토스플레이스] 
            VAN 법인영업 당담자"
            sutitle="토스가 만드는 
            오프라인 시장의 새로운 기준, 토스플레이스"
            best="💰 평균연봉 6,000만원 이상"
          />
        </div>
        <div style={{ marginRight: "25px" }}>
          <Card
            backgroundimg="/images/est.png"
            logoimg="/images/estlogo.png"
            title="[인턴십연계] 이스트소프트 인프라
            정보보안 가디언즈 교육생 모집"
            sutitle="*이스트소프트/계열사 인턴십연계
            *이스트소프트 현직자 강의
            *온라인 강의, 교육비 전액 지원"
            best="🚀 인기 급상승 채용공고"
          />
        </div>
        <div>
          <Card
            backgroundimg="/images/co.jpg"
            logoimg="/images/cologo.png"
            title="[입사보너스 150]물류운영지원&
            사무(현장운영/관리/초보주부환영)"
            sutitle="경력, 학력 무관!
            쿠팡의 물류 전문 자회사 CLS에서 배송인력&
            현장 관리자로 성장하싱 분을 찾습니다."
            best="💎 매출액 5000억 이상"
          />
        </div>
      </div>
      <div
        style={{
          width: "1575px",
          background: "#ffffffff",
          height: "315px",
          display: "flex",
          margin: "0 auto", // 👉 화면 가로 가운데 정렬
          marginTop: "25px",
        }}
      >
        <div style={{ marginRight: "25px" }}>
          <Card
            backgroundimg="/images/korea.jpg"
            logoimg="/images/korealogo.png"
            title="2025년도 한국주택금융공사 직무
            능력 평가기반 신입직원 채용공고"
            sutitle="국민의 주거행복을 책임지는 한국주택금융공
            사에서 대한민국 주택금융 시장을 개척할 유능
            한 인재를 모집합니다."
            best="📢 커리어의 시작 신입 채용"
          />
        </div>
        <div style={{ marginRight: "25px" }}>
          <Card
            backgroundimg="/images/job.jpg"
            logoimg="/images/joblogo.png"
            title="[잡코리아] 전 직무 대상, AI 실무형
            인재 집중 채용"
            sutitle="'Ready, Set, AI'
            잡코리아 전 직무 대상
            AI 실무형 인재 대규모 채용 스타트"
            best="💰 평균 연봉 6,000만원 이상"
          />
        </div>
        <div style={{ marginRight: "25px" }}>
          <Card
            backgroundimg="/images/dong.png"
            logoimg="/images/donglogo.png"
            title="동화그룹 신입/경력사원 채용"
            sutitle="동화그룹은 끊임없는 성장을 
            이뤄내고 있습니다.
            도전을 이어갈 여러분을 기다립니다."
            best="💰 평균 연봉 6,000만원 이상"
          />
        </div>
        <div>
          <Card
            backgroundimg="/images/sin.jpg"
            logoimg="/images/sinlogo.png"
            title="단체급식 영양사/조리사 연봉직
            경력사원 모집"
            sutitle="생활 속에서 함께하는 식품 제조 선도 기업
            신세계푸드에서 인재분들을 기다립니다."
            best="💎 매출액 5000억 이상"
          />
        </div>
      </div>
      <div
        style={{
          width: "1575px",
          background: "#ffffffff",
          height: "315px",
          display: "flex",
          margin: "0 auto", // 👉 화면 가로 가운데 정렬
          marginTop: "25px",
        }}
      >
        <div style={{ marginRight: "25px" }}>
          <Card
            backgroundimg="/images/dx.jpg"
            logoimg="/images/dxlogo.png"
            title="[취업연계] AI인공지능˙UXUI
            디자인˙풀스택개발 부트캠트"
            sutitle="*50+개 협력기업 연계형 과정
            *1:1 취업컨설팅 및 사후관리
            *교육비 전액지원"
            best="🚀 인기 급상승 채용공고"
          />
        </div>
        <div style={{ marginRight: "25px" }}>
          <Card
            backgroundimg="/images/han.jpg"
            logoimg="/images/hanlogo.png"
            title="25년 하반기 한솔PNS IT 경력
            공개채용"
            sutitle="*한솔그룹의 IT 계열사로 30여년
            IT서비스 경험과 노하우
            *스마트 팩토리 통합 솔루션 역량"
            best="💰 평균연봉 6,000만원 이상"
          />
        </div>
        <div style={{ marginRight: "25px" }}>
          <Card
            backgroundimg="/images/oa.jpg"
            logoimg="/images/oalogo.png"
            title="[취업보너스200/인센티브 최대 24
            0] 오아시스 의왕 물류센터"
            sutitle="집품&포장 경력 무관!!
            오아시스에서 함께 일하실 인재를 모집합니다."
            best="💎 매출액 5000억 이상"
          />
        </div>
        <div>
          <Card
            backgroundimg="/images/kbs.jpg"
            logoimg="/images/kbslogo.png"
            title="[KBS미디어] AI 실감형 미디어
            콘텐츠 영상 캠프 (1:1 취업컨설팅)"
            sutitle="*KBS PD 특강 및 현장 견학
            *교육비 전액지원
            *AI 실감형 모션그래픽 전문가"
            best="🚀 인기 급상승 채용공고"
          />
        </div>
      </div>
      <div
        style={{
          width: "1575px",
          background: "#ffffffff",
          height: "315px",
          display: "flex",
          margin: "0 auto", // 👉 화면 가로 가운데 정렬
          marginTop: "25px",
        }}
      >
        <div style={{ marginRight: "25px" }}>
          <Card
            backgroundimg="/images/gin.jpg"
            logoimg="/images/ginlogo.png"
            title="[중견IT기업] 2025년 신입 및 경력
            공개채용"
            sutitle="네트워크와 클라우드를 통해
            '세상'을 연결 합니다.
            Total IT 전문기업 '진인프라'"
            best="🚀 인기 급상승 채용공고"
          />
        </div>
        <div style={{ marginRight: "25px" }}>
          <Card
            backgroundimg="/images/d.jpg"
            logoimg="/images/dlogo.png"
            title="대방건설 경력직 채용"
            sutitle="'집에 대한 바른 생각'
            대방그룹에서 열정과 사랑으로 
            함께 성장할 인재를 채용합니다."
            best="📢 대기업 계열사"
          />
        </div>
        <div style={{ marginRight: "25px" }}>
          <Card
            backgroundimg="/images/do.jpg"
            logoimg="/images/dologo.png"
            title="(취업연계관정)[더존비즈온] Cloud
            DX Academy 4기 모집"
            sutitle="# 클라우드 전문가 과정
            # 교육비 전액지원
            # 더존비즈온 현직자 멘토링"
            best="🚀 인기 급상승 채용공고"
          />
        </div>
        <div>
          <Card
            backgroundimg="/images/hey.jpg"
            logoimg="/images/heylogo.png"
            title="[헤이딜러] 마켓 판매 매니저
            대규모 모집"
            sutitle="아무도 바꾸지 못한 
            중고차 시장을 혁신합니다"
            best="🚀 인기 급상승 채용공고"
          />
        </div>
      </div>
    </div>
  );
}
