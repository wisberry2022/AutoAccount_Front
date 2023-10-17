import { VoidtoVoid } from "../../classes/func/FuncTypes";
import {Debit as DataType} from "../../types/DataTypes";
import ModifyBox from "../molecules/modifies/ModifyBox";
import { usePopup } from "../../hooks/popup/usePopup";
import { HorizonFlex } from "../atoms/div/StyledFlex";
import {useModify} from "../../hooks/axios/useModify";
import {useDelete} from "../../hooks/axios/useDelete";
import DebitInfo from "../molecules/info/DebitInfo";
import ModifyModal from "./modal/ModifyModal";
import RemoveAlert from "./modal/RemoveAlert";
import {DefaultValueContext} from "../../context/DefaultValueContext";

type propType = {
  debit: DataType;
};

const Debit: React.FC<propType> = ({ debit }) => {
  const [isModifyPop, openModifyPop, closeModifyPop, toggleModifyPop] =
    usePopup();
  const [isRemovePop, openRemovePop, closeRemovePop, toggleRemovePop] =
    usePopup();
  const [modData, fulfillInput, modifyingInfo, ] = useModify(debit, "Debit");
  const removeFunc = useDelete("Debit");

  const modifyRegister: VoidtoVoid = () => {
    modifyingInfo(debit.id);
    closeModifyPop();
  };

  const modifyCancel: VoidtoVoid = () => {
    closeModifyPop();
  };

  const modifyToggle: VoidtoVoid = () => {
    toggleModifyPop();
  };

  const removeOk: VoidtoVoid = () => {
    removeFunc(debit.id);
    closeRemovePop();
  };

  const removeCancel: VoidtoVoid = () => {
    closeRemovePop();
  };

  const removeToggle: VoidtoVoid = () => {
    toggleRemovePop();
  };

  return (
    <DefaultValueContext.Provider value={{Debit:modData}}>
    <HorizonFlex
      style={{
        border: ".1rem solid #d9d9d9",
        padding: "1.15rem 2rem",
        width: "36rem",
      }}
      option={{ justifyContent: "space-between" }}
    >
      <DebitInfo debit={debit} />
      <ModifyBox modifyToggle={modifyToggle} removeToggle={removeToggle} />
      {isModifyPop && (
        <ModifyModal
          register={modifyRegister}
          handler={fulfillInput}
          cancel={modifyCancel}
          id={Number.parseInt(debit.id)}
          modalType="Debit"
        />
      )}
      {isRemovePop && (
        <RemoveAlert
          register={removeOk}
          cancel={removeCancel}
          modalType="Debit"
        />
      )}
    </HorizonFlex>
    </DefaultValueContext.Provider>
  );
};

export default Debit;
