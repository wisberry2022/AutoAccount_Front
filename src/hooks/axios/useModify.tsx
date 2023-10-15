import {ChangeEventHandler, useState} from "react";
import {useSetRecoilState} from "recoil";

import {convertStrToNumber, getModifyData} from "../../utils/FuncSet";
import {axiosRenewalFlag} from "../../recoil/states/FlagStates";
import {axiosConfig} from "../../viewdata/configs/AxiosConfig";
import {SimpleFlagType} from "../../types/RecoilStateTypes";
import {axiosInstance} from "../../viewdata/AxiosInstance";
import {ParamToVoid} from "../../classes/func/FuncTypes";
import {objType} from "../../types/DataTypes";

type Modifying = (data:objType, modalType:string) => [objType, ChangeEventHandler<HTMLInputElement>, ParamToVoid<string>];

export const useModify:Modifying = (data, modalType) => {
	const [modify, modifyData] = useState<objType>(getModifyData(data, modalType));
	const setRenewal = useSetRecoilState<SimpleFlagType>(axiosRenewalFlag);

	const changeHandler:ChangeEventHandler<HTMLInputElement> = (e) => {
		e.stopPropagation();
		const {name, value} = e.target;
		modifyData(prev => {return {
			...prev,
			[name]:convertStrToNumber(name, value)
		}})
	}

	const modifyingInfo:ParamToVoid<string> = async (id) => {
		try {
			await axiosInstance.patch(axiosConfig.modify[modalType], {id:Number.parseInt(id), ...modify});
			modifyData({});
			setRenewal(prev => {return {update: !prev.update}});
		}catch(e) {
			console.log(e);
		}
	}

	return [modify, changeHandler, modifyingInfo];
}