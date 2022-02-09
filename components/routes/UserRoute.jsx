import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { useSelector } from "react-redux";

const UserRoute = ({ children }) => {
  const { authenticated, onboarding } = useSelector(({ auth, user }) => ({
    authenticated: auth?.isLoggedIn,
    onboarding: user?.onboarding,
  }));

  const app = useAppBridge();

  if (typeof window === "undefined") {
    return null;
  }

  if (!authenticated) {
    app.dispatch(Redirect.toApp({ path: "/sign-in" }));
    return null;
  }

  if (authenticated && onboarding && !onboarding.status) {
    app.dispatch(Redirect.toApp({ path: "/welcome" }));
    return null;
  }

  return children;
};

export default UserRoute;
