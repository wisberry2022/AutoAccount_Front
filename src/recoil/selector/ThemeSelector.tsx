import { selector } from "recoil";
import { ThemeState } from "../state/ThemeState";
import { CSSByThemeType, ThemeObjectType } from "../../classes/types/RecoilStateTypes";

const themeObj:ThemeObjectType = {
  BRIGHT:{
    outline: "1px solid #111",
    bgColor: "#fff",
    color: "#111",
  },
  DARK: {
    outline: "1px solid #ddd",
    bgColor: "#111",
    color: "#fff"
  },
}

const ThemeSelector = selector<CSSByThemeType>({
  key: "ThemeSelector",
  get: ({get}) => {
    const theme = get(ThemeState);
    return themeObj[theme.mode];
  }
});

export default ThemeSelector;