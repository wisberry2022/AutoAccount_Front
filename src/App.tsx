import React, { createContext, useEffect } from "react";
import { styled } from "styled-components";

import { HorizonFlex, ViewCenterFlex } from "./component/atoms/div/StyledFlex";
import PageTitle from "./component/organisms/title/PageTitle";
import MyAccount from "./component/templates/MyAccount";
import Debit from "./component/templates/Debits";
import { Account } from "./types/DataTypes";
import { useGetAccount } from "./hooks/axios/useGetAccount";

const VerticalCenterFlex = styled(ViewCenterFlex)`
  flex-direction: column;
`;

export const DataContext = createContext<Account[]>([]);

const App = (): React.ReactElement => {
  const accounts: Account[] = useGetAccount();


  return (
    <DataContext.Provider value={accounts}>
      <VerticalCenterFlex>
        <PageTitle title="통장관리 프로그램 v1.0.0" />
        <HorizonFlex option={{ gap: "2.5" }}>
          <MyAccount  accounts={accounts}/>
          <Debit />
        </HorizonFlex>
      </VerticalCenterFlex>
    </DataContext.Provider>
  );
};

export default App;
