type THEME = "DARK" | "BRIGHT";

export type ThemeType = {
  mode: THEME;
};

export type CSSByThemeType = {
  outline: string;
  bgColor: string;
  color: string;
};

export type ThemeObjectType = {
  [key in string]: CSSByThemeType;
};

export type AccountState = {
  id: number;
};

export type SimpleFlagType = {
  [key in string]:boolean;
}