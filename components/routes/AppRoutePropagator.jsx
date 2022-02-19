import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  RoutePropagator as ShopifyRoutePropagator,
  useAppBridge,
} from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";

const AppRoutePropagator = () => {
  const route = useRouter();
  const { asPath, push } = route;
  const app = useAppBridge();

  useEffect(() => {
    app.subscribe(Redirect.Action.APP, ({ path }) => {
      push(path);
    });
  }, []);

  return app && route ? <ShopifyRoutePropagator location={asPath} /> : null;
};

export default AppRoutePropagator;
