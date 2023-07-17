import React from 'react';
import Title from './component/atoms/Title';
import Button from './component/atoms/Button';
import { styled } from "styled-components";

const CenterStyled = styled(Title)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const App = ():React.ReactElement => {

  return (
    <div className="App">
      <CenterStyled>
        통장관리 프로그램 v0.1.0
      </CenterStyled>
      <Button label="확인" />
        
    </div>
  );
}

export default App;
