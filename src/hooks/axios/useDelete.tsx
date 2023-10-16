import {useSetRecoilState} from "recoil";

import {axiosRenewalFlag} from "../../recoil/states/FlagStates";
import {axiosConfig} from "../../viewdata/configs/AxiosConfig";
import {SimpleFlagType} from "../../types/RecoilStateTypes";
import {axiosInstance} from "../../viewdata/AxiosInstance";
import {ParamToVoid} from "../../classes/func/FuncTypes";

export const useDelete = (modalType:string):ParamToVoid<string> => {
	const setRenewal = useSetRecoilState<SimpleFlagType>(axiosRenewalFlag);

	const remove:ParamToVoid<string> = async (id) => {
		try {
			await axiosInstance.delete(`${axiosConfig.remove[modalType]}/${id}`);
			setRenewal(prev => {return {update:!prev.update}})
		}catch(e) {
			console.log(e);
		}
	}

	return remove;

}