import {ChangeEventHandler} from "react";

import { RegisterInput } from "../../atoms/inputs/StyledInput";
import {inputMapper} from "../../../viewdata/configs/Config";
import { VerticalFlex } from "../../atoms/div/StyledFlex";
import {useRecoilValue} from "recoil";
import {themeSelector} from "../../../recoil/selectors/ThemeSelector";

type propType = {
  modalType: string;
  handler: ChangeEventHandler<HTMLInputElement>;
};

const InputBox: React.FC<propType> = ({ modalType, handler }) => {
  const keys:string[] = Object.keys(inputMapper).filter(key => inputMapper[key][modalType]);
  const theme = useRecoilValue(themeSelector);

  return (
    <VerticalFlex style={{ marginBottom: "1.5rem" }}>
      {keys.map((key,idx) => {
        return (
          <RegisterInput
            theme={theme}
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
