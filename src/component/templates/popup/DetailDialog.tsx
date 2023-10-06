import { VerticalModalFlex } from "../../atoms/div/StyledFlex";
import DetailHeader from "../../organisms/popup/DetailHeader";
import DetailBody from "../../organisms/popup/DetailBody";
import { MouseEventHandler } from "react";
import { objType } from "../../../classes/types/DataTypes";

type propType = {
  close: MouseEventHandler<SVGAElement>;
  modalType: string;
};

const titles: objType = {
  Account: "계좌 상세보기",
  Debit: "자동이체 상세보기",
};

const DetailDialog: React.FC<propType> = ({ close, modalType }) => {
  return (
    <VerticalModalFlex style={{ width: "40%" }} option={{ gap: "2.5" }}>
      <DetailHeader close={close} title={titles[modalType]} />
      <DetailBody />
    </VerticalModalFlex>
  );
};

export default DetailDialog;
