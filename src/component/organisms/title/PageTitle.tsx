import {useRecoilValue} from "recoil";
import {useState} from "react";

import {themeSelector} from "../../../recoil/selectors/ThemeSelector";
import {SwitchingButton} from "../../atoms/buttons/StyledButton";
import { HorizonFlex } from "../../atoms/div/StyledFlex";
import {Circle} from "../../atoms/DecoratingAtom";
import { Title } from "../../atoms/title/Title";

type propType = {
  title: string;
};

const PageTitle: React.FC<propType> = ({ title }) => {
  const [change, setChange] = useState<boolean>(true);
  const theme = useRecoilValue(themeSelector);

  const changingTheme = () => {
    setChange(prev => !prev);
  }

  return (
    <HorizonFlex>
      <Title theme={theme}>{title}</Title>
      <SwitchingButton theme={theme}  onClick={changingTheme} style={{position:"absolute", right: 0}}>
        <Circle isClick={change} />
      </SwitchingButton>
    </HorizonFlex>
  );
};

export default PageTitle;
