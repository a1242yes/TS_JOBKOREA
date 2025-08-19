import Pass from "./PassProps";

export default function PassMoney() {
  return (
    <div
      style={{
        width: "1025px",
        height: "272px",
        display: "flex",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <Pass
          company="시루정보"
          title="Javs 개발"
          text="도서 구입비 지원   명절선물/명절상여"
        />
      </div>
      <div style={{ marginRight: "20px" }}>
        <Pass
          company="㈜피펫"
          title="피플팀 GA 담당자"
          text="임직원 할인   자기개발 지원"
        />
      </div>
      <div>
        <Pass
          company="㈜투쿨포스쿨"
          title="화장품 기초 브랜드 상품 기획자"
          text="리프레시 휴가   패밀리데이"
        />
      </div>
    </div>
  );
}
