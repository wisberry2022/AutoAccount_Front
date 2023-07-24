import React from 'react';
import { styled } from 'styled-components';
import { GapFlex, VerticalFlex } from './component/atoms/div/StyledFlex';
import MainTitle from './component/orgarnism/MainTitle';
import MyAccount from './component/templates/MyAccount';
import Debit from './component/templates/Debit';

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
`

const App = ():React.ReactElement => {
  return (
    <div className="App">
      <CenterVerticalFlex>
        <MainTitle />
        <FixedSizingGapFlex gap={5}>
          <MyAccount />
          <Debit/>
        </FixedSizingGapFlex>
      </CenterVerticalFlex>
    </div>
  );
}

export default App;