import { useEffect, useState } from "react";
import { accountAxios } from "../../viewdata/AxiosInstance";
import { Account } from "../../types/DataTypes";

type _AxiosFuncType = (
  setter: React.Dispatch<React.SetStateAction<Account[]>>
) => void;

const _getAxios: _AxiosFuncType = async (setter) => {
  const response = await accountAxios.get("/");
  try {
    setter(response.data);
  } catch (e) {
    setter([]);
  }
};

export const useGetAccount = (): Account[] => {
  const [datas, setData] = useState<Account[]>([]);

  useEffect(() => {
    _getAxios(setData);
  }, []);

  return datas;
};
