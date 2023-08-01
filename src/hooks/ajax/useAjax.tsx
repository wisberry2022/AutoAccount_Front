import { useRecoilValue } from "recoil";
import useFindCurrentModal from "../recoil/useFindCurrentModal";
import axios from "axios";
import { AjaxState } from "../../recoil/state/AjaxState";


type _InitialAjaxType = () => string;

const _initialAjax:_InitialAjaxType = () => {
  const current = useFindCurrentModal();
  const urls = useRecoilValue(AjaxState);
  return urls[current];
}

type AjaxHookType = () => any;


const usePostAjax:AjaxHookType = () => {
  const url = _initialAjax();
    
  const doPost = async (sendData:any) => {
    const result = await axios.post(url, sendData);
    console.log(result);
  }

  return doPost;
};

export {usePostAjax};