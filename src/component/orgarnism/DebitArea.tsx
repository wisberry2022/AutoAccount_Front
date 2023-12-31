import { styled } from "styled-components";
import { Debit } from "../../classes/types/DataTypes";
import List from "../atoms/list/List";
import DebitBundle from "../molecules/DebitBundle";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ExpectedState, UserClickedAccount } from "../../recoil/state/AccountState";
import { useEffect, useState } from "react";
import { useGetAjax } from "../../hooks/ajax/useAjax";
import useAjaxState from "../../hooks/ajax/useAjaxState";

const WrapperBorderList = styled(List)`
  margin-block-end: 0;
  margin-bottom: 1rem;
  border-top: .1rem solid #aaa;
  border-bottom: .1rem solid #aaa;
  padding: 1rem 0;
  width: 64.2vh;
  height: 75%;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

type FuncType = (data:any) => void

const DebitArea:React.FC = () => {
  const clicked = useRecoilValue(UserClickedAccount);
  const doDebitList = useGetAjax('isDebitList');
  const debitState = useAjaxState('isDebitAssign');
  const debitUpdateState = useAjaxState('isDebitUpdate');
  const debitDeleteState = useAjaxState('isDebitDelete');
  const [list, setList] = useState<Debit[]>([]);

  const rerender:FuncType = (result) => {
    if(result.result === "No Value Present" || result.result === 0) {
      doDebitList().then(res => setList(res.result));
      return;
    }
    setList(result.result);
  }

  useEffect(() => {
    doDebitList()
      .then(res => {
        rerender(res)
      });
  }, [clicked, debitState, debitUpdateState, debitDeleteState]);
  return (  
    <WrapperBorderList>
      {
        Array.isArray(list) && 
        list.map(val => {
          return <DebitBundle key={val.id} data={val} />
        })
      }
    </WrapperBorderList>
  )
}

export default DebitArea;