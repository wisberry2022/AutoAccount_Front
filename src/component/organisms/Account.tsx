import { useSetRecoilState } from "recoil";
import {MouseEventHandler} from "react";

import { accountState } from "../../recoil/states/ClickedState";
import {Account as DataType} from "../../types/DataTypes";
import { VoidtoVoid } from "../../classes/func/FuncTypes";
import { HorizonFlex } from "./../atoms/div/StyledFlex";
import AccountInfo from "../molecules/info/AccountInfo";
import ModifyBox from "../molecules/modifies/ModifyBox";
import { usePopup } from "../../hooks/popup/usePopup";
import {useModify} from "../../hooks/axios/useModify";
import ModifyModal from "./modal/ModifyModal";
import RemoveAlert from "./modal/RemoveAlert";

type propType = {
  data: DataType;
};

const Account: React.FC<propType> = ({ data }) => {
  const setCurrent = useSetRecoilState(accountState);
  const [isModifyPop, openModifyPop, closeModifyPop, toggleModifyPop] =
    usePopup();
  const [isRemovePop, openRemovePop, closeRemovePop, toggleRemovePop] =
    usePopup();
  const [modData, fulfillInput, modifyingInfo, ] = useModify(data, "Account");

  const modifyRegister: VoidtoVoid = () => {
    modifyingInfo(data.id);
    closeModifyPop();
  };

  const modifyCancel: VoidtoVoid = () => {
    closeModifyPop();
  };

  const modifyToggle: MouseEventHandler<SVGElement> = (e) => {
    e.stopPropagation();
    toggleModifyPop();
  };

  const removeOk: VoidtoVoid = () => {
    closeRemovePop();
  };

  const removeCancel: VoidtoVoid = () => {
    closeRemovePop();
  };

  const removeToggle: MouseEventHandler<SVGElement> = (e) => {
    e.stopPropagation();
    toggleRemovePop();
  };

  const setId: VoidtoVoid = () => {
    setCurrent({ id: Number.parseInt(data.id) });
  };

  return (
    <HorizonFlex
      onClick={setId}
      style={{
        border: ".1rem solid #d9d9d9",
        padding: "1.15rem 2rem",
        width: "36rem",
      }}
      option={{ justifyContent: "space-between" }}
    >
      <AccountInfo data={data} />
      <ModifyBox removeToggle={removeToggle} modifyToggle={modifyToggle} />
      {isModifyPop && (
        <ModifyModal
          register={modifyRegister}
          modifyData={modData}
          cancel={modifyCancel}
          id={Number.parseInt(data.id)}
          handler={fulfillInput}
          modalType="Account"
        />
      )}
      {isRemovePop && (
        <RemoveAlert
          modalType="Account"
          register={removeOk}
          cancel={removeCancel}
        />
      )}
    </HorizonFlex>
  );
};

export default Account;
