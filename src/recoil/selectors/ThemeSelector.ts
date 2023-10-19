import {selector} from "recoil";
import {CSSByThemeType} from "../../types/ThemeType";
import {currTheme, Theme} from "../theme/Theme";

export const themeSelector = selector<CSSByThemeType>({
	key: "themeSelector",
	get: ({get}) => {
		const themeSet = get(Theme);
		const select = get(currTheme);

		return themeSet[select];
	}
})