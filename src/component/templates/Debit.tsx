import { styled } from "styled-components";
import { VerticalFlex } from "../atoms/div/StyledFlex";
import DebitArea from "../orgarnism/DebitArea";
import DebitAssign from "../orgarnism/DebitAssign";
import DescribeBox from "../molecules/DescribeBox";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { UserClickedAccount } from "../../recoil/state/AccountState";
import axios from "axios";
import useAjaxState from "../../hooks/ajax/useAjaxState";
import useModalState from "../../hooks/recoil/useModalState";
import ModalFrame from "../../pages/modal/ModalFrame";
import DebitDetail from "../orgarnism/DebitDetail";
import ExpectExpense from "../orgarnism/ExpectExpense";

const VerticlaSizingFlex = styled(VerticalFlex)`
	height: 64.2vh;
`;

const Debit:React.FC = () => {
	const [DEBIT_DETAIL, _] = useModalState('isDebitDetail');

	return (
		<VerticlaSizingFlex option={{justifyContent:"flex-start"}}>
			<DebitAssign />
			<DebitArea />
			<ExpectExpense />
			{
				DEBIT_DETAIL && 
				<ModalFrame title="자동이체 상세보기" close={true} target={<DebitDetail />}/>
			}
		</VerticlaSizingFlex>		
	)
}

export default Debit;