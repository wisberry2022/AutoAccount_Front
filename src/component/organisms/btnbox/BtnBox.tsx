import { HorizonFlex } from "../../atoms/div/StyledFlex";
import Button from "../../atoms/buttons/Button";
import { VoidtoVoid } from "../../../classes/func/FuncTypes";
import { MouseEventHandler } from "react";
import {btnMaps} from "../../../viewdata/configs/Config";

type propType = {
  register: VoidtoVoid;
  act: string;
  cancel: VoidtoVoid;
};

const BtnBox: React.FC<propType> = (props) => {
  const { register,act,  cancel } = props;

  const registerEvent: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    register();
  };

  const cancelEvent: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cancel();
  };

  return (
    <HorizonFlex>
      <Button color="BW" onClick={registerEvent}>
        {btnMaps[act].left}
      </Button>
      <Button color="WB" onClick={cancelEvent}>
        {btnMaps[act].right}
      </Button>
    </HorizonFlex>
  );
};

export default BtnBox;
