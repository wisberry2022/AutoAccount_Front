import { atom } from "recoil";
import { URLType } from "../../classes/types/RecoilStateTypes";

const AjaxState = atom<URLType>({
  key: "AjaxState",
  default: {
    isAccountAssign: {
      url: "/mysalary/api/v1/account",
      state: false
    },
    isAccountList: {
      url: "/mysalary/api/v1/account",
      state: false
    }
  }
});

export {AjaxState};

