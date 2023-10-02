import React from "react";
import { styled } from "styled-components";

import { HorizonFlex, ViewCenterFlex } from "./component/atoms/div/StyledFlex";
import PageTitle from "./component/organisms/title/PageTitle";
import MyAccount from "./component/templates/MyAccount";
import Debit from "./component/templates/Debits";

const VerticalCenterFlex = styled(ViewCenterFlex)`
  flex-direction: column;
`;

const App = (): React.ReactElement => {
  return (
    <VerticalCenterFlex>
      <PageTitle title="통장관리 프로그램 v1.0.0" />
      <HorizonFlex option={{ gap: "2.5" }}>
        <MyAccount />
        <Debit />
      </HorizonFlex>
    </VerticalCenterFlex>
  );
};

export default App;
