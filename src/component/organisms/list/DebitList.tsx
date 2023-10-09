import { Debit as DataType } from "../../../classes/types/DataTypes";
import { NoneScrollBarFlex } from "../../atoms/div/StyledFlex";
import Debit from "../Debit";

type propType = {
  debits: DataType[];
};

const DebitList: React.FC<propType> = ({ debits }) => {
  return (
    <NoneScrollBarFlex
      style={{ marginBottom: "2.5rem" }}
      option={{ gap: ".7" }}
    >
      {debits?.map((debit) => {
        return <Debit key={debit.id} debit={debit} />;
      })}
    </NoneScrollBarFlex>
  );
};

export default DebitList;
