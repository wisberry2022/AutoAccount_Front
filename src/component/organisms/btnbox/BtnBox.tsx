import { useModal } from "../../../hooks/modal/useModal";
import { HorizonFlex } from "../../atoms/div/StyledFlex";
import Button from "../../atoms/buttons/Button";

type propType = {
  modalType: string;
};

const BtnBox: React.FC<propType> = ({ modalType }) => {
  const toggleModal = useModal(modalType);

  const register = (e: any) => {
    toggleModal(e);
  };

  const cancel = (e: any) => {
    toggleModal(e);
  };

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
