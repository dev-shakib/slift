import { useAppBridge } from "@shopify/app-bridge-react";
import { useSelector } from "react-redux";
import { Redirect } from "@shopify/app-bridge/actions";

const AuthRoute = ({ children }) => {
  const authenticated = useSelector(({ auth }) => auth.isLoggedIn);
  const app = useAppBridge();

  if (typeof window === "undefined") {
    return null;
  }

  if (authenticated) {
    app.dispatch(Redirect.toApp({ path: "/" }));
    return null;
  }

  return children;
};

export default AuthRoute;
