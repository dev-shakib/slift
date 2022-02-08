import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as userActions from "../../store/user/actions";
import LoadingBar from "../common/LoadingBar";

const AppRouteSwitcher = ({ children }) => {
  console.log("AppRouteSwitcher");
  const { authenticated, onboardingStatusChecked } = useSelector(
    ({ auth, user }) => ({
      authenticated: auth.isLoggedIn,
      onboardingStatusChecked: user.onboarding?.checked,
    })
  );

  console.log(authenticated, onboardingStatusChecked);

  const dispatch = useDispatch();

  useEffect(() => {
    if (authenticated) {
      console.log("getting user!");
      dispatch(userActions.getUser());
    }
  }, [authenticated, dispatch]);

  if (authenticated && !onboardingStatusChecked) {
    return <LoadingBar />;
  }

  return children;
};

export default AppRouteSwitcher;
