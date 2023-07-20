import React from 'react';
import { styled } from 'styled-components';
import { VerticalFlex } from './component/atoms/div/StyledFlex';
import FormInput from './component/molecules/FormInput';
import Title from './component/atoms/title/Title';
import Flex from './component/atoms/div/Flex';
import Bundle from './component/molecules/Bundle';

const CenterVerticalFlex = styled(VerticalFlex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const App = ():React.ReactElement => {
  return (
    <div className="App">
      <CenterVerticalFlex>
        <Title>통장관리 프로그램</Title>
        <VerticalFlex>
          <FormInput gap={10} border={true} />
          <VerticalFlex>
            <Bundle serial="1122008177401" name="일반통장"/>
          </VerticalFlex>
        </VerticalFlex>
      </CenterVerticalFlex>
    </div>
  );
}

export default App;