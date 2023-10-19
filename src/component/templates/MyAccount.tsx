import { useContext } from "react";

import RegisterModal from "../organisms/modal/RegisterModal";
import { LayoutVerticalFlex } from "../atoms/div/StyledFlex";
import { VoidtoVoid } from "../../classes/func/FuncTypes";
import {useRegister} from "../../hooks/axios/useRegister";
import AccountList from "../organisms/list/AccountList";
import { usePopup } from "../../hooks/popup/usePopup";
import { Account } from "../../types/DataTypes";
import Register from "../molecules/Register";
import { DataContext } from "../../App";

type propType = {
  accounts: Account[];
}

const MyAccount: React.FC<propType> = ({accounts}) => {
  const [isPop, openPop, closePop, togglePop] = usePopup();
  const save:VoidtoVoid = useRegister("Account");

  const toggle: VoidtoVoid = () => {
    togglePop();
  };

  const register: VoidtoVoid = () => {
    save();
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
