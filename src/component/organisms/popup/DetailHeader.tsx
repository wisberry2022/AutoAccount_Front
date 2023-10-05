import { MouseEventHandler } from "react";
import Emphasize from "../../atoms/Text/Emphasize";
import { HorizonFlex } from "../../atoms/div/StyledFlex";
import { HiXCircle } from "react-icons/hi";

type propType = {
  close: MouseEventHandler<SVGAElement>;
  title: string;
};

const DetailHeader: React.FC<propType> = ({ close, title }) => {
  return (
    <HorizonFlex
      style={{ width: "100%" }}
      option={{ justifyContent: "space-between" }}
    >
      <Emphasize font={{ fontSize: "1.7" }}>{title}</Emphasize>
      <HiXCircle style={{ fontSize: "1.7rem" }} onClick={close} />
    </HorizonFlex>
  );
};

export default DetailHeader;
