import { MouseEventHandler } from "react";

export type AjaxHookType = (sendData?: any) => any;
export type AjaxGetResultHookType = (sendData?: any) => ReturnToDataFuncType;
export type ReturnToDataFuncType = (sendData?: any) => Promise<any>;
export type AjaxDeleteHookType = () => ReturnToAnyType;
export type ReturnToAnyType = (sendData?: any) => Promise<any>;
export type VoidtoVoid = () => void;
export type NormalFuncType = (data?: any) => any;
export type hookType = (current: string) => MouseEventHandler<HTMLDivElement>;
