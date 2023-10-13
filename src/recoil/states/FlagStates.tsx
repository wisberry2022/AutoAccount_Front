import { atom } from "recoil";
import { SimpleFlagType } from "../../types/RecoilStateTypes";

export const axiosRenewalFlag = atom<SimpleFlagType>({
  key: "axiosRenewalFlag",
  default: {
    update: false,
  },
});
