import { RecoilState, atom, atomFamily, selectorFamily } from "recoil";
import { InfoState } from "../../classes/types/RecoilStateTypes";

const AccountAssignState = atom<InfoState>({
  key: "AccountAssignState",
  default: {}
});

const AccountModifyState = atom<InfoState>({
  key: "AccountModifyState",
  default: {}
});

const DebitAssignState = atom<InfoState>({
  key: "DebitAssignState",
  default: {}
}); 

const DebitModifyState = atom<InfoState>({
  key: "DebitUpdateState",
  default: {}
});

const getInputState = atomFamily<InfoState, string>({
  key: "getInputState",
  default: selectorFamily({
    key: "InputStateSelector",
    get: param => ({get}) => {
      const stateMap:{[key : string]:RecoilState<InfoState>} = {
        'isAccountAssign': AccountAssignState,
        'isAccountUpdate': AccountModifyState,
        'isDebitAssign': DebitAssignState,
        'isDebitUpdate': DebitModifyState
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