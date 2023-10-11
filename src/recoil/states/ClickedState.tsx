import { atom } from "recoil";
import { AccountState } from "../../types/RecoilStateTypes";

export const accountState = atom<AccountState>({
  key: "accountState",
  default: {
    id: 0,
  },
});
