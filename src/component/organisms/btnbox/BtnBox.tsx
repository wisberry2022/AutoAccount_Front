import { HorizonFlex } from "../../atoms/div/StyledFlex";
import Button from "../../atoms/buttons/Button";
import { VoidtoVoid } from "../../../classes/func/FuncTypes";
import { MouseEventHandler } from "react";

type propType = {
  register: VoidtoVoid;
  cancel: VoidtoVoid;
};

const BtnBox: React.FC<propType> = ({ register, cancel }) => {
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
        등록
      </Button>
      <Button color="WB" onClick={cancelEvent}>
        취소
      </Button>
    </HorizonFlex>
  );
};

export default BtnBox;
