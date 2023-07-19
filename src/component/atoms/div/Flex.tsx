import { styled } from "styled-components";

const Flex = styled.div<{debug?:boolean}>`
    outline: ${prop => prop.debug && ".1rem solid #000"};
    position: relative;
    display: flex;
    gap: .5rem;
`;

export default Flex;