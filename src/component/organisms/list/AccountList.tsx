import { Account as DataType } from "../../../classes/types/DataTypes";
import { NoneScrollBarFlex } from "../../atoms/div/StyledFlex";
import Account from "../Account";

type propType = {
  accounts: DataType[];
};

const AccountList: React.FC<propType> = ({ accounts }) => {
  return (
    <NoneScrollBarFlex height={100} option={{ gap: ".7" }}>
      {accounts.length &&
        accounts.map((account) => {
          return <Account key={account.id} data={account} />;
        })}
    </NoneScrollBarFlex>
  );
};

export default AccountList;
