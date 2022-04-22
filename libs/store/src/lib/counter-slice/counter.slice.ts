import {createNamespacedSlice} from "ngrx-slice";

export interface CounterState {
  counter:number
}

export const initialCounterState:CounterState = {
  counter:0
}

export const {CounterActions, CounterFeature, CounterSelectors} = createNamespacedSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--
    }
  }
})
