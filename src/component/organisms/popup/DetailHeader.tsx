import { MouseEventHandler } from "react";
import Emphasize from "../../atoms/Text/Emphasize";
import { HorizonFlex } from "../../atoms/div/StyledFlex";
import { HiXCircle } from "react-icons/hi";
import {useRecoilValue} from "recoil";
import {themeSelector} from "../../../recoil/selectors/ThemeSelector";

type propType = {
  close: MouseEventHandler<SVGAElement>;
  title: string;
};

const DetailHeader: React.FC<propType> = ({ close, title }) => {
  const theme = useRecoilValue(themeSelector);

  return (
    <HorizonFlex
      style={{ width: "100%" }}
      option={{ justifyContent: "space-between" }}
    >
      <Emphasize theme={theme} font={{ fontSize: "1.7" }}>{title}</Emphasize>
      <HiXCircle style={{ fontSize: "1.7rem", color:theme.color }} onClick={close} />
    </HorizonFlex>
  );
};

export default DetailHeader;
