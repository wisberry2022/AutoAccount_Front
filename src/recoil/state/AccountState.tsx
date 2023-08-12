import { atom } from "recoil";
import { ClickedAccount } from "../../classes/types/RecoilStateTypes";

const UserClickedAccount = atom<ClickedAccount>({
  key: "UserClickedAccount",
  default: {
    clicked: "",
    id: "",
    serial: ""
  }
});

export {UserClickedAccount};

