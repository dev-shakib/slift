import { createSlice } from "@reduxjs/toolkit";
import store from "store-js";

export const SHOPLIFTUSER = "shoplift_user";
const user = store.get(SHOPLIFTUSER);

const initialState = user
  ? {
      isLoggedIn: true,
      user,
    }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state, action) => {
      store.set(SHOPLIFTUSER, action.payload);
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    signout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
