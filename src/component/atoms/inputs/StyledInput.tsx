import { styled } from "styled-components";
import Input from "./Input";
import { BorderSet, Scale } from "../../../classes/types/StyleTypes";

const BorderedInput = styled(Input)<{border?:BorderSet}>`
  border: ${prop => prop.border && prop.border.border};  
  border-radius: ${prop => prop.border?.radius && prop.border.radius};
`;

export {BorderedInput};

const CustomSizingInput = styled(Input)<{size:Scale}>`
  padding: ${prop => prop.size && prop.size.padding};
  margin: ${prop => prop.size && prop.size.margin};
  width: ${prop => prop.size && prop.size.width + "rem"};
  height: ${prop => prop.size && prop.size.height + "rem"};
`;

export {CustomSizingInput};

