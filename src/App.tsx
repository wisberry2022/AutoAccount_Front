import React from 'react';
import { Debit } from './classes/types/DataTypes';
import { styled } from 'styled-components';
import { ButtonSet, FontSet, InputOption, LabelOption } from './classes/types/StyleTypes';
import { GapFlex, VerticalFlex } from './component/atoms/div/StyledFlex';
import Title from './component/atoms/title/Title';
import LabelInput from './component/molecules/LabelInput';
import DebitBundle from './component/molecules/DebitBundle';
import SingleInputForm from './component/molecules/SingleInputForm';
import MyAccountBundle from './component/molecules/MyAccountBundle';
import ButtonBox from './component/molecules/ButtonBox';
import MainTitle from './component/orgarnism/MainTitle';
import AssignArea from './component/orgarnism/AssignArea';
import MyAccounts from './component/orgarnism/MyAccounts';

const CenterVerticalFlex = styled(VerticalFlex)`
  outline: 1px solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
`;

const App = ():React.ReactElement => {
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

  const serialLabel:LabelOption = {
    htmlFor: "account-serial",
    label: "계좌번호"
  };

  const serialOption:InputOption = {
    id: "account-serial",
    type: "text",
    name: "serial",
    placeholder: "관리할 계좌번호를 입력하세요"
  };

  const nameLabel:LabelOption = {
    htmlFor: "account-name",
    label: "계좌명"
  };

  const nameOption:InputOption = {
    id: "account-name",
    type: "text",
    name: "name",
    placeholder: "관리할 계좌별칭을 입력하세요"
  }

  const ownerLabel:LabelOption = {
    htmlFor: "account-owner",
    label: "계좌주"
  };

  const ownerOption:InputOption = {
    id: "account-owner",
    type: "text",
    name: "owner",
    placeholder: "계좌주 이름을 입력하세요"
  }

  const buttons:Array<ButtonSet> = [
    {name:"등록", color:{bgColor:"#000", color:"#fff"}},
    {name:"수정", color:{bgColor:"#ddd", color:"#f2f2f2"}},
    {name:"취소", color:{bgColor:"#fff", color:"#111"}}
  ]

  return (
    <div className="App">
      <CenterVerticalFlex>
        <MainTitle />
        <GapFlex gap={10}>
          <VerticalFlex>
            <AssignArea />
            <MyAccounts />
            {/* <VerticalFlex>
              <MyAccountBundle serial="1122008177401" name="일반통장"/>
            </VerticalFlex> */}
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