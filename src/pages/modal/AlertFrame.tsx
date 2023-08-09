import { ButtonSet } from "../../classes/types/StyleTypes";
import Paragraph from "../../component/atoms/Text/Paragraph";
import { VerticalModalFlex } from "../../component/atoms/div/StyledFlex";
import ButtonBox from "../../component/molecules/ButtonBox";

type PropType = {
	title: string;
}

const AlertFrame:React.FC<PropType> = ({title}:PropType) => {

	const buttons:ButtonSet[] = [
		{color:{bgColor: "#000", color: "#fff"}, name:"확인", type:"REMOVE"},
		{color:{bgColor: "#fff", color: "#000"}, name:"취소", type:"CANCEL"}
	];

	return (
		<VerticalModalFlex>
			<Paragraph font={{fontWeight:"600", fontSize:"1.6"}}>{title}</Paragraph>
			<ButtonBox names={buttons} gap={.5} />
		</VerticalModalFlex>
	)
}

export default AlertFrame;