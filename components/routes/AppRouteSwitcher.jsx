import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as userActions from "../../store/user/actions";
import LoadingBar from "../common/LoadingBar";

const AppRouteSwitcher = ({ children }) => {
  const { authenticated, onboardingStatusChecked } = useSelector(
    ({ auth, user }) => ({
      authenticated: auth.isLoggedIn,
      onboardingStatusChecked: user.onboarding?.checked,
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (authenticated) {
      dispatch(userActions.getUser());
    }
  }, [authenticated, dispatch]);

  if (authenticated && !onboardingStatusChecked) {
    return <LoadingBar />;
  }

  return children;
};

export default AppRouteSwitcher;
