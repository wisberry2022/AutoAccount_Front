import { atom } from "recoil";
import { ModalState } from "../../classes/types/RecoilStateTypes";

const ModalStates = atom<ModalState>({
  key: "ModalStates",
  default: {
    isAccountAssign: false,
    isAccountUpdate: false,
    isAccountDelete: false,
    isDebitAssign: false,
    isDebitUpdate: false,
    isDebitDelete: false,
  }
});

export {ModalStates};