import { atom } from "recoil";
import { AssignStateType, ClickedAccount } from "../../classes/types/RecoilStateTypes";

const UserClickedAccount = atom<ClickedAccount>({
  key: "UserClickedAccount",
  default: {
    clicked: "",
    id: 0,
    serial: ""
  }
});

export {UserClickedAccount};

const AccountAssignState = atom<AssignStateType>({
  key: "AccountAssignState",
  default: {
    state: false
  }
})

export {AccountAssignState};