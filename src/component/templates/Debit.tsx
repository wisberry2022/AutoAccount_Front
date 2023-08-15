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

const VerticlaSizingFlex = styled(VerticalFlex)`
	height: 64.2vh;
`;

const Debit:React.FC = () => {
	const clicked = useRecoilValue(UserClickedAccount);
	const [expense, setExpense] = useState<number>(0); 
	const debitAssign = useAjaxState('isDebitAssign');
	const debitUpdate = useAjaxState('isDebitUpdate');
	const debitDelete = useAjaxState('isDebitDelete');

	useEffect(() => {
		axios.get(`mysalary/api/v1/account/amount/${clicked.id}`)
			.then(res => setExpense(res.data.result));
	}, [clicked, debitAssign, debitUpdate, debitDelete]);

	return (
		<VerticlaSizingFlex option={{justifyContent:"flex-start"}}>
			<DebitAssign />
			<DebitArea />
			<DescribeBox border=".1rem solid #aaa" main="총 지출금액" sub={`${typeof expense === "number" ? expense : 0}원`} gap="3"  />
		</VerticlaSizingFlex>		
	)
}

export default Debit;