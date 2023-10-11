type InputType = "checkbox" | "radio" | "hidden" | "tel" | "text" | "password" | "date";
type ButtonType = "ASSIGN" | "MODIFY" | "CANCEL" | "REMOVE" | "OKAY";

export type Colors = "BW" | "WB";

export type ColorSet = {
	bgColor: string;
	color: string;
}

export type LabelOption = {
	htmlFor: string;
	label: string;
}

export type InputOption = {
	id: string;
	type: InputType;
	name?: string;
	placeholder?: string;
}

export type Scale = {
	padding?: string
	margin?: string
	width: string
	height?: string
}

export type Margin = {
	top?: number,
	right?: number,
	bottom?: number,
	left?: number
}

export type FlexSet = {
	justifyContent?: string
	alignItems?: string
	gap?: string	
}

export type BorderSet = {
	top?: number;
	right?: number;
	bottom?: number;
	left?: number;
	border?: string;
	radius?: string;
}

export type ButtonSet = {
	color: ColorSet;
	name: string;
	type: ButtonType;
}


export type FontSet = {
	fontSize?: string;
	fontWeight?: string;
	letterSpacing?: string;
	lineHeight?: string;
}
