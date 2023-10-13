import { css, styled } from "styled-components";
import { Colors } from "../../../types/StyleTypes";

const Button = styled.button<{color:Colors}>`
    border: .1rem solid #ddd;
    padding: .5rem 2rem;
    width: 7rem;
    font-size: 1.3rem;
    cursor: pointer;
    ${prop => prop.color === 'BW' ? css `    
        background-color: #000;
        color: #fff;
    ` : css`
        background-color: #fff;
        color: #000;
    `}
`;

export default Button;