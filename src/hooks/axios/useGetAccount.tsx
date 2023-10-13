import { useEffect, useState } from "react";
import {axiosInstance} from "../../viewdata/AxiosInstance";
import { Account } from "../../types/DataTypes";
import {useRecoilValue} from "recoil";
import {axiosRenewalFlag} from "../../recoil/states/FlagStates";
import {SimpleFlagType} from "../../types/RecoilStateTypes";

type _AxiosFuncType<T> = (
  setter: React.Dispatch<React.SetStateAction<T[]>>
) => void;

const _getAxios: _AxiosFuncType<Account> = async (setter) => {
  const response = await axiosInstance.get("/api/v1/account");
  try {
    setter(response.data);
  } catch (e) {
    setter([]);
  }
};

export const useGetAccount = (): Account[] => {
  const [data, setData] = useState<Account[]>([]);
  const isRenewal = useRecoilValue<SimpleFlagType>(axiosRenewalFlag);

  useEffect(() => {
    _getAxios(setData);
  }, [isRenewal.update]);

  return data;
};
