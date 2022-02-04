import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const UserRoute = ({ children }) => {
  const authenticated = useSelector(({ auth }) => auth.isLoggedIn);
  const router = useRouter();

  if (typeof window === "undefined") {
    return null;
  }

  if (!authenticated) {
      console.log("go to sign-in")
    router.replace("/sign-in");
    return null;
  }

  return children;
};

export default UserRoute;
