import { Account } from "../classes/types/DataTypes";

export const findById = (list: Account[], id: number) => {
  return id
    ? list.filter((account) => Number.parseInt(account.id) === id)[0]
    : list[0];
};
