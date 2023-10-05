import { HorizonFlex } from "../../atoms/div/StyledFlex";
import Button from "../../atoms/buttons/Button";
import { VoidtoVoid } from "../../../classes/func/FuncTypes";

type propType = {
  register: VoidtoVoid;
  cancel: VoidtoVoid;
};

const BtnBox: React.FC<propType> = ({ register, cancel }) => {
  return (
    <HorizonFlex>
      <Button color="BW" onClick={register}>
        등록
      </Button>
      <Button color="WB" onClick={cancel}>
        취소
      </Button>
    </HorizonFlex>
  );
};

export default BtnBox;
