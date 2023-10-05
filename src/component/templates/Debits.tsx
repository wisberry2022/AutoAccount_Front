import { LayoutVerticalFlex } from "../atoms/div/StyledFlex";
import RegisterModal from "../organisms/modal/RegisterModal";
import TotalExpense from "../molecules/TotalExpense";
import DebitList from "../organisms/list/DebitList";
import Register from "../molecules/Register";
import { usePopup } from "../../hooks/popup/usePopup";
import { VoidtoVoid } from "../../classes/func/FuncTypes";

const Debits: React.FC = () => {
  const [isPop, openPop, closePop, togglePop] = usePopup();

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
      <DebitList />
      <TotalExpense />
      {isPop && (
        <RegisterModal register={register} cancel={cancel} modalType="Debit" />
      )}
    </LayoutVerticalFlex>
  );
};

export default Debits;
