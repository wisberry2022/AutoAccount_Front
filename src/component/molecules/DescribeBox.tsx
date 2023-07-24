import { css, styled } from "styled-components";
import { FontSet } from "../../classes/types/StyleTypes";
import { HorizonFlex } from "../atoms/div/StyledFlex";
import { CustomSizingEmphasize } from "../atoms/Text/StyledEmphasize";
import { CustomSizingNormalText } from "../atoms/Text/StyledNormalText";

const DescribeWrapperFlex = styled(HorizonFlex)<{border?:string}>`
  margin: auto 0;
  width: 100%;
  ${prop => prop.border && css`
    padding: 1rem 0;
    border: ${prop.border};
  `}
`;

type PropType = {
    main: string;
    sub: string;
    gap: string;
    border?: string;
}

const DescribeBox:React.FC<PropType> = ({main, sub, gap, border}:PropType) => {
    
  const font:FontSet = {
      fontSize: "1.5",
      fontWeight: "600"
  };
    
  return (
    <DescribeWrapperFlex border={border} option={{justifyContent:"center", gap:gap}}>
        <CustomSizingEmphasize size={{width:"20"}} font={font}>{main}</CustomSizingEmphasize>
        <CustomSizingNormalText size={{width: "10"}}>{sub}</CustomSizingNormalText>
    </DescribeWrapperFlex>
  )
}

export default DescribeBox;