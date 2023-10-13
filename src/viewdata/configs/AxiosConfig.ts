import {ConfigType, objType} from "../../types/DataTypes";

export const axiosConfig:ConfigType<objType> = {
	register: {
		Account: "/api/v1/account",
		Debit: "/api/v1/debit",
	}
}