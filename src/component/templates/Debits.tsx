import { LayoutVerticalFlex } from "../atoms/div/StyledFlex";
import RegisterModal from "../organisms/modal/RegisterModal";
import { VoidtoVoid } from "../../classes/func/FuncTypes";
import { usePopup } from "../../hooks/popup/usePopup";
import TotalExpense from "../molecules/TotalExpense";
import DebitList from "../organisms/list/DebitList";
import Register from "../molecules/Register";
import { useContext } from "react";
import { DataContext } from "../../App";
import { useDebit } from "../../hooks/useDebit";

const Debits: React.FC = () => {
  const [isPop, openPop, closePop, togglePop] = usePopup();
  const debits = useDebit();

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
      <Register modalType="Debit" toggle={toggle} />
      <DebitList debits={debits} />
      <TotalExpense />
      {isPop && (
        <RegisterModal register={register} cancel={cancel} modalType="Debit" />
      )}
    </LayoutVerticalFlex>
  );
};

export default Debits;
