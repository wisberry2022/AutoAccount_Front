import { useContext } from "react";

import { LayoutVerticalFlex } from "../atoms/div/StyledFlex";
import RegisterModal from "../organisms/modal/RegisterModal";
import { VoidtoVoid } from "../../classes/func/FuncTypes";
import { Account } from "../../classes/types/DataTypes";
import AccountList from "../organisms/list/AccountList";
import { usePopup } from "../../hooks/popup/usePopup";
import Register from "../molecules/Register";
import { DataContext } from "../../App";

const MyAccount: React.FC = () => {
  const [isPop, openPop, closePop, togglePop] = usePopup();
  const accounts: Account[] = useContext(DataContext);

  const toggle: VoidtoVoid = () => {
    togglePop();
  };

  const register: VoidtoVoid = () => {
    closePop();
  };

  const cancel: VoidtoVoid = () => {
    closePop();
  };

  return (
    <LayoutVerticalFlex option={{ justifyContent: "flex-start" }}>
      <Register toggle={toggle} modalType="Account" />
      <AccountList accounts={accounts} />
      {isPop && (
        <RegisterModal
          register={register}
          cancel={cancel}
          modalType="Account"
        />
      )}
    </LayoutVerticalFlex>
  );
};

export default MyAccount;
