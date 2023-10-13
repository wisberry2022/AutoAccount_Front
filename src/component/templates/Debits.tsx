import { LayoutVerticalFlex } from "../atoms/div/StyledFlex";
import RegisterModal from "../organisms/modal/RegisterModal";
import { useGetAccount } from "../../hooks/useGetAccounts";
import { VoidtoVoid } from "../../classes/func/FuncTypes";
import {useRegister} from "../../hooks/axios/useRegister";
import { usePopup } from "../../hooks/popup/usePopup";
import TotalExpense from "../molecules/TotalExpense";
import DebitList from "../organisms/list/DebitList";
import Register from "../molecules/Register";

const Debits: React.FC = () => {
  const [isPop, openPop, closePop, togglePop] = usePopup();
  const save = useRegister("Debit");
  const accounts = useGetAccount();

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
      <Register modalType="Debit" toggle={toggle} />
      <DebitList debits={accounts?.debits} />
      <TotalExpense expense={accounts?.expense} />
      {isPop && (
        <RegisterModal
          register={register}
          cancel={cancel}
          modalType="Debit"
        />
      )}
    </LayoutVerticalFlex>
  );
};

export default Debits;
