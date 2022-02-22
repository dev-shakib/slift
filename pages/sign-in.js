import { Button, Card, DisplayText, Stack, TextStyle } from "@shopify/polaris";
import { useDispatch } from "react-redux";
import { useState } from "react";
import classNames from "classnames";

import AuthRoute from "../components/routes/AuthRoute";
import AuthLayout from "../components/layout/AuthLayout";
import pageStyles from "../styles/pages/sign-in.module.scss";
import { mockLogin } from "../data/fake-users";
import { authActions } from "../store/auth/slice";

function SignInPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signInMode, setSignInMode] = useState(null);

  const dispatch = useDispatch();

  const handleSigninAsNew = () => {
    setSignInMode("new");
    handleSignIn({
      email: "newuser@email.com",
      password: "password",
    });
  };

  const handleSigninAsExisting = () => {
    setSignInMode("existing");
    handleSignIn({
      email: "existinguser@email.com",
      password: "password",
    });
  };

  const handleSignIn = async (values) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const signedInUser = mockLogin(values);
    dispatch(authActions.signin(signedInUser.userData));
  };

  return (
    <AuthRoute>
      <AuthLayout>
        <div className={pageStyles.wrapper}>
          <Card sectioned>
            <h1 className={pageStyles.pageTitle}>Sign In</h1>
            <DisplayText size="small">
              <div className={classNames("text-center", pageStyles.subtitle)}>
                <TextStyle variation="subdued">
                  For development purposes only.
                </TextStyle>
              </div>
            </DisplayText>
            <Stack distribution="center" vertical>
              <Button
                onClick={handleSigninAsNew}
                size="large"
                fullWidth
                primary
                disabled={isSubmitting}
                loading={isSubmitting && signInMode === "new"}
              >
                As a New Customer
              </Button>
              <Button
                onClick={handleSigninAsExisting}
                size="large"
                fullWidth
                disabled={isSubmitting}
                loading={isSubmitting && signInMode === "existing"}
              >
                As an Existing Customer
              </Button>
            </Stack>
          </Card>
        </div>
      </AuthLayout>
    </AuthRoute>
  );
}

export default SignInPage;
