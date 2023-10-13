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
  [key:string]: any;
};

export type inputAttrType<T> = {
  [key:string]:T
}

export type mapType<T> = {
  [key:string]:inputAttrType<T>
}

export type valueMapper = {
  [key:string]:mapType<string | boolean>;
}

export type ConfigType<T> = {
  [key:string]:T
}