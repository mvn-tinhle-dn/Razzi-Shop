import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice: any = createSlice({
  name: "useHeart",
  initialState,
  reducers: {
    incrementHeart: (state) => {
      state.value = state.value + 1;
    },
    decrementHeart: (state) => {
      state.value = state.value - 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementHeart, decrementHeart } = counterSlice.actions;

export default counterSlice.reducer;
