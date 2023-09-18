import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import useFindCurrentModal from "../recoil/useFindCurrentModal";
import axios from "axios";
import { AjaxState } from "../../recoil/state/AjaxState";
import { AjaxType, URLType } from "../../classes/types/RecoilStateTypes";
import { ExpectedState, UserClickedAccount } from "../../recoil/state/AccountState";
import { DebitState } from "../../recoil/state/DebitState";
import { _AjaxFunc, _InitialAjaxType, _InnerAjaxToolType } from "../../classes/func/InnerFuncTypes";
import { AjaxDeleteHookType, AjaxGetResultHookType, AjaxHookType, ReturnToAnyType, ReturnToDataFuncType } from "../../classes/func/FuncTypes";


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

const _useAddParameter:_InnerAjaxToolType = (url, modalState) => {
  const account = useRecoilValue(UserClickedAccount);  
  const debit = useRecoilValue(DebitState);

  if(['isAccountDetail', 'isDebitList', 'isDebitDetail'].includes(modalState)) {
    if(modalState === "isDebitDetail") { 
      return url + "/" + debit.id;
    }
    if(modalState === "isDebitList") {
      return url + "/" + account.id + "/debit"
    }
    return url + "/" + account.id;
  }
  return url;
}

export const usePostAjax:AjaxHookType = () => {
  const [_, ajax, ajaxFunc] = _initialAjax(); 
  const doPost = async (sendData:any) => {
    await axios.post(ajax.url, sendData);
    ajaxFunc();
  }
  return doPost;
};

export const usePutAjax:AjaxHookType = (sendData:any) => {
  const [_, ajax, ajaxFunc] = _initialAjax();
  const doPut = async (sendData:any) => {
    await axios.put(ajax.url, sendData);
    ajaxFunc();
  }
  return doPut;
}

export const useGetAjax:AjaxGetResultHookType = (target) => {
    const current:URLType = useRecoilValue(AjaxState);
    const [clicked, setClicked] = useRecoilState(UserClickedAccount);
    const setExpected = useSetRecoilState(ExpectedState);

    const ajaxData:AjaxType = current[target];
    const url:string = _useAddParameter(ajaxData.url, target);
    const getList:ReturnToDataFuncType = async (sendData?:any) => {
      const result = await axios.get(url, sendData && sendData);
      console.log('useGetAjax:', result);

      if(target === "isDebitList") {
        const total = await axios.get(`http://localhost:8080/mysalary/api/v1/account/${clicked.id}/amount`);
        setExpected({expense:total.data.result});
      }
      return result.data;
    }
    return getList;
}

export const useDeleteAjax:AjaxDeleteHookType = () => {
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
