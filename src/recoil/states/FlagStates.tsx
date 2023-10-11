import { atom } from "recoil";
import { SimpleFlagType } from "../../types/RecoilStateTypes";

export const updateFlag = atom<SimpleFlagType>({
  key: "updateFlag",
  default: {
    update: false,
  },
});
