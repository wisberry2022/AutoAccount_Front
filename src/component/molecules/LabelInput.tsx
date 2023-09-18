import { GapFlex } from "../atoms/div/StyledFlex";
import Label from "../atoms/labels/Label";
import { FontSet, InputOption, LabelOption, Scale } from "../../classes/types/StyleTypes";
import Emphasize from "../atoms/Text/Emphasize";
import { styled } from "styled-components";
import { CustomSizingInput } from "../atoms/inputs/StyledInput";
import { useFindCurrentInputStateSetter } from "../../hooks/recoil/useFindCurrentInputState";
import useFindCurrentModal from "../../hooks/recoil/useFindCurrentModal";
import { useRecoilValue } from "recoil";
import { DebitState } from "../../recoil/state/DebitState";
import { ClickedAccount } from "../../classes/types/RecoilStateTypes";
import { useEffect, useState } from "react";
import { UserClickedAccount } from './../../recoil/state/AccountState';

const RegularSizeEmphasize = styled(Emphasize)`
  width: 6rem;
`;

type PropType = {
  label: LabelOption
  input: InputOption
  font?: FontSet
};

type FuncType = (value:any, flag?:boolean) => void;

const LabelInput:React.FC<PropType> = ({label, input}:PropType) => {
  const setState = useFindCurrentInputStateSetter(input.name);
  const modal:string = useFindCurrentModal();
  const debitStates = useRecoilValue(DebitState);

  const defaultToState:FuncType = (value, isConvertString=false) => {
    if(isConvertString) {
      console.log('err: ', value);
      setState(value.toString() as string);
      return;
    }
    setState(value as string);
  }

  const getDefaultValue = (input:InputOption, value:ClickedAccount) => {
    if(input.name === "amount") {
      defaultToState(value.amount, modal !== "isDebitAssign" ? true : false)
      return value.amount;
    }
    if(input.name === "deposit") {
      defaultToState(value.serial);
      return value.serial;
    }
    if(input.name === "name") {
      defaultToState(value.name);
      return value.name;
    }
  }

  const defaultValue = getDefaultValue(input, debitStates);

  const font:FontSet = {
    fontSize: "1.2"
  }
  
  const size:Scale = {
    padding: ".5rem 1rem",
    width: "15"
  };

  return (
    <GapFlex gap={5}>
      <RegularSizeEmphasize>
        <Label font={font} htmlFor={label.htmlFor}>{label.label}</Label>
      </RegularSizeEmphasize>
      <CustomSizingInput defaultValue={modal.includes("Update") ? defaultValue : undefined} onChange={(e) => setState(e.target.value)} size={size} {...input} />
    </GapFlex>
  )
}

export default LabelInput;