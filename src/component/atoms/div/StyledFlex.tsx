import { styled } from "styled-components";
import { FlexSet, Scale } from "../../../classes/types/StyleTypes";
import Flex from "./Flex";

const CustomSizingFlex = styled.div<{debug?:boolean, size:Scale}>`
  outline: ${prop => prop.debug && ".1rem solid #000"};
  margin: ${prop => prop.size && prop.size.margin};
  padding: ${prop => prop.size && prop.size.padding};
  width: ${prop => prop.size && prop.size.width + "rem"};
  height: ${prop => prop.size && prop.size.height + "rem"};    
`

export { CustomSizingFlex };

const ViewCenterFlex = styled(Flex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export { ViewCenterFlex };

const VerticalFlex = styled(Flex)<{option?:FlexSet}>`
  flex-direction: column;
  justify-content: ${prop => prop.option?.justifyContent ? prop.option.justifyContent : "center"};
  align-items: ${prop => prop.option?.alignItems ? prop.option.alignItems : "center"};
  gap: ${prop => prop.option?.gap ? prop.option.gap + "rem" : ".5rem"};
`;

export { VerticalFlex };

const HorizonFlex = styled(Flex)<{option?:FlexSet}>`
  justify-content: ${prop => prop.option?.justifyContent ? prop.option.justifyContent : "center"};
  align-items: ${prop => prop.option?.alignItems ? prop.option.alignItems : "center"};
  gap: ${prop => prop.option?.gap ? prop.option.gap + "rem" : ".5rem"};
`

export { HorizonFlex };

const GapFlex = styled(Flex)<{gap:number}>`
  gap: ${prop => prop.gap + "rem"};
`

export {GapFlex};

const VerticalModalFlex = styled(VerticalFlex)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border: .1rem solid #aaa;
  padding: 3rem;
  background-color: #fff;
`;

export {VerticalModalFlex};