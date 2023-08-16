import { InputOption, LabelOption } from "./StyleTypes";

type dataId = {
  id: number;
};

export type Debit = {
  id: string,
  withdrawal: string,
  deposit: string,
  name: string,
  amount: number,
  debitDate: string,
  date?: Date
};

export type LabelInputPair = dataId & {
  id: number;
  label: LabelOption;
  input: InputOption;
}

export type AccountData = {
  id: number;
  name: string;
  serial: string;
}

export type DetailData = dataId & {
  main: string;
  sub: any;
}

export type ListData = {
  id: string;
  name: string;
  serial: string;
  balance: number;
  owner: string;
}

export type Detail = ListData & {
  debitCount: number;
}