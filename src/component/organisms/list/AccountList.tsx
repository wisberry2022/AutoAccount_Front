import {useEffect, useState} from "react";

import {Account as DataType, starSet} from "../../../types/DataTypes";
import { NoneScrollBarFlex } from "../../atoms/div/StyledFlex";
import Account from "../Account";
import {ParamToVoid, VoidtoVoid} from "../../../classes/func/FuncTypes";
import {useRecoilValue} from "recoil";
import {accountState} from "../../../recoil/states/ClickedState";
import {getId} from "../../../utils/FuncSet";

type propType = {
  accounts: DataType[];
};

const AccountList: React.FC<propType> = ({ accounts}) => {

  const findId = (id:number):number  => {
    return getId(accounts, id);
  }

  return (
    <NoneScrollBarFlex height={100} option={{ gap: ".7" }}>
      { accounts.length &&
        accounts.map((account, idx) => {
          return <Account key={account.id} data={account} findId={findId} />;
      })}
    </NoneScrollBarFlex>
  );
};

export default AccountList;
