import {Account, Debit, DetailDataType, objType} from "../types/DataTypes";
import {modifyInputMapper} from "../viewdata/configs/Config";

type FindFuncType<T> = (list: T[], id: number) => any[];

export const findById: FindFuncType<Account | Debit> = (list, id) => {
  return id
    ? list.filter((account) => Number.parseInt(account.id) === id)
    : list;
};

type GetDetailFunc<T> = (data:T) => DetailDataType;

export const getDetailData:GetDetailFunc<Account | Debit> = (data) => {
  if(Object.keys(data).includes("debits")) {
    const {debits,   ...rested } = data as Account;
    return _getDetailObj(Object.keys(rested), rested);
  }
  return _getDetailObj(Object.keys(data), data);
}

export const convertStrToNumber = (name:string, value:string):string | number => {
  return ["amount", "balance"].includes(name) ?
    Number.parseInt(value) :
    value;
}

export const getModifyData = (data:any, modalType:string):objType => {
  return Object.keys(modifyInputMapper[modalType]).reduce((acc,cur) => {
    return {...acc, [cur]:data[cur]}
  }, {} as objType);
}

type mappedType = {
  [key : string]: string;
}

export const getId = (data:Account[], id:number) => {
  return id ? id : Number.parseInt(data[0].id);
}

const _getDetailObj = (keys:string[], data:any):DetailDataType => {
  return keys.reduce((acc,cur, idx) => {return {
    ...acc,
    [["deposit", "balance"].includes(cur) ? _mapToData(cur) : cur]: Object.values(data)[idx],
  }},{} as DetailDataType);
}

const _mapToData = (str:string):string => {
  const mapped: mappedType = {
    deposit:"serial",
    balance:"amount",
  }
  return mapped[str];
}