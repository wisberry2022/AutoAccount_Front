import {ChangeEventHandler} from "react";

import {modifyInputMapper} from "../../../viewdata/configs/Config";
import { RegisterInput } from "../../atoms/inputs/StyledInput";
import { VerticalFlex } from "../../atoms/div/StyledFlex";
import {objType} from "../../../types/DataTypes";

type propType = {
  defaultValues: objType;
  modalType: string;
  handler: ChangeEventHandler<HTMLInputElement>
};

const ModifyInputBox: React.FC<propType> = ({ defaultValues, modalType, handler }) => {
  const keys:string[] = Object.keys(modifyInputMapper[modalType]);
  return <VerticalFlex style={{ marginBottom: "1.5rem" }}>
    {keys.map((key:string, idx:number) => {
      return (
        <RegisterInput
          key={idx}
          defaultValue={defaultValues[key]}
          onChange={handler}
          size={{width:"30"}}
          {...modifyInputMapper[modalType][key]}
        />
      )
    })}
  </VerticalFlex>
};

export default ModifyInputBox;
