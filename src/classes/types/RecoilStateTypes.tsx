export type ModalState = {
  [key in string]:boolean;
}

export type InfoState = {
  [key in string]:number | string | Date | null
}

export type StateMap = {
  [key in string]:string
}

export type InputAtom = {
  [key in string]: number | string | null
}

export type AjaxType = {
  url: string;
  state: boolean;
}

export type URLType = {
  [key in string]:AjaxType
}

export type ClickedAccount = {
  clicked: string | undefined | null;
  id: number;
  serial?: string;
  amount?: number;
  name?: string;
}

export type AssignStateType = {
  state: boolean;
}

export type ExpenseType = {
  expense: number;
}