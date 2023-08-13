import { atom } from "recoil";
import { AssignStateType, ClickedAccount } from "../../classes/types/RecoilStateTypes";

const UserClickedAccount = atom<ClickedAccount>({
  key: "UserClickedAccount",
  default: {
    clicked: "",
    id: "",
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