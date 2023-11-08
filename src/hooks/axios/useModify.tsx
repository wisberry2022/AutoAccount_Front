import {ChangeEventHandler, useContext, useState} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";

import {convertStrToNumber, getId, getModifyData} from "../../utils/FuncSet";
import {axiosRenewalFlag} from "../../recoil/states/FlagStates";
import {axiosConfig} from "../../viewdata/configs/AxiosConfig";
import {SimpleFlagType} from "../../types/RecoilStateTypes";
import {axiosInstance} from "../../viewdata/AxiosInstance";
import {ParamToVoid} from "../../classes/func/FuncTypes";
import {Account, objType} from "../../types/DataTypes";
import {accountState} from "../../recoil/states/ClickedState";
import {DataContext} from "../../App";

type Modifying = (data:objType, modalType:string) => [objType, ChangeEventHandler<HTMLInputElement>, ParamToVoid<string>];

export const useModify:Modifying = (data, modalType) => {
	const [modify, modifyData] = useState<objType>(getModifyData(data, modalType));
	const accounts:Account[] = useContext(DataContext);
	const setRenewal = useSetRecoilState<SimpleFlagType>(axiosRenewalFlag);
	const currId = useRecoilValue(accountState);


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
			const sendData = modalType === "Debit" ? {...modify, withdrawal:getId(accounts, currId.id), id:Number.parseInt(id)} : {id:Number.parseInt(id),...modify};
			console.log("수정 완료 ", sendData);
			await axiosInstance.patch(axiosConfig.modify[modalType], sendData);
			modifyData({});
			setRenewal(prev => {return {update: !prev.update}});
		}catch(e) {
			console.log(e);
		}
	}

	return [modify, changeHandler, modifyingInfo];
}