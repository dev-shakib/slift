import store from "store-js";
import { SHOPLIFTUSER } from "./slice";
import { authActions } from "./slice";
import { userActions } from "../user/slice";

export const signout = () => (dispatch) => {
  store.remove(SHOPLIFTUSER);
  dispatch(userActions.clearUserProfile());
  dispatch(authActions.signout());
};
