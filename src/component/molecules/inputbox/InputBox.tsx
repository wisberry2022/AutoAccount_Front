import {ChangeEventHandler} from "react";

import { RegisterInput } from "../../atoms/inputs/StyledInput";
import {inputMapper} from "../../../viewdata/configs/Config";
import { VerticalFlex } from "../../atoms/div/StyledFlex";

type propType = {
  modalType: string;
  handler: ChangeEventHandler<HTMLInputElement>;
};

const InputBox: React.FC<propType> = ({ modalType, handler }) => {
  const keys:string[] = Object.keys(inputMapper).filter(key => inputMapper[key][modalType]);

  return (
    <VerticalFlex style={{ marginBottom: "1.5rem" }}>
      {keys.map((key,idx) => {
        return (
          <RegisterInput
            key={idx}
            size={{width:"30"}}
            onChange={handler}
            {...inputMapper[key][modalType]}
          />
        )
      })}
    </VerticalFlex>
  );
};

export default InputBox;
