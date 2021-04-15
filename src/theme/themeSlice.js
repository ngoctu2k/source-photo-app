// 1. Setup todo slice

import { createSlice } from "@reduxjs/toolkit";

// todoSlice.js
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: false
  },
  reducers: {
    toggleTheme(state, action) {
      state.darkMode = action.payload
    },
  },
});
const { actions, reducer } = themeSlice;
export const { toggleTheme } = actions;
export default reducer;
