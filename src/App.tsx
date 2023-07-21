import React from 'react';
import { Debit } from './classes/types/DataTypes';
import { styled } from 'styled-components';
import { InputOption } from './classes/types/StyleTypes';
import { GapFlex, VerticalFlex } from './component/atoms/div/StyledFlex';
import Title from './component/atoms/title/Title';
import FormInput from './component/molecules/FormInput';
import DebitBundle from './component/molecules/DebitBundle';
import MyAccountBundle from './component/molecules/MyAccountBundle';

const CenterVerticalFlex = styled(VerticalFlex)`
  outline: 1px solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
`;

const App = ():React.ReactElement => {
  const serialOption:InputOption = {
    id: "account-serial",
    type: "text",
    name: "serial",
    placeholder: "관리할 계좌번호를 입력하세요"
  };

  const nameOption:InputOption = {
    id: "account-name",
    type: "text",
    name: "name",
    placeholder: "관리할 계좌별칭을 입력하세요"
  }

  const ownerOption:InputOption = {
    id: "account-owner",
    type: "text",
    name: "owner",
    placeholder: "계좌주 이름을 입력하세요"
  }

  const normalDebit:Debit = {
    deposit: "3028558834191",
    name: "일반통장",
    amount: 300000,
    debitDate: new Date().toLocaleDateString()
  };

  const installmentDebit:Debit = {
    deposit: "1038291045123",
    name: "적금통장",
    amount: 500000,
    debitDate: new Date().toLocaleDateString()
  };

  return (
    <div className="App">
      <CenterVerticalFlex>
        <Title>통장관리 프로그램</Title>
        <GapFlex gap={10}>
          <VerticalFlex>
            <FormInput option={serialOption} gap={10} border={false} />
            <FormInput option={nameOption} gap={10} border={false} />
            <FormInput option={ownerOption} gap={10} border={false} />
            <VerticalFlex>
              <MyAccountBundle serial="1122008177401" name="일반통장"/>
            </VerticalFlex>
          </VerticalFlex>
          <VerticalFlex>
            <DebitBundle data={normalDebit}/>
            <DebitBundle data={installmentDebit}/>
          </VerticalFlex>
        </GapFlex>
      </CenterVerticalFlex>
    </div>
  );
}

export default App;