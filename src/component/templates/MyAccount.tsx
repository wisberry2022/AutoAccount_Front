import { VerticalFlex } from "../atoms/div/StyledFlex";
import AccountDetail from "../orgarnism/AccountsDetail";
import AssignArea from "../orgarnism/AssignArea";
import MyAccounts from "../orgarnism/MyAccounts";

const MyAccount:React.FC = () => {
  return (
    <VerticalFlex option={{justifyContent:"flex-start"}}>
      <AssignArea />
      <MyAccounts />
      <AccountDetail />
    </VerticalFlex>
  )
}

export default MyAccount;