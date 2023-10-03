import { LayoutVerticalFlex } from "../atoms/div/StyledFlex";
import RegisterModal from "../organisms/modal/RegisterModal";
import AccountList from "../organisms/list/AccountList";
import { useModal } from "../../hooks/modal/useModal";
import Register from "../molecules/Register";
import { modalState } from "../../recoil/state/ModalState";
import { useRecoilValue } from "recoil";

const MyAccount: React.FC = () => {
  const modal = useRecoilValue(modalState);

  return (
    <LayoutVerticalFlex option={{ justifyContent: "flex-start" }}>
      <Register modalType="AccountRegister" />
      <AccountList />
      {modal.AccountRegister && <RegisterModal modalType="AccountRegister" />}
    </LayoutVerticalFlex>
  );
};

export default MyAccount;
