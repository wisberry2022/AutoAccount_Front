type Colors = "BW" | "WB";

export type {Colors};

type ColorSet = {
	bgColor: string;
	color: string;
}

export type {ColorSet};

type InputType = "checkbox" | "radio" | "hidden" | "tel" | "text" | "password";

type InputOption = {
	id: string;
	type: InputType;
	name?: string;
	placeholder?: string;
}

export type {InputOption}

type Scale = {
	padding?: string
	margin?: string
	width: string
	height?: string
}

export type {Scale};

type FlexSet = {
	justifyContent: string
	alignItems: string
	gap: string	
}

export type {FlexSet};

type BorderSet = {
	border?: string;
	radius?: string;
}

export type {BorderSet};

type FontSet = {
	fontSize?: string;
	fontWeight?: string;
	letterSpacing?: string;
	lineHeight?: string;
}

export type {FontSet};