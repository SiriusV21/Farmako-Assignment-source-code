import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    scroll: 0,
    colors: ["blue", "red", "black"],
  },
  reducers: {
    scroll: (state, scrollPosition) => {
      state.scroll = scrollPosition.payload;
    },
    randomizeColors: (state, colors) => {
      state.colors = [...colors.payload];
    },
  },
});

export const { scroll, randomizeColors } = appSlice.actions;

export default appSlice.reducer;
