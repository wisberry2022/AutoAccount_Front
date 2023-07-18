import { styled } from "styled-components";
import { Scale } from "../../../classes/types/StyleTypes";

const Flex = styled.div<{debug?:boolean}>`
    outline: ${prop => prop.debug && ".1rem solid #000"};
    position: relative;
    display: flex;
`;

export {Flex};

const CustomSizingFlex = styled.div<{debug?:boolean, size:Scale}>`
    outline: ${prop => prop.debug && ".1rem solid #000"};
    margin: ${prop => prop.size && prop.size.margin};
    padding: ${prop => prop.size && prop.size.padding};
    width: ${prop => prop.size && prop.size.width + "rem"};
    height: ${prop => prop.size && prop.size.height + "rem"};    
`

export {CustomSizingFlex};

const CenterLayout = styled(Flex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export {CenterLayout};