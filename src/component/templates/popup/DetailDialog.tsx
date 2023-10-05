import { VerticalModalFlex } from "../../atoms/div/StyledFlex";
import DetailHeader from "../../organisms/popup/DetailHeader";
import DetailBody from "../../organisms/popup/DetailBody";
import { MouseEventHandler } from "react";

type propType = {
  close: MouseEventHandler<SVGAElement>;
  title: string;
};

const DetailDialog: React.FC<propType> = ({ close, title }) => {
  return (
    <VerticalModalFlex
      onClick={() => console.log("클릭!")}
      style={{ width: "40%" }}
      option={{ gap: "2.5" }}
    >
      <DetailHeader close={close} title={title} />
      <DetailBody />
    </VerticalModalFlex>
  );
};

export default DetailDialog;
