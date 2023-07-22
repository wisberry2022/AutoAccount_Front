type Colors = "BW" | "WB";

export type {Colors};

type ColorSet = {
	bgColor: string;
	color: string;
}

export type {ColorSet};

type InputType = "checkbox" | "radio" | "hidden" | "tel" | "text" | "password";

type LabelOption = {
	htmlFor: string;
	label: string;
}

export type {LabelOption};

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

type Margin = {
	top?: number,
	right?: number,
	bottom?: number,
	left?: number
}

export type {Margin};

type FlexSet = {
	justifyContent?: string
	alignItems?: string
	gap?: string	
}

export type {FlexSet};

type BorderSet = {
	top?: number;
	right?: number;
	bottom?: number;
	left?: number;
	border?: string;
	radius?: string;
}

export type {BorderSet};

type ButtonSet = {
	color: ColorSet;
	name: string;
}

export type {ButtonSet};

type FontSet = {
	fontSize?: string;
	fontWeight?: string;
	letterSpacing?: string;
	lineHeight?: string;
}

export type {FontSet};