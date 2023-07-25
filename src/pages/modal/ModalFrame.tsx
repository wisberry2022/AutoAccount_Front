import { VerticalModalFlex } from "../../component/atoms/div/StyledFlex"
import { ModalTitle } from "../../component/atoms/title/TitleStyle"

type PropType = {
    title?: string;
    target: React.ReactElement;
}

const ModalFrame:React.FC<PropType> = ({title, target}:PropType) => {
    return (
      <VerticalModalFlex>
        <ModalTitle title={title ? title : "수정하기"} />
        {target}
      </VerticalModalFlex>
    )
}

export default ModalFrame;