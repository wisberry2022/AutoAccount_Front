import { atom } from "recoil";
import { ThemeType } from "../../classes/types/RecoilStateTypes";

export const ThemeState = atom<ThemeType>({
  key: "ThemeState",
  default: {
   mode: "BRIGHT", 
  }
});