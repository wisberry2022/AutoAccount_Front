import { styled } from "styled-components";
import { Debit } from "../../classes/types/DataTypes";
import List from "../atoms/list/List";
import DebitBundle from "../molecules/DebitBundle";

const WrapperBorderList = styled(List)`
  width: 100%;
`

const DebitArea:React.FC = () => {
  const normalDebit:Debit = {
    deposit: "3028558834191",
    name: "일반통장",
    amount: 300000,
    debitDate: new Date().toLocaleDateString()
  };

  const installmentDebit:Debit = {
    deposit: "1038291045123",
    name: "적금통장",
    amount: 500000,
    debitDate: new Date().toLocaleDateString()
  };
  
  
  return (
    <WrapperBorderList>
      <DebitBundle data={normalDebit} />
      <DebitBundle data={installmentDebit} />
    </WrapperBorderList>
  )
}

export default DebitArea;