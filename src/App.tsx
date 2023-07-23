import React from 'react';
import { Debit } from './classes/types/DataTypes';
import { styled } from 'styled-components';
import { ButtonSet, InputOption, LabelOption } from './classes/types/StyleTypes';
import { GapFlex, VerticalFlex } from './component/atoms/div/StyledFlex';
import DebitBundle from './component/molecules/DebitBundle';
import MainTitle from './component/orgarnism/MainTitle';
import AssignArea from './component/orgarnism/AssignArea';
import MyAccounts from './component/orgarnism/MyAccounts';
import AccountDetail from './component/orgarnism/AccountsDetail';
import DebitArea from './component/orgarnism/DebitArea';

const CenterVerticalFlex = styled(VerticalFlex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem 0;
  width: 90vw;
  height: 75vh;
`;

const App = ():React.ReactElement => {
  return (
    <div className="App">
      <CenterVerticalFlex>
        <MainTitle />
        <GapFlex gap={5}>
          <VerticalFlex>
            <AssignArea />
            <MyAccounts />
            <AccountDetail />
          </VerticalFlex>
          <VerticalFlex>
            <DebitArea />
          </VerticalFlex>
        </GapFlex>
      </CenterVerticalFlex>
    </div>
  );
}

export default App;