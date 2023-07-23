import { styled } from "styled-components";
import { FontSet } from "../../classes/types/StyleTypes";
import Emphasize from "../atoms/Text/Emphasize";
import NormalText from "../atoms/Text/NormalText";
import { HorizonFlex } from "../atoms/div/StyledFlex";
import { CustomSizingEmphasize } from "../atoms/Text/StyledEmphasize";
import { CustomSizingNormalText } from "../atoms/Text/StyledNormalText";

const DescribeWrapperFlex = styled(HorizonFlex)`
  width: 100%;
`;

type PropType = {
    main: string;
    sub: string;
    gap: string;
}

const DescribeBox:React.FC<PropType> = ({main, sub, gap}:PropType) => {
    
  const font:FontSet = {
      fontSize: "1.5",
      fontWeight: "600"
  };
    
  return (
    <DescribeWrapperFlex option={{justifyContent:"center", gap:gap}}>
        <CustomSizingEmphasize size={{width:"20"}} font={font}>{main}</CustomSizingEmphasize>
        <CustomSizingNormalText size={{width: "10"}}>{sub}</CustomSizingNormalText>
    </DescribeWrapperFlex>
  )
}

export default DescribeBox;