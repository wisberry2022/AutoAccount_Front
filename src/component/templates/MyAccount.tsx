import { VerticalFlex } from "../atoms/div/StyledFlex";
import AssignArea from "../orgarnism/AssignArea";
import MyAccounts from "../orgarnism/MyAccounts";

const MyAccount:React.FC = () => {
  return (
    <VerticalFlex option={{justifyContent:"flex-start"}}>
      <AssignArea />
      <MyAccounts />
    </VerticalFlex>
  )
}

export default MyAccount;