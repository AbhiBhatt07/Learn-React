import { createSlice } from "@reduxjs/toolkit";

const intitalState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  intitalState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      // because there don't need of action
      state.status = false;
      state.action = null;
    },
  },
});

export const { login, logout } =
  authSlice.actions; /* Yahan hum actions slice ke andar jo reducers hain
 uske andar jo methods hain unko actions bolte hain. */

export default authSlice.reducer;
