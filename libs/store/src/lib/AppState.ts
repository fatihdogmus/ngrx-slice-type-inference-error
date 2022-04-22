import {CounterState, initialCounterState} from "./counter-slice/counter.slice";

export interface AppState {
counter: CounterState
}

export const initialAppState: AppState = {
  counter: initialCounterState
};
