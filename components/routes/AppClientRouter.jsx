import { ClientRouter } from "@shopify/app-bridge-react";
import { useRouter } from "next/router";

const AppClientRouter = () => {
  const router = useRouter();
  return <ClientRouter history={router} />;
};

export default AppClientRouter;
