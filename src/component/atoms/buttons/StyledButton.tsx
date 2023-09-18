import { styled } from "styled-components";
import Button from "./Button";
import { ColorSet } from "../../../classes/types/StyleTypes";
import { CSSByThemeType, ThemeType } from "../../../classes/types/RecoilStateTypes";

const CustomColoringButton = styled(Button)<{color:ColorSet}>`
  background-color: ${prop => prop.color && prop.color.bgColor};
  color: ${prop => prop.color && prop.color.color};
`;

export {CustomColoringButton};

const SwitchingButton = styled.button<{theme:CSSByThemeType}>`
  border: .1rem solid #ddd;
  border-radius: 5rem;
  width: 7rem;
  height: 3rem;
  background-color: ${prop => prop.theme.bgColor};
  cursor: pointer;
`;

export {SwitchingButton};