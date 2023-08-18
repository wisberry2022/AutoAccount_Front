import { AjaxType } from "../types/RecoilStateTypes";

export type _AjaxFunc = () => void;
export type _InitialAjaxType = () => [string, AjaxType, _AjaxFunc];
export type _InnerAjaxToolType = (url:string, modalState:string) => string;
