import { useContext } from "react";

import { DataContext } from "../App";
import { useState, useEffect } from "react";
import { Account, Debit } from "../classes/types/DataTypes";
import { useRecoilValue } from "recoil";
import { accountState } from "../recoil/states/ClickedState";

type _innerFunc = (origin: Account[], id: number) => Debit[];

const _filteredData: _innerFunc = (origin, id) => {
  return origin.filter((data) => Number.parseInt(data.id) === id)[0].debits;
};

export const useDebit = () => {
  const current = useRecoilValue(accountState);
  const accounts = useContext(DataContext);
  const [debits, setData] = useState<Debit[]>([]);

  useEffect(() => {
    if (accounts.length) {
      current.id
        ? setData(_filteredData(accounts, current.id))
        : setData(accounts[0].debits);
    }
  }, [accounts, current]);

  return debits;
};
