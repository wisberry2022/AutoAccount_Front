import { SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { getInputState } from "../../recoil/state/InputState";
import useFindCurrentModal from "./useFindCurrentModal";
import { InfoState } from "../../classes/types/RecoilStateTypes";


type CustomSetterType = (value:string) => void;
type SetterHookType = (name:string | undefined) => CustomSetterType;

// input state 변경을 위한 custom hook

const useFindCurrentInputStateSetter:SetterHookType = name => {
  const target = useFindCurrentModal();
  const setMap = useSetRecoilState(getInputState(target));

  const setState:CustomSetterType = (value:string) => {
    setMap(prev => ({
      ...prev,
      [name as string]: value
    }));
  }

  return setState;
}

export {useFindCurrentInputStateSetter};

type ValueHookType = () => [InfoState, SetterOrUpdater<InfoState>];

// input state를 가져오기 위한 custom hook
const useFindCurrentInputState:ValueHookType = () => {
  const target = useFindCurrentModal();
  const [data, setData] = useRecoilState(getInputState(target));

  return [data, setData];
}

export {useFindCurrentInputState};

