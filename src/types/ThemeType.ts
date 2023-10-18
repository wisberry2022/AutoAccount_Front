export type ThemeType = "DARK" | "BRIGHT";


export type CSSByThemeType = {
	outline: string;
	bgColor: string;
	color: string;
};

export type ThemeObjectType = {
	[key : string]: CSSByThemeType;
};