import { styled } from "styled-components";
import { Debit, LabelInputPair } from "../../classes/types/DataTypes";
import List from "../atoms/list/List";
import DebitBundle from "../molecules/DebitBundle";
import ModalFrame from "../../pages/modal/ModalFrame";
import ModifyBox from "../molecules/ModifyBox";
import { ButtonSet } from "../../classes/types/StyleTypes";
import { getInputComponent } from "../../recoil/state/DefaultState";
import { useRecoilValue } from "recoil";
import useModalState from "../../hooks/recoil/useModalState";

const WrapperBorderList = styled(List)`
  margin-block-end: 0;
  margin-bottom: 1rem;
  border-top: .1rem solid #aaa;
  border-bottom: .1rem solid #aaa;
  padding: 1rem 0;
  width: 100%;
  height: 75%;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
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