import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useContext } from "react";

import { accountState } from "../recoil/states/ClickedState";
import { Account } from "../classes/types/DataTypes";
import { findById } from "../utils/FuncSet";
import { DataContext } from "../App";

export const useGetAccount = () => {
  const current = useRecoilValue(accountState);
  const accounts = useContext(DataContext);
  const [account, setData] = useState<Account>();

  useEffect(() => {
    if (accounts.length) {
      current.id
        ? setData(findById(accounts, current.id))
        : setData(accounts[0]);
    }
  }, [accounts, current]);

  return account;
};
