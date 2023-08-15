import { styled } from "styled-components";
import { HorizonFlex } from "../atoms/div/StyledFlex";
import SectionHead from "../molecules/SectionHead";
import useModalState from "../../hooks/recoil/useModalState";
import ModalFrame from "../../pages/modal/ModalFrame";
import ModifyBox from "../molecules/ModifyBox";
import { LabelInputPair } from "../../classes/types/DataTypes";
import { useRecoilValue } from "recoil";
import { AssignModalButtons, getInputComponent } from "../../recoil/state/DefaultState";
import { ButtonSet } from "../../classes/types/StyleTypes";

const BorderingHorizonFlex = styled(HorizonFlex)`
	border: .1rem solid #aaa;
	padding: 1.5rem 1rem;
	width: 96%;
`

const DebitAssign:React.FC = () => {
	const [DEBIT_ASSIGN, _] = useModalState('isDebitAssign');

	const assignData:LabelInputPair[] = [
		// useRecoilValue(getInputComponent('serial')),
		useRecoilValue(getInputComponent('deposit')),
		useRecoilValue(getInputComponent('name')),
		useRecoilValue(getInputComponent('amount')),
		useRecoilValue(getInputComponent('owner')),
		useRecoilValue(getInputComponent('date'))
	]

	const buttons:ButtonSet[] = useRecoilValue(AssignModalButtons);

	return (
	<BorderingHorizonFlex option={{justifyContent:"center", gap:"15"}}>
		<SectionHead assignType="isDebitAssign" title="자동이체 등록하기" btn="계좌 등록하기" />
		{
			DEBIT_ASSIGN &&
			<ModalFrame title="자동이체 등록하기" target={<ModifyBox dataArr={assignData} buttonArr={buttons} />} />
		}
	</BorderingHorizonFlex>
	)
}

export default DebitAssign;