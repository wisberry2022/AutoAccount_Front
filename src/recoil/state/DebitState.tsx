import { atom } from "recoil";
import { ClickedAccount, ExpenseType } from "../../classes/types/RecoilStateTypes";

const DebitState = atom<ClickedAccount>({
  key: "DebitState",
  default: {
    clicked: "",
    id: 0,
    serial: "",
    amount: 0,
    name: ""
  }
})

export {DebitState};

const ExpectTotalExpense = atom<ExpenseType>({
  key: "ExpectTotalExpense",
  default: {
    expense: 0
  }
})

export {ExpectTotalExpense};