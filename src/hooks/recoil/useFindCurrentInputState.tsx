import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
import { InputStateMap, getInputState } from "../../recoil/state/InputState";
import useFindCurrentModal from "./useFindCurrentModal";
import { InfoState, InputAtom } from "../../classes/types/RecoilStateTypes";

type CustomSetterType = (value:string) => void;
type CustomHookType = (name:string | undefined) => CustomSetterType;

const useFindCurrentInputState:CustomHookType = name => {
  const target = useFindCurrentModal();
  const states = useRecoilValue(InputStateMap);
  const [stateMap, setMap] = useRecoilState(getInputState(states[target]));

  console.log(stateMap);
  const setState:CustomSetterType = (value:string) => {
    setMap(prev => ({
      ...prev,
      [name as string]: value
    }));
  }

  return setState;
}

export default useFindCurrentInputState;