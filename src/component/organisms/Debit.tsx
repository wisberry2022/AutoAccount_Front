import { VoidtoVoid } from "../../classes/func/FuncTypes";
import { Debit as DataType } from "../../types/DataTypes";
import { usePopup } from "../../hooks/popup/usePopup";
import { HorizonFlex } from "../atoms/div/StyledFlex";
import DebitInfo from "../molecules/info/DebitInfo";
import ModifyBox from "../molecules/modifies/ModifyBox";
import ModifyModal from "./modal/ModifyModal";
import RemoveAlert from "./modal/RemoveAlert";

type propType = {
  debit: DataType;
};

const Debit: React.FC<propType> = ({ debit }) => {
  const [isModifyPop, openModifyPop, closeModifyPop, toggleModifyPop] =
    usePopup();
  const [isRemovePop, openRemovePop, closeRemovePop, toggleRemovePop] =
    usePopup();

  const modifyRegister: VoidtoVoid = () => {
    closeModifyPop();
  };

  const modifyCancel: VoidtoVoid = () => {
    closeModifyPop();
  };

  const modifyToggle: VoidtoVoid = () => {
    toggleModifyPop();
  };

  const removeOk: VoidtoVoid = () => {
    closeRemovePop();
  };

  const removeCancel: VoidtoVoid = () => {
    closeRemovePop();
  };

  const removeToggle: VoidtoVoid = () => {
    toggleRemovePop();
  };

  return (
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
          cancel={modifyCancel}
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
  );
};

export default Debit;
