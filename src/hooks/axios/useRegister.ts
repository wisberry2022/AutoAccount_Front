import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";

import {axiosRenewalFlag} from "../../recoil/states/FlagStates";
import {axiosConfig} from "../../viewdata/configs/AxiosConfig";
import {registerState} from "../../recoil/states/AxiosStates";
import {SimpleFlagType} from "../../types/RecoilStateTypes";
import {axiosInstance} from "../../viewdata/AxiosInstance";
import {VoidtoVoid} from "../../classes/func/FuncTypes";
import {AccountRegister, DebitRegister, Register} from "../../types/AxiosType";
import axios, {AxiosError, AxiosResponse, isAxiosError} from "axios";
import {useContext} from "react";
import {AlertContext} from "../../context/AlertContext";

type ReturnFunc<T> = (modalType:string) => T;

type ErrorResponse = {
	result: string;
}


export const useRegister:ReturnFunc<VoidtoVoid> = (modalType:string) => {
	const [sendData, setData] = useRecoilState<Register>(registerState);
	const setRenewal = useSetRecoilState<SimpleFlagType>(axiosRenewalFlag);
	const setAlert = useContext(AlertContext).setter;

	const save:VoidtoVoid = async () => {
		try {
			await axiosInstance.post(axiosConfig.register[modalType], sendData);
			setData({name:""});
			setRenewal(prev => {return {...prev, update:!prev.update}})
		}catch(e) {
			if(isAxiosError<ErrorResponse>(e)) {
				const message = e.response?.data.result;
				setAlert(message as string);
			}
		}
	}

	return save;
}