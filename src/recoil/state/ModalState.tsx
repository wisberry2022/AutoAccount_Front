import { atom } from "recoil";
import { ModalState } from "../../classes/types/RecoilStateTypes";

const ModalStates = atom<ModalState>({
  key: "ModalStates",
  default: {
    isAccountAssign: false,
    isAccountUpdate: false,
    isAccountDelete: false,
    isAccountDetail: false,
    isDebitAssign: false,
    isDebitUpdate: false,
    isDebitDelete: false,
    isDebitDetail: false,
  }
});

export {ModalStates};


