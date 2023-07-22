import { InputOption, LabelOption } from "./StyleTypes";

type Debit = {
  deposit: string,
  name: string,
  amount: number,
  debitDate: string
};

export type {Debit};

type LabelInputPair = {
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