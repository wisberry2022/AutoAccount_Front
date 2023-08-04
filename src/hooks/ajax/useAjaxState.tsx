import { useRecoilValue } from "recoil";
import { AjaxState } from "../../recoil/state/AjaxState";
import { AjaxType, URLType } from "../../classes/types/RecoilStateTypes";

type CustomHookType = (target:string) => boolean;

const useAjaxState:CustomHookType = (target) => {
  const datas:URLType = useRecoilValue(AjaxState);
  const ajaxData:AjaxType = datas[target]; 
  return ajaxData.state;
}

export default useAjaxState;