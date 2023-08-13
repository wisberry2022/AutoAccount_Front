import { atom } from "recoil";
import { AssignStateType } from "../../classes/types/RecoilStateTypes";

const DebitState = atom<AssignStateType>({
  key: "DebitState",
  default: {
    state: true
  }
})

export {DebitState};