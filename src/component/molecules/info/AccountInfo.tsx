import { VerticalFlex } from "../../atoms/div/StyledFlex";
import Emphasize from "../../atoms/Text/Emphasize";

const AccountInfo: React.FC = () => {
  return (
    <VerticalFlex option={{ gap: "0", alignItems: "flex-start" }}>
      <Emphasize font={{ fontSize: "1.1", fontWeight: "300" }}>
        BNK 일반
      </Emphasize>
      <Emphasize font={{ fontSize: "1.8" }}>12345678910</Emphasize>
    </VerticalFlex>
  );
};

export default AccountInfo;
