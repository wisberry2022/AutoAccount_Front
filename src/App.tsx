import React, { createContext } from "react";
import { styled } from "styled-components";

import { HorizonFlex, VerticalFlex, ViewCenterFlex } from "./component/atoms/div/StyledFlex";
import {themeSelector} from "./recoil/selectors/ThemeSelector";
import PageTitle from "./component/organisms/title/PageTitle";
import { useGetAccount } from "./hooks/axios/useGetAccount";
import MyAccount from "./component/templates/MyAccount";
import Debit from "./component/templates/Debits";
import { Account } from "./types/DataTypes";
import {useRecoilValue} from "recoil";

const VerticalCenterFlex = styled(ViewCenterFlex)`
  flex-direction: column;
`;

export const DataContext = createContext<Account[]>([]);

const App = (): React.ReactElement => {
  const accounts: Account[] = useGetAccount();
  const theme = useRecoilValue(themeSelector);

  return (
    <DataContext.Provider value={accounts}>
      <VerticalFlex theme={theme} style={{height:"100vh"}}>
      <VerticalCenterFlex theme={theme}>
        <PageTitle title="통장관리 프로그램 v1.1.0" />
        <HorizonFlex option={{ gap: "2.5" }}>
          <MyAccount accounts={accounts}/>
          <Debit />
        </HorizonFlex>
      </VerticalCenterFlex>
      </VerticalFlex>
    </DataContext.Provider>
  );
};

export default App;
