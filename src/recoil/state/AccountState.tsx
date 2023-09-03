import { atom } from "recoil";
import { AssignStateType, ClickedAccount, ExpenseType } from "../../classes/types/RecoilStateTypes";

export const UserClickedAccount = atom<ClickedAccount>({
  key: "UserClickedAccount",
  default: {
    clicked: "",
    id: 0,
    serial: "",
    expected: 0
  }
});

export const AccountAssignState = atom<AssignStateType>({
  key: "AccountAssignState",
  default: {
    state: false
  }
})

export const ExpectedState = atom<ExpenseType>({
  key: 'ExpectedState',
  default: {
    expense: 0
  }
})
