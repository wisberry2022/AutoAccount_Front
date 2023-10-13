import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";

import {axiosRenewalFlag} from "../../recoil/states/FlagStates";
import {axiosConfig} from "../../viewdata/configs/AxiosConfig";
import {registerState} from "../../recoil/states/AxiosStates";
import {SimpleFlagType} from "../../types/RecoilStateTypes";
import {axiosInstance} from "../../viewdata/AxiosInstance";
import {VoidtoVoid} from "../../classes/func/FuncTypes";
import {Register} from "../../types/AxiosType";

type ReturnFunc<T> = (modalType:string) => T;

export const useRegister:ReturnFunc<VoidtoVoid> = (modalType:string) => {
	const [sendData, setData] = useRecoilState<Register>(registerState);
	const setRenewal = useSetRecoilState<SimpleFlagType>(axiosRenewalFlag);

	const save:VoidtoVoid = async () => {
		try {
			await axiosInstance.post(axiosConfig.register[modalType], sendData);
			setData({name:""});
			setRenewal(prev => {return {...prev, update:!prev.update}})
		}catch(e) {
			console.log(e);
		}
	}

	return save;
}