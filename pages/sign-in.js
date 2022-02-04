import { useAppBridge } from "@shopify/app-bridge-react";
import { Link } from "@shopify/polaris";
import { Redirect } from "@shopify/app-bridge/actions";
import React from "react";
import AuthRoute from "../components/routes/AuthRoute";

function SignInPage() {
  const app = useAppBridge();
  return (
    <AuthRoute>
      <div>This is the sign in page.</div>
      <Link onClick={() => app.dispatch(Redirect.toApp({path: "/settings"}))}>Go to dashboard</Link>
    </AuthRoute>
  );
}

export default SignInPage;
