import { styled } from "styled-components";
import { DetailData, ListData } from "../../classes/types/DataTypes";
import List from "../atoms/list/List";
import MyAccountBundle from "../molecules/MyAccountBundle";
import ModalFrame from "../../pages/modal/ModalFrame";
import AccountDetail from "./AccountsDetail";
import useModalState from "../../hooks/recoil/useModalState";
import useAjaxState from "../../hooks/ajax/useAjaxState";
import { useEffect, useState } from "react";
import { useGetAjax } from "../../hooks/ajax/useAjax";
import { useRecoilValue } from "recoil";
import { UserClickedAccount } from "../../recoil/state/AccountState";

const OuterList = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; 
  justify-content: flex-start;
  align-items: center;
  border: .1rem solid #aaa;
  padding: 1.5rem 1rem;
  width: 100%;
  height: 50vh;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MyAccounts:React.FC = () => {
  const [ACCOUNT_DETAIL, _] = useModalState('isAccountDetail');
  const ajaxState:boolean = useAjaxState('isAccountAssign');
  const getList = useGetAjax('isAccountList');
  const [list, setList] = useState<ListData[]>([]);
  const clicked = useRecoilValue(UserClickedAccount);

  useEffect(() => {
    const result = getList();
    result.then(res => setList(res));
  }, [ajaxState, getList]);

  const details:DetailData[] = [
    {id:1, main:"잔액", sub:"15000원"},
    {id:2, main:"계좌주", sub:"왕인서"},
    {id:3, main:"등록된 자동이체 수", sub:"2개"}
  ];

  return (
    <OuterList>
      {
        list?.map((val,idx) => {
            return (
              <MyAccountBundle key={idx} name={val.name} serial={val.serial} />
            )
        })
      }
      {
        ACCOUNT_DETAIL &&
        <ModalFrame title="계좌 상세보기" close={true} target={<AccountDetail detail={details} />} />
      }
    </OuterList>
  )
}

export default MyAccounts;