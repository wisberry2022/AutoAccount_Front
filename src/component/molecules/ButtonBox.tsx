import { ButtonSet, FlexSet } from "../../classes/types/StyleTypes";
import Button from "../atoms/buttons/Button";
import { CustomColoringButton } from "../atoms/buttons/StyledButton";
import { HorizonFlex } from "../atoms/div/StyledFlex";

type PropType = {
  names: Array<ButtonSet>,
  gap: number
};

const ButtonBox:React.FC<PropType> = ({names, gap}:PropType) => {
  
  const option:FlexSet = {
   justifyContent: "center",
   gap: gap.toString() 
  }
  
  return (
    <HorizonFlex option={option}>
      {names.map((val,idx) => {
        return (
          <CustomColoringButton key={idx} color={val.color}>{val.name}</CustomColoringButton>
        )
      })}
    </HorizonFlex>
  )
}

export default ButtonBox;