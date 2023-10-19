import {atom} from "recoil";

import {ThemeObjectType, ThemeType} from "../../types/ThemeType";

export const Theme = atom<ThemeObjectType>({
	key: "Theme",
	default: {
		BRIGHT : {
			outline: ".1rem solid #d9d9d9",
			bgColor: "#fff",
			color: "#111"
		},
		DARK: {
			outline: ".1rem solid #d9d9d9",
			bgColor: "#333",
			color: "#d9d9d9"
		}
	}
});

export const currTheme = atom<ThemeType>({
	key: "currTheme",
	default: "BRIGHT"
})