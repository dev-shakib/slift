import { useContext, useEffect } from "react";
import Router, { useRouter } from "next/router";
import {
  Context as AppBridgeContext,
  RoutePropagator as ShopifyRoutePropagator,
} from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";

const AppRoutePropagator = () => {
  const router = useRouter();
  const { route } = router;
  // const appBridge = useContext(AppBridgeContext);

  // useEffect(() => {
  //   appBridge.subscribe(Redirect.Action.APP, ({ path }) => {
  //     Router.push(path);
  //   });
  // }, []);

  return route ? (
    <ShopifyRoutePropagator location={route} />
  ) : null;
};

export default AppRoutePropagator;
