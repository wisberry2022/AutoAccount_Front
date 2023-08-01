import { RecoilState, atom, atomFamily, selectorFamily } from "recoil";
import { ButtonSet } from "../../classes/types/StyleTypes";
import { LabelInputPair } from "../../classes/types/DataTypes";


const DefaultModalButtons = atom<ButtonSet[]>({
  key:"ModalButtons",
  default: [
    {color:{bgColor:"#111", color:"#ddd"}, name:"수정", type:"MODIFY"},
    {color:{bgColor:"#ddd", color:"#111"}, name:"취소", type:"CANCEL"},
  ]
});

export {DefaultModalButtons};

const AssignModalButtons = atom<ButtonSet[]>({
  key:"ModalButtons",
  default: [
    {color:{bgColor:"#111", color:"#ddd"}, name:"등록", type:"ASSIGN"},
    {color:{bgColor:"#ddd", color:"#111"}, name:"취소", type:"CANCEL"},
  ]
}); 

export {AssignModalButtons};

const SerialFormSet = atom<LabelInputPair>({
  key: "LabelInputSet",
  default: {
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
  }
});


const BalanceFormSet = atom<LabelInputPair>({
  key: "BalanceFormSet",
  default: {
    id:2, 
    input:{
      id:"balance", 
      type:"text", 
      name:"balance", 
      placeholder:"잔액을 입력하세요"
    },
    label:{
      htmlFor: "balance",
      label: "잔액"
    } 
  }
});

const AmountFormSet = atom<LabelInputPair>({
  key: "AmountFormSet",
  default: {
    id:3, 
    input:{
      id:"amount", 
      type:"text", 
      name:"amount", 
      placeholder:"이체 금액을 입력하세요"
    },
    label:{
      htmlFor: "amount",
      label: "이체 금액"
    } 
  }
});


const AccountNameFormSet = atom<LabelInputPair>({
  key: "AccountNameFormSet",
  default: {
    id:4, 
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
  }
});


const OwnerFormSet = atom<LabelInputPair>({
  key: "OwnerFormSet",
  default: {
    id:5, 
    label:{
      htmlFor: "owner",
      label: "계좌주"
    },
    input:{
      id: "owner",
      name: "owner",
      type: "text",
      placeholder: "계좌주를 입력하세요"
    } 
  }
});

const DebitDateFormSet = atom<LabelInputPair>({
  key: "DebitDateFormSet",
  default: {
    id:6, 
    label:{
      htmlFor: "date",
      label: "이체일자"
    },
    input:{
      id: "date",
      name: "date",
      type: "date",
      placeholder: "자동이체 날짜를 선택하세요"
    } 
  }
});

const getInputComponent = atomFamily<LabelInputPair, string>({
  key: "getInputComponent",
  default: selectorFamily({
    key: "InputComponentSelector",
    get: param => ({get}) => {
      const stateMap:{[key : string]:RecoilState<LabelInputPair>} = {
        'serial':SerialFormSet,
        'balance':BalanceFormSet,
        'amount':AmountFormSet, 
        'owner':OwnerFormSet,
        'name':AccountNameFormSet,
        'date':DebitDateFormSet
      }
      
      const targetState = Object.keys(stateMap)
      .filter(v => v === param)
      .map(v => stateMap[v])[0];

      const target = get(targetState)
      return target;
    }
  })
});

export {getInputComponent};