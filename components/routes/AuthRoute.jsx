import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const AuthRoute = ({ children }) => {
  const authenticated = useSelector(({ auth }) => auth.isLoggedIn);
  const router = useRouter();

  if (typeof window === "undefined") {
    return null;
  }

  if (authenticated) {
    router.replace("/");
    return null;
  }

  return children
};

export default AuthRoute;
