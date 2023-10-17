import {MouseEventHandler} from "react";
import {useRecoilState} from "recoil";

import {ParamToVoid, VoidtoVoid} from "../../classes/func/FuncTypes";
import {Account as DataType, starSet} from "../../types/DataTypes";
import { accountState } from "../../recoil/states/ClickedState";
import {useAfterDelete} from "../../hooks/useAfterDelete";
import { HorizonFlex } from "./../atoms/div/StyledFlex";
import AccountInfo from "../molecules/info/AccountInfo";
import ModifyBox from "../molecules/modifies/ModifyBox";
import {useDelete} from "../../hooks/axios/useDelete";
import { usePopup } from "../../hooks/popup/usePopup";
import {useModify} from "../../hooks/axios/useModify";
import ModifyModal from "./modal/ModifyModal";
import RemoveAlert from "./modal/RemoveAlert";

type propType = {
  data: DataType;
  findId: (id:number) => number;
};

const Account: React.FC<propType> = ({ data, findId}) => {
  const [curr, setCurrent] = useRecoilState(accountState);
  const [isModifyPop, openModifyPop, closeModifyPop, toggleModifyPop] =
    usePopup();
  const [isRemovePop, openRemovePop, closeRemovePop, toggleRemovePop] =
    usePopup();
  const [modData, fulfillInput, modifyingInfo] = useModify(data, "Account");
  const removeFunc = useDelete("Account");
  const afterDelete = useAfterDelete();

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
    afterDelete(data.id);
    removeFunc(data.id);
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
      <AccountInfo data={data} isCurrent={findId(curr.id) === Number.parseInt(data.id) ? true : false} />
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
