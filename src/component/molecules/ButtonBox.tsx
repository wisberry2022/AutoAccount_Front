import { ButtonSet, FlexSet } from "../../classes/types/StyleTypes";
import useFindCurrentModal from "../../hooks/recoil/useFindCurrentModal";
import useModalState from "../../hooks/recoil/useModalState";
import Button from "../atoms/buttons/Button";
import { CustomColoringButton } from "../atoms/buttons/StyledButton";
import { HorizonFlex } from "../atoms/div/StyledFlex";

type PropType = {
  names: Array<ButtonSet>,
  gap: number
};

const ButtonBox:React.FC<PropType> = ({names, gap}:PropType) => {
  const [_, setState] = useModalState('isAccountAssign');
  const modal = useFindCurrentModal();

  const option:FlexSet = {
   justifyContent: "center",
   gap: gap.toString() 
  }
  
  return (
    <HorizonFlex option={option}>
      {names.map((val,idx) => {
        return (
          <CustomColoringButton onClick={
            () => {
              if(idx === names.length-1) {
                setState(modal);
              }
            }
          } key={idx} color={val.color}>{val.name}</CustomColoringButton>
        )
      })}
    </HorizonFlex>
  )
}

export default ButtonBox;