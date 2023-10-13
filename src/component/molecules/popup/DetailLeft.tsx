import Emphasize from "../../atoms/Text/Emphasize";
import { VerticalFlex } from "../../atoms/div/StyledFlex";

type propType = {
  name: string;
  serial: string;
}

const DetailLeft: React.FC<propType> = ({name, serial}) => {
  return (
    <VerticalFlex style={{ alignSelf: "flex-start" }}>
      <VerticalFlex option={{ gap: ".1", alignItems: "flex-start" }}>
        <Emphasize font={{ fontSize: "1.2", fontWeight: "300" }}>
          {name}
        </Emphasize>
        <Emphasize font={{ fontSize: "2", fontWeight: "600" }}>
          {serial}
        </Emphasize>
      </VerticalFlex>
    </VerticalFlex>
  );
};

export default DetailLeft;
