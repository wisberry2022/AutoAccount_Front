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
import { UserClickedAccount } from "../../recoil/state/AccountState";
import { useEffect, useState } from "react";
import { useGetAjax } from "../../hooks/ajax/useAjax";
import { AjaxState } from "../../recoil/state/AjaxState";
import { URLType } from "../../classes/types/RecoilStateTypes";
import { DebitState } from "../../recoil/state/DebitState";

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
  const clicked = useRecoilValue(UserClickedAccount);
  const doDebitList = useGetAjax('isDebitList');
  const debitState = useRecoilValue(DebitState);
  const [list, setList] = useState<Debit[]>([]);

  useEffect(() => {
    doDebitList()
      .then(res => setList(res.result))
  }, [clicked, debitState]);
  

  return (  
    <WrapperBorderList>
      {
        Array.isArray(list) && 
        list?.map(val => {
          return <DebitBundle key={val.id} data={val} />
        })
      }
    </WrapperBorderList>
  )
}

export default DebitArea;