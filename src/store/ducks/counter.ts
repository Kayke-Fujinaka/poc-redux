import { createSlice } from "@reduxjs/toolkit";

import { ICounter } from "../../interfaces/counter";

const counter = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  } as ICounter,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    discrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, discrement, reset } = counter.actions;
export default counter.reducer;
