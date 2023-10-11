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

export type Account = {
  id: string;
  name: string;
  serial: string;
  balance: number;
  owner: string;
  expense: number;
  debitCount: number;
  debits: Debit[];
};

export type DetailDataType = {
  id: number;
  name: string;
  serial: string;
  amount: number;
  owner: string;
  debitCounts: number;
  withdrawal: string;
  expense: number;
  date: Date;
}

export type objType = {
  [key in string]: any;
};
