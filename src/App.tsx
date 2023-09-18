import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import { GapFlex, HorizonFlex, VerticalFlex } from './component/atoms/div/StyledFlex';
import MainTitle from './component/orgarnism/MainTitle';
import MyAccount from './component/templates/MyAccount';
import Debit from './component/templates/Debit';
import { SwitchingButton } from './component/atoms/buttons/StyledButton';
import { Circle } from './component/atoms/DecoratingAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ThemeState } from './recoil/state/ThemeState';
import { ThemeType } from './classes/types/RecoilStateTypes';
import ThemeContainer from './component/atoms/div/Container';
import ThemeSelector from './recoil/selector/ThemeSelector';

const CenterVerticalFlex = styled(VerticalFlex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem 0;
  width: 90vw;
  height: 75vh;
`;

const FixedSizingGapFlex = styled(GapFlex)`
  align-items: flex-start;
  height: 70vh;
`;

const App = ():React.ReactElement => {
  const [theme, setTheme] = useRecoilState(ThemeState);
  const themeObj = useRecoilValue(ThemeSelector);
  const [click, setClick] = useState(false);

  return (
    <ThemeContainer className="App" theme={themeObj}>
      <CenterVerticalFlex>
        <HorizonFlex
          style={{
            width: "70%"
          }}
          option={{ 
            justifyContent:"flex-end"
          }}
        >
          <SwitchingButton 
            theme={themeObj}
            onClick={() => {
              setClick(prev => !prev);
              setTheme(prev => ({
                "mode":prev.mode === "BRIGHT" ? "DARK" : "BRIGHT"
              }))
            }}
          >
            <Circle isclick={click}/>
          </SwitchingButton>  
        </HorizonFlex>       
        <MainTitle />
        <FixedSizingGapFlex gap={5}>
          <MyAccount />
          <Debit/>
        </FixedSizingGapFlex>
      </CenterVerticalFlex>
    </ThemeContainer>
  );
}

export default App;