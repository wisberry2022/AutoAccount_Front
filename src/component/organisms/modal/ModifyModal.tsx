import { VoidtoVoid } from "../../../classes/func/FuncTypes";
import { objType } from "../../../classes/types/DataTypes";
import { VerticalModalFlex } from "../../atoms/div/StyledFlex";
import { ModalTitle } from "../../atoms/title/TitleStyle";
import ModifyInputBox from "../../molecules/inputbox/ModifyInputBox";
import BtnBox from "../btnbox/BtnBox";

type propType = {
  modalType: string;
  register: VoidtoVoid;
  cancel: VoidtoVoid;
};

const titles: objType = {
  Account: "내 계좌 수정",
  Debit: "자동이체 수정",
};

const ModifyModal: React.FC<propType> = ({ modalType, register, cancel }) => {
  return (
    <VerticalModalFlex>
      <ModalTitle title={titles[modalType]} />
      <ModifyInputBox modalType={modalType} />
      <BtnBox register={register} cancel={cancel} />
    </VerticalModalFlex>
  );
};

export default ModifyModal;
