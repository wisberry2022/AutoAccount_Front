import {FC, useContext, useEffect} from "react";
import {VerticalModalFlex} from "../../atoms/div/StyledFlex";
import Emphasize from "../../atoms/Text/Emphasize";
import {useRecoilValue} from "recoil";
import {themeSelector} from "../../../recoil/selectors/ThemeSelector";

type ExceptionAlertProps = {
	message: string;
}

const ExceptionAlert:FC<ExceptionAlertProps> = ({message}) => {
	const theme = useRecoilValue(themeSelector);

	return (
		<VerticalModalFlex theme={theme} option={{gap: "1.8"}}>
			<Emphasize theme={theme} font={{fontSize:"1.5"}}>
				{message}
			</Emphasize>
		</VerticalModalFlex>
	)
}

export default ExceptionAlert;