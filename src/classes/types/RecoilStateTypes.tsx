export type ModalState = {
  [key in string]:boolean;
}

export type InfoState = {
  [key in string]:number | string | null
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
}
