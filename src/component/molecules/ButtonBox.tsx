import { ButtonSet, FlexSet } from "../../classes/types/StyleTypes";
import { useFindCurrentInputState } from "../../hooks/recoil/useFindCurrentInputState";
import useFindCurrentModal from "../../hooks/recoil/useFindCurrentModal";
import useModalState from "../../hooks/recoil/useModalState";
import { CustomColoringButton } from "../atoms/buttons/StyledButton";
import { HorizonFlex } from "../atoms/div/StyledFlex";
import { useDeleteAjax, usePostAjax, usePutAjax } from "../../hooks/ajax/useAjax";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { UserClickedAccount } from "../../recoil/state/AccountState";
import { AssignStateType, InfoState } from "../../classes/types/RecoilStateTypes";
import { DebitState } from "../../recoil/state/DebitState";

type PropType = {
  names: Array<ButtonSet>,
  gap: number
};

type Flag = {
  [key in string]: string
};

const ButtonBox:React.FC<PropType> = ({names, gap}:PropType) => {
  const [_, setState] = useModalState('isAccountAssign');
  const modal:string = useFindCurrentModal();
  const clicked = useRecoilValue(UserClickedAccount);
  const [data, setData] = useFindCurrentInputState();
  const doPost = usePostAjax();
  const doPut = usePutAjax();
  const doDelete = useDeleteAjax();

  const setDebit = useSetRecoilState(DebitState);

  const option:FlexSet = {
   justifyContent: "center",
   gap: gap.toString() 
  }
  
  type ReturnRequestData = (data:InfoState) => InfoState;

  const convertToDebitAssignRequestData:ReturnRequestData = (data) => {
    if(modal === 'isDebitAssign') {
      let requestData:InfoState = {
        withdrawal: clicked.serial as string,
        deposit: data.serial,
        name: data.name,
        amount: Number.parseFloat(data.balance as string),
        date: new Date()
      };
      return requestData;
    }
    return data;
  }

  return (
    <HorizonFlex option={option}>
      {names.map((val,idx) => {
        return (
          <CustomColoringButton onClick={
            async (e) => {
              e.stopPropagation();
              if(val.type === "ASSIGN") {
                let request:InfoState = convertToDebitAssignRequestData(data);
                await doPost(request);
                modal === "isDebitAssign" && setDebit(prev => ({state: !prev.state}));   
                setState(modal);
              }
              if(val.type === "MODIFY") {
                await doPut({"before":clicked.clicked}, data);
                setState(modal);
              }
              if(["CANCEL", "OKAY"].includes(val.type)) {
                setState(modal);
              }
              if(val.type === "REMOVE") {
                await doDelete({
                  "id" : clicked.id
                });
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