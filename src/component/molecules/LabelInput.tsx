import { GapFlex } from "../atoms/div/StyledFlex";
import Label from "../atoms/labels/Label";
import { FontSet, InputOption, LabelOption, Scale } from "../../classes/types/StyleTypes";
import Emphasize from "../atoms/Text/Emphasize";
import { styled } from "styled-components";
import { CustomSizingInput } from "../atoms/inputs/StyledInput";
import { useFindCurrentInputState, useFindCurrentInputStateSetter } from "../../hooks/recoil/useFindCurrentInputState";

const RegularSizeEmphasize = styled(Emphasize)`
  width: 6rem;
`;

type PropType = {
  label: LabelOption
  input: InputOption
  font?: FontSet
};

const LabelInput:React.FC<PropType> = ({label, input}:PropType) => {
  const setState = useFindCurrentInputStateSetter(input.name);

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
      <CustomSizingInput onChange={(e) => setState(e.target.value)} size={size} {...input} />
    </GapFlex>
  )
}

export default LabelInput;