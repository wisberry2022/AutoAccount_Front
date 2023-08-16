import { useRecoilState, useRecoilValue } from "recoil";
import useFindCurrentModal from "../recoil/useFindCurrentModal";
import axios from "axios";
import { AjaxState } from "../../recoil/state/AjaxState";
import { AjaxType, URLType } from "../../classes/types/RecoilStateTypes";
import { UserClickedAccount } from "../../recoil/state/AccountState";
import { DebitState } from "../../recoil/state/DebitState";

type _AjaxFunc = () => void;
type _InitialAjaxType = () => [string, AjaxType, _AjaxFunc];

const _initialAjax:_InitialAjaxType = () => {
  const current = useFindCurrentModal();
  const [ajax, setAjax] = useRecoilState(AjaxState);
  const ajaxFunc:_AjaxFunc = () => {
    setAjax(prev => {
      return {
        ...prev,
        [current]: {
          ...prev[current],
          state: !prev[current].state
        }
      }
    });
  }
  return [current, ajax[current], ajaxFunc];
}

type AjaxHookType = (sendData?:any) => any;

const usePostAjax:AjaxHookType = () => {
  const [_, ajax, ajaxFunc] = _initialAjax(); 
  const doPost = async (sendData:any) => {
    await axios.post(ajax.url, sendData);
    ajaxFunc();
  }
  return doPost;
};

export {usePostAjax};

const usePutAjax:AjaxHookType = (sendData:any) => {
  const [_, ajax, ajaxFunc] = _initialAjax();
  const doPut = async (sendData:any) => {
    await axios.put(ajax.url, sendData);
    ajaxFunc();
  }
  return doPut;
}

export {usePutAjax};

type AjaxGetResultHookType = (sendData?:any) => ReturnToDataFuncType;
type ReturnToDataFuncType = (sendData?:any) => Promise<any>

type _InnerAjaxToolType = (url:string, modalState:string) => string;

const _useAddParameter:_InnerAjaxToolType = (url, modalState) => {
  const account = useRecoilValue(UserClickedAccount);  
  const debit = useRecoilValue(DebitState);


  if(['isAccountDetail', 'isDebitList', 'isDebitDetail'].includes(modalState)) {
    if(modalState === "isDebitDetail") {
      return url + "/" + debit.id;
    }
    return url + "/" + account.id;
  }
  return url;
}

const useGetAjax:AjaxGetResultHookType = (target) => {
    const current:URLType = useRecoilValue(AjaxState);
    const ajaxData:AjaxType = current[target];
    const url:string = _useAddParameter(ajaxData.url, target);
    // if(target === "isDebitList") {
    //   console.log(url);
    // }
    const getList:ReturnToDataFuncType = async (sendData?:any) => {
      const result = await axios.get(url, sendData && sendData);
      return result.data;
    }
    return getList;
}

export {useGetAjax};

type AjaxDeleteHookType = () => ReturnToAnyType;
type ReturnToAnyType = (sendData?:any) => Promise<any>

const useDeleteAjax:AjaxDeleteHookType = () => {
  const [_, ajax, ajaxFunc] = _initialAjax();
  const deleteFunc:ReturnToAnyType = async (sendData?:any) => {
    const result = await axios.delete(ajax.url, sendData && {
      data:sendData
    })
    ajaxFunc();
    return result.data
  }
  return deleteFunc;
}

export {useDeleteAjax};