import { styled } from "styled-components";
import Title from "./Title";

const CenterTitle = styled(Title)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export {CenterTitle};