import { styled } from "styled-components";
import Input from "./Input";
import { BorderSet, Scale } from "../../../types/StyleTypes";
import {ThemeObjectType} from "../../../types/ThemeType";

export const BorderedInput = styled(Input)<{ border?: BorderSet }>`
  border: ${(prop) => prop.border && prop.border.border};
  border-radius: ${(prop) => prop.border?.radius && prop.border.radius};
`;

export const CustomSizingInput = styled(Input)<{ size: Scale }>`
  padding: ${(prop) => prop.size && prop.size.padding};
  margin: ${(prop) => prop.size && prop.size.margin};
  width: ${(prop) => prop.size && prop.size.width + "rem"};
  height: ${(prop) => prop.size && prop.size.height + "rem"};
`;

export const RegisterInput = styled(CustomSizingInput)<{theme?:ThemeObjectType}>`
  border: 0.1rem solid #d9d9d9;
  padding: 0.8rem;
	color: ${prop => prop.theme?.color && prop.theme.color};
	background-color: ${prop => prop.theme?.bgColor && prop.theme.bgColor};
`;
