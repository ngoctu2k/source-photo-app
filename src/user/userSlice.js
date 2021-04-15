// 1. Setup todo slice

import { createSlice } from "@reduxjs/toolkit";

// todoSlice.js
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {
    },
  },
  reducers: {
    initUser(state, action) {
      state.currentUser={...action.payload}
    },
  },
});
const { actions, reducer } = userSlice;
export const { initUser } = actions;
export default reducer;
