import { createSlice } from "@reduxjs/toolkit";

type UIState = {
  debugMode: boolean;
};

const initialState: UIState = {
  debugMode: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDebugMode: (state) => {
      state.debugMode = !state.debugMode;
    },
  },
});

export const { toggleDebugMode } = uiSlice.actions;

export default uiSlice.reducer;
