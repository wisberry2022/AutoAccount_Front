type ModalState = {
  [key in string]:boolean;
}

export type {ModalState};

type InfoState = {
  [key in string]:number | string | null
}

export type {InfoState};

type StateMap = {
  [key in string]:string
}

export type {StateMap};

type InputAtom = {
  [key in string]: number | string | null
}

export type {InputAtom};

type AjaxType = {
  url: string;
  state: boolean;
}

export type {AjaxType};

type URLType = {
  [key in string]:AjaxType
}

export type {URLType};