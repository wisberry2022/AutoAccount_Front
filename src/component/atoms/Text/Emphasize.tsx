import { styled } from "styled-components";
import { FontSet } from "../../../types/StyleTypes";
import {ThemeObjectType} from "../../../types/ThemeType";

const Emphasize = styled.strong<{font?:FontSet, theme?:ThemeObjectType}>`
    display: block;
    font-size: ${prop => prop.font?.fontSize && prop.font.fontSize + "rem" };
    font-weight: ${prop => prop.font?.fontWeight && prop.font.fontWeight};
    letter-spacing: ${prop => prop.font?.letterSpacing && prop.font.letterSpacing};
    line-height: ${prop => prop.font?.lineHeight && prop.font.lineHeight};
		color: ${prop => prop.theme?.color && prop.theme.color }
`;

export default Emphasize;