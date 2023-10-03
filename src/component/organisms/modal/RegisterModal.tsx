import { VerticalModalFlex } from "../../atoms/div/StyledFlex";
import { objType } from "../../../classes/types/DataTypes";
import { ModalTitle } from "../../atoms/title/TitleStyle";
import InputBox from "../../molecules/inputbox/InputBox";
import BtnBox from "../btnbox/BtnBox";

type propType = {
  modalType: string;
};

const titles: objType = {
  AccountRegister: "내 계좌 등록하기",
  DebitRegister: "자동이체 등록하기",
};

const RegisterModal: React.FC<propType> = ({ modalType }) => {
  return (
    <VerticalModalFlex>
      <ModalTitle title={titles[modalType]} />
      <InputBox modalType={modalType} />
      <BtnBox modalType={modalType} />
    </VerticalModalFlex>
  );
};

export default RegisterModal;
