import { atom } from "recoil";
import { ModalState } from "../../classes/types/RecoilStateTypes";

export const modalState = atom<ModalState>({
  key: "modalState",
  default: {
    Account: false,
    Debit: false,
  },
});
