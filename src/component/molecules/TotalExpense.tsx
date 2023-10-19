import styled from "styled-components";
import {useRecoilValue} from "recoil";

import {themeSelector} from "../../recoil/selectors/ThemeSelector";
import { HorizonFlex } from "../atoms/div/StyledFlex";
import Emphasize from "../atoms/Text/Emphasize";

const BorderRadiusFlex = styled(HorizonFlex)`
  border: 0.1rem solid #d9d9d9;
  border-radius: 5rem;
  padding: 1rem 1.5rem;
  width: 37rem;
`;

type propType = {
  expense: number | undefined;
};

const TotalExpense: React.FC<propType> = ({ expense }) => {
  const theme = useRecoilValue(themeSelector);

  return (
    <BorderRadiusFlex option={{ justifyContent: "space-between" }}>
      <Emphasize theme={theme} font={{ fontSize: "1.4", fontWeight: "700" }}>
        총 지출금액
      </Emphasize>
      <Emphasize theme={theme} font={{ fontSize: "1.4", fontWeight: "700" }}>
        {expense}원
      </Emphasize>
    </BorderRadiusFlex>
  );
};

export default TotalExpense;
