import { VerticalModalFlex } from "../../atoms/div/StyledFlex";
import { objType } from "../../../types/DataTypes";
import { ModalTitle } from "../../atoms/title/TitleStyle";
import InputBox from "../../molecules/inputbox/InputBox";
import BtnBox from "../btnbox/BtnBox";
import { VoidtoVoid } from "../../../classes/func/FuncTypes";

type propType = {
  modalType: string;
  register: VoidtoVoid;
  cancel: VoidtoVoid;
};

const titles: objType = {
  Account: "내 계좌 등록하기",
  Debit: "자동이체 등록하기",
};

const RegisterModal: React.FC<propType> = ({ modalType, register, cancel }) => {
  return (
    <VerticalModalFlex>
      <ModalTitle title={titles[modalType]} />
      <InputBox modalType={modalType} />
      <BtnBox register={register} cancel={cancel} />
    </VerticalModalFlex>
  );
};

export default RegisterModal;
