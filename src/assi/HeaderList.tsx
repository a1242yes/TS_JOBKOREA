import { useEffect } from "react";
import List from "./ListProps";

export default function HeaderList() {
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ width: "200px", borderRight: "1px solid #e8e8e8" }}></div>
      {/* 1번 컬럼 */}
      <div style={{ width: "240px", borderRight: "1px solid #e8e8e8" }}>
        {/* 2번 컬럼 */}
        <List
          title="채용정보"
          items={[
            "지역별",
            "직무별",
            "기업별",
            "산업별",
            "TOP100",
            "전문채용관",
            "슈퍼기업관",
          ]}
        />
      </div>
      <div style={{ width: "240px", borderRight: "1px solid #e8e8e8" }}>
        {" "}
        {/* 3번 컬럼 */}
        <List
          title="이직은 원픽"
          items={["합격확률 공고", "원픽서비스 안내"]}
        />
        <List title="AI잡스" items={[]} />
        <List title="하이테크" items={[]} />
      </div>
      <div style={{ width: "240px", borderRight: "1px solid #e8e8e8" }}>
        {/* 4번 컬럼 */}
        <List
          title="공채정보"
          items={["1000대기업 공채", "공채달력", "공공기관 채용일정"]}
        />
        <List
          title="헤드헌팅"
          items={[
            "헤드헌팅 채용정보",
            "팝콘 헤드헌터",
            "헤드헌터 찾기",
            "채용 상담",
          ]}
        />
      </div>
      <div style={{ width: "240px", borderRight: "1px solid #e8e8e8" }}>
        {/* 5번 컬럼 */}
        <List title="기업연봉" items={["기업리뷰", "연봉", "기업분석보고서"]} />
      </div>
      <div style={{ width: "240px", borderRight: "1px solid #e8e8e8" }}>
        {/* 6번 컬럼 */}
        <List
          title="커리어"
          items={[
            "콘텐츠LAB",
            "합격자소서",
            "인적성 면접 후기",
            "인성역량검사",
            "공기업 모의고사",
            "직무인터뷰",
            "역량테스트(MICT)",
            "취업TOOL",
            "문서서식자료",
          ]}
        />
        <List title="취업톡톡" items={[]} />
      </div>
      <div
        style={{
          width: "300px",
          borderRight: "1px solid #e8e8e8",
          background: "#F7F7F7",
          padding: "20px",
        }}
      >
        {/* 1번 가로 */}
        <div style={{ height: "115px" }}>
          <div
            style={{
              marginTop: "20px",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            프로필 등록하고
          </div>
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            포지션 제안 받으세요 〉
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#e0e0e0",
          }}
        ></div>

        {/* 2번 가로 */}
        <div>
          <List
            title="개인회원 홈"
            items={[
              "이력서 관리",
              "입사지원 현황",
              "포지션 제안",
              "스크랩 공고",
              "개인정보 수정",
            ]}
          />
        </div>
      </div>
      <div style={{ width: "200px" }}> </div>
    </div>
  );
}
