import { InputOption, LabelOption } from "./StyleTypes";

type dataId = {
  id: number;
};


type Debit = {
  deposit: string,
  name: string,
  amount: number,
  debitDate: string
};

export type {Debit};

type LabelInputPair = dataId & {
  id: number;
  label: LabelOption;
  input: InputOption;
}

export type {LabelInputPair};

type AccountData = {
  id: number;
  name: string;
  serial: string;
}

export type {AccountData};

type DetailData = dataId & {
  main: string;
  sub: string;
}

export type {DetailData};

type ListData = {
  name: string;
  serial: string;
  balance: number;
  owner: string;
}

export type {ListData};