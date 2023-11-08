import {ChangeEventHandler} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";

import {registerState} from "../../../recoil/states/AxiosStates";
import { VerticalModalFlex } from "../../atoms/div/StyledFlex";
import { VoidtoVoid } from "../../../classes/func/FuncTypes";
import { ModalTitle } from "../../atoms/title/TitleStyle";
import InputBox from "../../molecules/inputbox/InputBox";
import { objType } from "../../../types/DataTypes";
import BtnBox from "../btnbox/BtnBox";
import {convertStrToNumber} from "../../../utils/FuncSet";
import {themeSelector} from "../../../recoil/selectors/ThemeSelector";

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
  const setData = useSetRecoilState(registerState);
  const theme = useRecoilValue(themeSelector);

  const fulfillInput:ChangeEventHandler<HTMLInputElement> = (e) => {
    const {name, value} = e.target;
    setData(prev => {
      return {
        ...prev,
        [name]:convertStrToNumber(name, value),
      }
    })
  }

  return (
    <VerticalModalFlex theme={theme}>
      <ModalTitle title={titles[modalType]} />
      <InputBox modalType={modalType} handler={fulfillInput}  />
      <BtnBox act="register" register={register} cancel={cancel} />
    </VerticalModalFlex>
  );
};

export default RegisterModal;
