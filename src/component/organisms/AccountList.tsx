import { VerticalFlex, HorizonFlex } from "../atoms/div/StyledFlex";
import Emphasize from "./../atoms/Text/Emphasize";
import Account from "./Account";

const AccountList: React.FC = () => {
  return (
    <VerticalFlex option={{ gap: ".7" }}>
      <Account />
      <Account />
      <Account />
      <Account />
      <Account />
      <Account />
    </VerticalFlex>
  );
};

export default AccountList;
