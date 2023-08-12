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
    },
    isAccountDetail: {
      url: "/mysalary/api/v1/account",
      state: false
    },
    isAccountUpdate: {
      url: "/mysalary/api/v1/account",
      state: false
    },
    isAccountDelete: {
      url: "/mysalary/api/v1/account",
      state: false
    },
    isDebitDelete: {
      url: "/mysalary/api/v1/debit",
      state: false
    }
  }
});

export {AjaxState};

