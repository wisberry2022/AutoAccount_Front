import { HorizonFlex, VerticalFlex } from "../../atoms/div/StyledFlex";
import Emphasize from "../../atoms/Text/Emphasize";

const DebitInfo: React.FC = () => {
  return (
    <VerticalFlex option={{ gap: "0", alignItems: "flex-start" }}>
      <HorizonFlex>
        <Emphasize font={{ fontSize: "1.1", fontWeight: "300" }}>
          BNK 일반
        </Emphasize>
        <Emphasize font={{ fontSize: "1.1" }}>12345678910</Emphasize>
      </HorizonFlex>
      <Emphasize font={{ fontSize: "1.8" }}>400000원</Emphasize>
    </VerticalFlex>
  );
};

export default DebitInfo;
