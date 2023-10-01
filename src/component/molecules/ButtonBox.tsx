import { ButtonSet, FlexSet } from "../../classes/types/StyleTypes";
import { useFindCurrentInputState } from "../../hooks/recoil/useFindCurrentInputState";
import useFindCurrentModal from "../../hooks/recoil/useFindCurrentModal";
import useModalState from "../../hooks/recoil/useModalState";
import { CustomColoringButton } from "../atoms/buttons/StyledButton";
import { HorizonFlex } from "../atoms/div/StyledFlex";
import {
  useDeleteAjax,
  usePostAjax,
  usePutAjax,
} from "../../hooks/ajax/useAjax";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserClickedAccount } from "../../recoil/state/AccountState";
import { InfoState } from "../../classes/types/RecoilStateTypes";
import { DebitState } from "../../recoil/state/DebitState";
import { FlagState, renderState } from "../../recoil/state/FlagState";

type PropType = {
  names: Array<ButtonSet>;
  gap: number;
};

type ReturnRequestData = (data: InfoState) => InfoState;

const ButtonBox: React.FC<PropType> = ({ names, gap }: PropType) => {
  const [_, setState] = useModalState("isAccountAssign");
  const modal: string = useFindCurrentModal();
  const clicked = useRecoilValue(UserClickedAccount);
  const debitState = useRecoilValue(DebitState);
  const modifyFlag = useRecoilValue(FlagState);
  const [data, setData] = useFindCurrentInputState();
  const doPost = usePostAjax();
  const doPut = usePutAjax();
  const doDelete = useDeleteAjax();

  const option: FlexSet = {
    justifyContent: "center",
    gap: gap.toString(),
  };

  const convertToAssignRequestData: ReturnRequestData = (data) => {
    if (modal === "isDebitAssign") {
      let requestData: InfoState = {
        withdrawal: clicked.serial as string,
        deposit: data.deposit,
        name: data.name,
        amount: Number.parseFloat(data.amount as string),
        date: new Date(),
      };
      return requestData;
    }
    return data;
  };

  const convertToModifyRequestData: ReturnRequestData = (data) => {
    console.log("convertToModifyRequestData: ", data);
    if (modal === "isDebitUpdate") {
      let requestData: InfoState = {
        ...data,
        withdrawal: clicked.id as number,
        beforeDeposit: debitState.serial as string,
      };
      return requestData;
    }
    return {
      ...data,
      before: modifyFlag.clicked as string,
    };
  };

  return (
    <HorizonFlex option={option}>
      {names.map((val, idx) => {
        return (
          <CustomColoringButton
            onClick={async (e) => {
              e.stopPropagation();
              if (val.type === "ASSIGN") {
                let request: InfoState = convertToAssignRequestData(data);
                await doPost(request);
                setState(modal);
              }
              if (val.type === "MODIFY") {
                let request: InfoState = convertToModifyRequestData(data);
                await doPut(request);
                setState(modal);
              }
              if (["CANCEL", "OKAY"].includes(val.type)) {
                setState(modal);
              }
              if (val.type === "REMOVE") {
                await doDelete({
                  id:
                    modal === "isAccountDelete" ? modifyFlag.id : debitState.id,
                });
                setState(modal);
              }
              setData({});
            }}
            key={idx}
            color={val.color}
          >
            {val.name}
          </CustomColoringButton>
        );
      })}
    </HorizonFlex>
  );
};

export default ButtonBox;
