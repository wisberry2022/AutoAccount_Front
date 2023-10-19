import Emphasize from "../../atoms/Text/Emphasize";
import { VerticalFlex } from "../../atoms/div/StyledFlex";
import {useRecoilValue} from "recoil";
import {themeSelector} from "../../../recoil/selectors/ThemeSelector";

type propType = {
  name: string;
  serial: string;
}

const DetailLeft: React.FC<propType> = ({name, serial}) => {
  const theme = useRecoilValue(themeSelector);

  return (
    <VerticalFlex style={{ alignSelf: "flex-start" }}>
      <VerticalFlex option={{ gap: ".1", alignItems: "flex-start" }}>
        <Emphasize theme={theme} font={{ fontSize: "1.2", fontWeight: "300" }}>
          {name}
        </Emphasize>
        <Emphasize theme={theme} font={{ fontSize: "2", fontWeight: "600" }}>
          {serial}
        </Emphasize>
      </VerticalFlex>
    </VerticalFlex>
  );
};

export default DetailLeft;
