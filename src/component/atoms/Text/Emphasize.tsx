import { styled } from "styled-components";
import { FontSet } from "../../../classes/types/StyleTypes";

const Emphasize = styled.strong<{font?:FontSet}>`
    display: block;
    font-size: ${prop => prop.font?.fontSize && prop.font.fontSize + "rem" };
    font-weight: ${prop => prop.font?.fontWeight && prop.font.fontWeight};
    letter-spacing: ${prop => prop.font?.letterSpacing && prop.font.letterSpacing};
    line-height: ${prop => prop.font?.lineHeight && prop.font.lineHeight};
`;

export default Emphasize;