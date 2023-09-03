import { atom } from "recoil";
import { ClickedAccount } from "../../classes/types/RecoilStateTypes";

const FlagState = atom<ClickedAccount>({
  key: "FlagState",
  default: {
    clicked: "",
    id: 0,
    serial: ""
  }
});

export {FlagState};