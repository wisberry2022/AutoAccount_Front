import { LayoutVerticalFlex } from "../atoms/div/StyledFlex";
import Register from "../molecules/Register";
import AccountList from "../organisms/list/AccountList";

const MyAccount: React.FC = () => {
  return (
    <LayoutVerticalFlex option={{ justifyContent: "flex-start" }}>
      <Register content="내 계좌 등록하기" />
      <AccountList />
    </LayoutVerticalFlex>
  );
};

export default MyAccount;
