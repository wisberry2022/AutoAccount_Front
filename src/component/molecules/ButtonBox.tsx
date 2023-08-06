import { ButtonSet, FlexSet } from "../../classes/types/StyleTypes";
import { useFindCurrentInputState } from "../../hooks/recoil/useFindCurrentInputState";
import useFindCurrentModal from "../../hooks/recoil/useFindCurrentModal";
import useModalState from "../../hooks/recoil/useModalState";
import { CustomColoringButton } from "../atoms/buttons/StyledButton";
import { HorizonFlex } from "../atoms/div/StyledFlex";
import { usePostAjax, usePutAjax } from "../../hooks/ajax/useAjax";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { getInputState } from "../../recoil/state/InputState";
import { UserClickedAccount } from "../../recoil/state/AccountState";

type PropType = {
  names: Array<ButtonSet>,
  gap: number
};

const ButtonBox:React.FC<PropType> = ({names, gap}:PropType) => {
  const [_, setState] = useModalState('isAccountAssign');
  const modal = useFindCurrentModal();
  const clicked = useRecoilValue(UserClickedAccount);
  const [data, setData] = useFindCurrentInputState();
  const doPost = usePostAjax();
  const doPut = usePutAjax();

  const option:FlexSet = {
   justifyContent: "center",
   gap: gap.toString() 
  }
  
  return (
    <HorizonFlex option={option}>
      {names.map((val,idx) => {
        return (
          <CustomColoringButton onClick={
            async () => {
              if(val.type === "ASSIGN") {
                await doPost(data);
                setState(modal);
              }
              if(val.type === "MODIFY") {
                await doPut({"before":clicked.clicked}, data);
                setState(modal);
              }
              if(["CANCEL", "OKAY"].includes(val.type)) {
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