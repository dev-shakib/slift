import { useAppBridge } from "@shopify/app-bridge-react";
import { useSelector } from "react-redux";
import { Redirect } from "@shopify/app-bridge/actions";

const UserRoute = ({ children }) => {
  const authenticated = useSelector(({ auth }) => auth.isLoggedIn);
  const app = useAppBridge();

  if (typeof window === "undefined") {
    return null;
  }

  if (!authenticated) {
    app.dispatch(Redirect.toApp({ path: "/sign-in" }));
    return null;
  }

  return children;
};

export default UserRoute;
