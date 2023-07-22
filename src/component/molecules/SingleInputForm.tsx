import { styled } from "styled-components";
import { FontSet, InputOption, Scale } from "../../classes/types/StyleTypes";
import Button from "../atoms/buttons/Button";
import {CustomSizingInput} from "../atoms/inputs/StyledInput";
import Label from "../atoms/labels/Label";
import { GapFlex } from "../atoms/div/StyledFlex";

const BottomBorderedFlex = styled(GapFlex)<{border?:string}>`
  padding: 3rem 0;
  border-bottom: ${prop => prop.border ? prop.border : ".1rem solid #ddd" }
`

type PropGap = {
  gap: number
  border?: boolean
  option?: InputOption
}

const Inner:React.FC<PropGap> = ({gap, option}:PropGap) => {
  const font:FontSet = {fontSize:"1.5"};
  const size:Scale = {width:"15", padding:".5rem 1.5rem"};

  return (
    <>
      <GapFlex gap={gap/5}>
        <Label font={font} htmlFor="account">입력</Label>
        <CustomSizingInput size={size} {...option}/>
      </GapFlex>
      <Button color="BW">등록</Button>
    </>    
  )
}

const SingleInputForm:React.FC<PropGap> = ({gap, border, option}:PropGap) => {

  if(border){
    return (
      <BottomBorderedFlex gap={gap} >
        <Inner option={option} gap={gap}/>
      </BottomBorderedFlex>
    )
  }
  return (
    <GapFlex gap={gap}>
      <Inner option={option} gap={gap} />
    </GapFlex>
  )
}

export default SingleInputForm;