import { Account } from "../classes/types/DataTypes";

type FindFuncType = (list: Account[], id: number) => Account;

export const findById: FindFuncType = (list: Account[], id: number) => {
  return id
    ? list.filter((account) => Number.parseInt(account.id) === id)[0]
    : list[0];
};
