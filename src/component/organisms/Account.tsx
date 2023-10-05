import { HorizonFlex } from "./../atoms/div/StyledFlex";
import AccountInfo from "../molecules/info/AccountInfo";
import ModifyBox from "../molecules/modifies/ModifyBox";
import { usePopup } from "../../hooks/popup/usePopup";
import { VoidtoVoid } from "../../classes/func/FuncTypes";
import ModifyModal from "./modal/ModifyModal";
import RemoveAlert from "./modal/RemoveAlert";

const Account: React.FC = () => {
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
      <AccountInfo />
      <ModifyBox removeToggle={removeToggle} modifyToggle={modifyToggle} />
      {isModifyPop && (
        <ModifyModal
          register={modifyRegister}
          cancel={modifyCancel}
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
