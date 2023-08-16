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
    isDebitList: {
      url: "/mysalary/api/v1/account/debit",
      state: false
    },
    isDebitDetail: {
      url: "/mysalary/api/v1/debit",
      state: false
    },
    isDebitAssign: {
      url: "/mysalary/api/v1/debit",
      state: false
    },
    isDebitUpdate: {
      url: "/mysalary/api/v1/debit",
      state: false
    },
    isDebitDelete: {
      url: "/mysalary/api/v1/debit",
      state: false
    }
  }
});

export {AjaxState};

