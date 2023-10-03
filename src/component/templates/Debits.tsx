import { LayoutVerticalFlex } from "../atoms/div/StyledFlex";
import RegisterModal from "../organisms/modal/RegisterModal";
import { useModal } from "../../hooks/modal/useModal";
import TotalExpense from "../molecules/TotalExpense";
import DebitList from "../organisms/list/DebitList";
import Register from "../molecules/Register";
import { useRecoilValue } from "recoil";
import { modalState } from "../../recoil/state/ModalState";

const Debits: React.FC = () => {
  const modal = useRecoilValue(modalState);

  return (
    <LayoutVerticalFlex option={{ justifyContent: "flex-start" }}>
      <Register modalType="DebitRegister" />
      <DebitList />
      <TotalExpense />
      {modal.DebitRegister && <RegisterModal modalType="DebitRegister" />}
    </LayoutVerticalFlex>
  );
};

export default Debits;
