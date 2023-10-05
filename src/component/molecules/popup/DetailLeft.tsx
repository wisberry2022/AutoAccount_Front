import Emphasize from "../../atoms/Text/Emphasize";
import { VerticalFlex } from "../../atoms/div/StyledFlex";

const DetailLeft: React.FC = () => {
  return (
    <VerticalFlex style={{ alignSelf: "flex-start" }}>
      <VerticalFlex option={{ gap: ".1", alignItems: "flex-start" }}>
        <Emphasize font={{ fontSize: "1.2", fontWeight: "300" }}>
          BNK 일반
        </Emphasize>
        <Emphasize font={{ fontSize: "2", fontWeight: "600" }}>
          12345678910
        </Emphasize>
      </VerticalFlex>
    </VerticalFlex>
  );
};

export default DetailLeft;
