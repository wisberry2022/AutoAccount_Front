import { HorizonFlex } from "./../atoms/div/StyledFlex";
import AccountInfo from "../molecules/info/AccountInfo";
import ModifyBox from "../molecules/modifies/ModifyBox";

const Account: React.FC = () => {
  return (
    <HorizonFlex
      style={{
        border: ".1rem solid #d9d9d9",
        padding: "1.15rem 2rem",
        width: "36rem",
      }}
      option={{ justifyContent: "space-between" }}
    >
      <AccountInfo />
      <ModifyBox />
    </HorizonFlex>
  );
};

export default Account;
