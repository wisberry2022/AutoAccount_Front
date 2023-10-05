import NormalText from "../../atoms/Text/NormalText";
import { HorizonFlex, VerticalFlex } from "../../atoms/div/StyledFlex";

const DetailRight: React.FC = () => {
  return (
    <VerticalFlex
      style={{ width: "50%", height: "15rem" }}
      option={{ justifyContent: "flex-end" }}
    >
      <HorizonFlex
        style={{ width: "100%" }}
        option={{ justifyContent: "space-between" }}
      >
        <NormalText>잔액</NormalText>
        <NormalText style={{ fontWeight: "600" }}>50000원</NormalText>
      </HorizonFlex>
      <HorizonFlex
        style={{ width: "100%" }}
        option={{ justifyContent: "space-between" }}
      >
        <NormalText>계좌주</NormalText>
        <NormalText style={{ fontWeight: "600" }}>왕인서</NormalText>
      </HorizonFlex>
      <HorizonFlex
        style={{ width: "100%" }}
        option={{ justifyContent: "space-between" }}
      >
        <NormalText>등록 된 자동이체 수</NormalText>
        <NormalText style={{ fontWeight: "600" }}>9개</NormalText>
      </HorizonFlex>
    </VerticalFlex>
  );
};

export default DetailRight;
