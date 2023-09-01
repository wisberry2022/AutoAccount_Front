import { atom } from "recoil";
import { URLType } from "../../classes/types/RecoilStateTypes";

const AjaxState = atom<URLType>({
  key: "AjaxState",
  default: {
    isAccountAssign: {
      url: "http://localhost:8080/mysalary/api/v1/account",
      state: false
    },
    isAccountList: {
      url: "http://localhost:8080/mysalary/api/v1/account",
      state: false
    },
    isAccountDetail: {
      url: "http://localhost:8080/mysalary/api/v1/account",
      state: false
    },
    isAccountUpdate: {
      url: "http://localhost:8080/mysalary/api/v1/account",
      state: false
    },
    isAccountDelete: {
      url: "http://localhost:8080/mysalary/api/v1/account",
      state: false
    },
    isDebitList: {
      url: "http://localhost:8080/mysalary/api/v1/account",
      state: false
    },
    isDebitDetail: {
      url: "http://localhost:8080/mysalary/api/v1/debit",
      state: false
    },
    isDebitAssign: {
      url: "http://localhost:8080/mysalary/api/v1/debit",
      state: false
    },
    isDebitUpdate: {
      url: "http://localhost:8080/mysalary/api/v1/debit",
      state: false
    },
    isDebitDelete: {
      url: "http://localhost:8080/mysalary/api/v1/debit",
      state: false
    }
  }
});

export {AjaxState};

