import { LayoutVerticalFlex } from "../atoms/div/StyledFlex";
import RegisterModal from "../organisms/modal/RegisterModal";
import AccountList from "../organisms/list/AccountList";
import Register from "../molecules/Register";
import { usePopup } from "../../hooks/popup/usePopup";
import { VoidtoVoid } from "../../classes/func/FuncTypes";

const MyAccount: React.FC = () => {
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
      <Register toggle={toggle} modalType="Account" />
      <AccountList />
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
