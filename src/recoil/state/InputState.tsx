import { RecoilState, atom, atomFamily, selectorFamily } from "recoil";
import { InfoState, StateMap } from "../../classes/types/RecoilStateTypes";

const InputStateMap = atom<StateMap>({
  key: "InputStateMap",
  default: {
    isAccountAssign: "AccountAssignState"
  }
});

export {InputStateMap};

const AccountAssignState = atom<InfoState>({
  key: "AccountAssignState",
  default: {
    serial: "",
    name: "",
    owner: "",
    balance: 0,
  }
});

export {AccountAssignState};

const getInputState = atomFamily<InfoState, string>({
  key: "getInputState",
  default: selectorFamily({
    key: "InputStateSelector",
    get: param => ({get}) => {
      const stateMap:{[key : string]:RecoilState<InfoState>} = {
        'AccountAssignState': AccountAssignState,
      }
      
      const targetState = Object.keys(stateMap)
      .filter(v => v === param)
      .map(v => stateMap[v])[0];

      const target = get(targetState)
      return target;
    }
  })
});

export {getInputState};