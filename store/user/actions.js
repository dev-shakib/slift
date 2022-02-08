import store from "store-js";
import { mockFindUser } from "../../data/fake-users";
import { SHOPLIFTUSER } from "../auth/slice";
import { userActions } from "./slice";

export const getUser = () => (dispatch) => {
  const user = store.get(SHOPLIFTUSER);
  const foundUser = mockFindUser(user.email);
  if (foundUser) {
    dispatch(
      userActions.getUserProfile({
        profile: foundUser.userData,
        hasOnboarded: foundUser.onboarding?.onboarded,
      })
    );
  } else {
      dispatch(userActions.clearUserProfile())
  }
};
