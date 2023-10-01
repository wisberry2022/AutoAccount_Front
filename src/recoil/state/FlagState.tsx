import { atom } from "recoil";
import {
  ClickedAccount,
  RenderFlagType,
} from "../../classes/types/RecoilStateTypes";

export const FlagState = atom<ClickedAccount>({
  key: "FlagState",
  default: {
    clicked: "",
    id: 0,
    serial: "",
  },
});

export const renderState = atom<RenderFlagType>({
  key: "renderState",
  default: {
    account: false,
    debit: false,
  },
});
