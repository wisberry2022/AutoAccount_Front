import { VoidtoVoid } from "../../../classes/func/FuncTypes";
import { objType } from "../../../types/DataTypes";
import Emphasize from "../../atoms/Text/Emphasize";
import { VerticalModalFlex } from "../../atoms/div/StyledFlex";
import BtnBox from "../btnbox/BtnBox";

type propType = {
  modalType: string;
  register: VoidtoVoid;
  cancel: VoidtoVoid;
};

const titles: objType = {
  Account: "정말 계좌를 삭제하시겠습니까?",
  Debit: "자동이체 계좌를 삭제하시겠습니까?",
};

const RemoveAlert: React.FC<propType> = ({ modalType, register, cancel }) => {
  return (
    <VerticalModalFlex option={{ gap: "1.5" }}>
      <Emphasize font={{ fontSize: "1.5" }}>{titles[modalType]}</Emphasize>
      <BtnBox register={register} cancel={cancel} />
    </VerticalModalFlex>
  );
};

export default RemoveAlert;
