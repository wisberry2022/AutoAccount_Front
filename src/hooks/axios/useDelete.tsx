import {ParamToVoid} from "../../classes/func/FuncTypes";
import {axiosInstance} from "../../viewdata/AxiosInstance";
import {useSetRecoilState} from "recoil";
import {axiosRenewalFlag} from "../../recoil/states/FlagStates";
import {SimpleFlagType} from "../../types/RecoilStateTypes";
import {axiosConfig} from "../../viewdata/configs/AxiosConfig";
import {accountState} from "../../recoil/states/ClickedState";

export const useDelete = (modalType:string):ParamToVoid<string> => {
	const setRenewal = useSetRecoilState<SimpleFlagType>(axiosRenewalFlag);
	const setId = useSetRecoilState(accountState);
	const remove:ParamToVoid<string> = async (id) => {
		try {
			await axiosInstance.delete(axiosConfig.remove[modalType], {data: {id:Number.parseInt(id)}});
			setRenewal(prev => {return {update:!prev.update}})
			modalType === "Account" && setId({id:0});
		}catch(e) {
			console.log(e);
		}
	}

	return remove;

}