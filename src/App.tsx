import React from 'react';
import { CenterLayout } from './component/atoms/div/StyledFlex';
import { CenterTitle } from './component/atoms/title/TitleStyle';
import { styled } from 'styled-components';
import { HorizonFlex } from './component/atoms/div/StyledFlex';
import Button from './component/atoms/buttons/Button';
import { CustomColoringButton } from './component/atoms/buttons/StyledButton';
import { ColorSet } from './classes/types/StyleTypes';

const CustomSizeTitle = styled(CenterTitle)`
  width: 50rem;
  text-align: center;
`

const App = ():React.ReactElement => {


  return (
    <div className="App">
      <CenterLayout>
        <CustomSizeTitle>
          통장관리 프로그램 v0.1.0
        </CustomSizeTitle>
        <HorizonFlex>
        </HorizonFlex>
      </CenterLayout>
    </div>
  );
}

export default App;
