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
import { useRecoilState, useRecoilValue } from "recoil";
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
  const deleteState:boolean = useAjaxState('isAccountDelete');
  const updateState:boolean = useAjaxState('isAccountUpdate');
  const getList = useGetAjax('isAccountList');
  const [list, setList] = useState<ListData[]>([]);
  const [clicked, setClicked] = useRecoilState(UserClickedAccount);


  useEffect(() => {
    console.log('MyAccounts 렌더링', clicked.id);
    const result:Promise<ListData[]> = getList();
    result.then(res => {
      setList(res);
      setClicked({
        id:res[0]?.id ? res[0].id : "", 
        clicked:res[0]?.name ? res[0].name : "", 
        serial:res[0]?.serial ? res[0].serial : ""});
    });
  }, [ajaxState, deleteState, updateState]);

  

  return (
    <OuterList>
      {
        list?.map((val,idx) => {
            return (
              <MyAccountBundle key={idx} id={val.id} name={val.name} serial={val.serial} />
            )
        })
      }
      {
        ACCOUNT_DETAIL &&
        <ModalFrame title="계좌 상세보기" close={true} target={<AccountDetail />} />
      }
    </OuterList>
  )
}

export default MyAccounts;