import { styled } from "styled-components";
import { Debit, LabelInputPair } from "../../classes/types/DataTypes";
import List from "../atoms/list/List";
import DebitBundle from "../molecules/DebitBundle";
import ModalFrame from "../../pages/modal/ModalFrame";
import ModifyBox from "../molecules/ModifyBox";
import { ButtonSet } from "../../classes/types/StyleTypes";

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
  
  const dataArr:LabelInputPair[] = [
    {
      id:1, 
      input:{
        id:"serial", 
        type:"text", 
        name:"serial", 
        placeholder:"변경할 계좌번호를 입력하세요"
      },
      label:{
        htmlFor: "serial",
        label: "계좌번호"
      }
    },
    {
      id:2, 
      input:{
        id:"balance", 
        type:"text", 
        name:"balance", 
        placeholder:"이체 금액을 입력하세요"
      },
      label:{
        htmlFor: "balance",
        label: "이체 금액"
      }
    },
    {
      id:3, 
      input:{
        id:"name", 
        type:"text", 
        name:"name", 
        placeholder:"계좌 이름을 입력하세요"
      },
      label:{
        htmlFor: "name",
        label: "계좌이름"
      }
    },
  ];

  const buttons:ButtonSet[] = [
    {color:{bgColor:"#ddd", color:"#111"}, name:"수정"},
    {color:{bgColor:"#111", color:"#ddd"}, name:"취소"},
  ];

  return (  
    <WrapperBorderList>
      <DebitBundle data={normalDebit} />
      <DebitBundle data={installmentDebit} />
      {/* <ModalFrame title="자동이체 계좌 수정하기" target={<ModifyBox dataArr={dataArr} buttonArr={buttons} />} /> */}
    </WrapperBorderList>
  )
}

export default DebitArea;