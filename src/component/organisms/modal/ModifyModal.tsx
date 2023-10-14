import {ChangeEventHandler} from "react";

import ModifyInputBox from "../../molecules/inputbox/ModifyInputBox";
import { VerticalModalFlex } from "../../atoms/div/StyledFlex";
import { VoidtoVoid } from "../../../classes/func/FuncTypes";
import { ModalTitle } from "../../atoms/title/TitleStyle";
import { objType } from "../../../types/DataTypes";
import BtnBox from "../btnbox/BtnBox";

type propType = {
  modalType: string;
  id:number;
  modifyData: objType;
  register: VoidtoVoid;
  cancel: VoidtoVoid;
  handler: ChangeEventHandler<HTMLInputElement>
};

const titles: objType = {
  Account: "내 계좌 수정",
  Debit: "자동이체 수정",
};

const ModifyModal: React.FC<propType> = ({ id, handler, modifyData, modalType, register, cancel }) => {
  return (
    <VerticalModalFlex
      onClick={(e) => {
        e.stopPropagation()
      }}>
      <ModalTitle title={titles[modalType]} />
      <ModifyInputBox
        handler={handler}
        defaultValues={modifyData}
        modalType={modalType} />
      <BtnBox register={register} cancel={cancel} />
    </VerticalModalFlex>
  );
};

export default ModifyModal;
