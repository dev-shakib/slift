import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as userActions from "../../store/user/actions";
import LoadingBar from "../common/LoadingBar";

const OnboardingRoute = ({ children }) => {
  const { authenticated, onboarding } = useSelector(({ auth, user }) => ({
    authenticated: auth?.isLoggedIn,
    onboarding: user?.onboarding,
  }));

  const app = useAppBridge();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (authenticated) {
  //     dispatch(userActions.getUser());
  //   }
  // }, []);

  if (typeof window === "undefined") {
    return null;
  }

  if (!authenticated) {
    app.dispatch(Redirect.toApp({ path: "/sign-in" }));
    return null;
  }

  // if (authenticated && onboarding && !onboarding.checked) {
  //   return <LoadingBar />;
  // }

  if (authenticated && onboarding && onboarding.status) {
    app.dispatch(Redirect.toApp({ path: "/" }));
    return null;
  }

  return children;
};

export default OnboardingRoute;
