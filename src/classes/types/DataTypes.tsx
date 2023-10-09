import { InputOption, LabelOption } from "./StyleTypes";

type dataId = {
  id: number;
};

export type Debit = {
  id: string;
  withdrawal: string;
  deposit: string;
  name: string;
  amount: number;
  date?: Date;
};

export type LabelInputPair = dataId & {
  id: number;
  label: LabelOption;
  input: InputOption;
};

export type AccountData = {
  id: number;
  name: string;
  serial: string;
};

export type DetailData = dataId & {
  main: string;
  sub: any;
};

export type Account = {
  id: string;
  name: string;
  serial: string;
  balance: number;
  owner: string;
  debits: Debit[];
};

export type Detail = Account & {
  debitCount: number;
};

export type objType = {
  [key in string]: any;
};
