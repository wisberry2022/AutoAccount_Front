import styled from "styled-components";
import { HorizonFlex } from "../atoms/div/StyledFlex";
import Emphasize from "../atoms/Text/Emphasize";

const BorderRadiusFlex = styled(HorizonFlex)`
  border: 0.1rem solid #d9d9d9;
  border-radius: 5rem;
  padding: 1rem 1.5rem;
  width: 37rem;
`;

const TotalExpense: React.FC = () => {
  return (
    <BorderRadiusFlex option={{ justifyContent: "space-between" }}>
      <Emphasize font={{ fontSize: "1.4", fontWeight: "700" }}>
        총 지출금액
      </Emphasize>
      <Emphasize font={{ fontSize: "1.4", fontWeight: "700" }}>
        3600000원
      </Emphasize>
    </BorderRadiusFlex>
  );
};

export default TotalExpense;
