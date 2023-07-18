import React from 'react';
import { Scale } from './classes/types/StyleTypes';
import { CenterLayout } from './component/atoms/div/Flex';
import { CenterTitle } from './component/atoms/title/TitleStyle';
import { styled } from 'styled-components';

const CustomSizeTitle = styled(CenterTitle)`
  width: 50rem;
  text-align: center;
`

const App = ():React.ReactElement => {
  const size:Scale = {width: "15", height: "5"};
  return (
    <div className="App">
      <CenterLayout>
        <CustomSizeTitle>
          통장관리 프로그램 v0.1.0
        </CustomSizeTitle>
      </CenterLayout>
    </div>
  );
}

export default App;
