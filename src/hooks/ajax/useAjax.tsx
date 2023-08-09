import { useRecoilState, useRecoilValue } from "recoil";
import useFindCurrentModal from "../recoil/useFindCurrentModal";
import axios from "axios";
import { AjaxState } from "../../recoil/state/AjaxState";
import { AjaxType, URLType } from "../../classes/types/RecoilStateTypes";
import { ListData } from "../../classes/types/DataTypes";


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
          state: true
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
  const doPut = async (beforeData:any, afterData:any) => {
    await axios.put(ajax.url, {
      before: beforeData.before,
      ...afterData,
    });
    ajaxFunc();
  }
  return doPut;
}

export {usePutAjax};

type AjaxGetResultHookType = (sendData?:any) => ReturnToDataFuncType;
type ReturnToDataFuncType = (sendData?:any) => Promise<ListData[]>

const useGetAjax:AjaxGetResultHookType = (target) => {
    const current:URLType = useRecoilValue(AjaxState);
    const ajaxData:AjaxType = current[target];
    const getList:ReturnToDataFuncType = async (sendData?:any) => {
      const result = await axios.get(ajaxData.url, sendData && sendData);
      return result.data;
    }
    return getList;
}

export {useGetAjax};

type AjaxDeleteHookType = () => ReturnToAnyType;
type ReturnToAnyType = (sendData?:any) => Promise<any>

const useDeleteAjax:AjaxDeleteHookType = () => {
  const target:string = useFindCurrentModal(); 
  const current:URLType = useRecoilValue(AjaxState);
  const ajaxData:AjaxType = current[target];
  const deleteFunc:ReturnToAnyType = async (sendData?:any) => {
    const result = await axios.delete(ajaxData.url, sendData && {
      data:sendData
    })
    return result.data
  }
  return deleteFunc;
}

export {useDeleteAjax};