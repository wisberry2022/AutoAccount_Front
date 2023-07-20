import { styled } from "styled-components";
import { FontSet, InputOption, Scale } from "../../classes/types/StyleTypes";
import Button from "../atoms/buttons/Button";
import Flex from "../atoms/div/Flex";
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
}

const Inner:React.FC<PropGap> = ({gap}:PropGap) => {
  const font:FontSet = {fontSize:"1.5"};
  const size:Scale = {width:"15", padding:".5rem 1.5rem"};
  const option:InputOption = {
      id: "account",
      type: "text",
      name: "account",
      placeholder: "관리할 계좌를 입력하세요"
  };

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

const FormInput:React.FC<PropGap> = ({gap, border}:PropGap) => {
  
  if(border){
    return (
      <BottomBorderedFlex gap={gap} >
        <Inner gap={gap}/>
      </BottomBorderedFlex>
    )
  }
  return (
    <GapFlex gap={gap}>
      <Inner gap={gap} />
    </GapFlex>
  )

}

export default FormInput;