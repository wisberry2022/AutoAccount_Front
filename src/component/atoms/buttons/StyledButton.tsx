import { styled } from "styled-components";

import {CSSByThemeType} from "../../../types/ThemeType";
import { ColorSet } from "../../../types/StyleTypes";
import Button from "./Button";


const CustomColoringButton = styled(Button)<{color?:ColorSet}>`
  background-color: ${prop => prop.color && prop.color.bgColor};
  color: ${prop => prop.color && prop.color.color};
`;

export {CustomColoringButton};

const SwitchingButton = styled.button<{theme:CSSByThemeType}>`
  border: .1rem solid #d9d9d9;
  border-radius: 5rem;
  width: 7rem;
  height: 3rem;
  background-color: ${prop => prop.theme.bgColor};
  cursor: pointer;
`;

export {SwitchingButton};