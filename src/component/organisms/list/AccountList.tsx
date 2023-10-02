import { NoneScrollBarFlex } from "../../atoms/div/StyledFlex";
import Account from "../Account";

const AccountList: React.FC = () => {
  return (
    <NoneScrollBarFlex height={100} option={{ gap: ".7" }}>
      <Account />
      <Account />
      <Account />
      <Account />
    </NoneScrollBarFlex>
  );
};

export default AccountList;
