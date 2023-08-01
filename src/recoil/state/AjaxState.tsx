import { atom } from "recoil";
import { URLType } from "../../classes/types/RecoilStateTypes";

const AjaxState = atom<URLType>({
  key: "AjaxState",
  default: {
    isAccountAssign: "/mysalary/api/v1/account"
  }
});

export {AjaxState};