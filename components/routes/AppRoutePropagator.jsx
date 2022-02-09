import { useContext, useEffect } from "react";
import Router, { useRouter } from "next/router";
import {
  RoutePropagator as ShopifyRoutePropagator,
  useAppBridge,
} from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";

const AppRoutePropagator = () => {
  const route = useRouter();
  const { asPath } = route;
  const app = useAppBridge();

  useEffect(() => {
    app.subscribe(Redirect.Action.APP, ({ path }) => {
      Router.push(path);
    });
  }, []);

  return app && route ? <ShopifyRoutePropagator location={asPath} /> : null;
};

export default AppRoutePropagator;
