import {
  Banner,
  Button,
  Card,
  DisplayText,
  Form,
  FormLayout,
  Link,
  TextField,
} from "@shopify/polaris";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useState } from "react";

import AuthRoute from "../components/routes/AuthRoute";
import AuthLayout from "../components/layout/AuthLayout";
import pageStyles from "../styles/pages/sign-in.module.scss";
import { mockLogin } from "../data/fake-users";
import { authActions } from "../store/auth/slice";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required.")
    .email("Please enter a valid email."),
  password: Yup.string().required("Password is required."),
});

function SignInPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignInSchema) });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    setSubmitError(false);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    const signedInUser = mockLogin(values);
    if (signedInUser) {
      dispatch(authActions.signin(signedInUser.userData));
    } else {
      setSubmitError(true);
    }
    setIsSubmitting(false);
  };

  return (
    <AuthRoute>
      <AuthLayout>
        <div className={pageStyles.wrapper}>
          <h1 className={pageStyles.pageTitle}>Login</h1>
          <Card sectioned>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLayout>
                {submitError && (
                  <Banner status="critical">Invalid email or password.</Banner>
                )}
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { ref, ...fieldProps } }) => (
                    // need to remove ref because TextField doesn't expose ref
                    // results to a warning message
                    <TextField
                      {...fieldProps}
                      type="email"
                      label="Email"
                      error={errors?.email?.message}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { ref, ...fieldProps } }) => (
                    <TextField
                      {...fieldProps}
                      type="password"
                      label="Password"
                      error={errors?.password?.message}
                    />
                  )}
                />
                <Button primary submit loading={isSubmitting}>
                  Sign in
                </Button>
              </FormLayout>
            </form>
          </Card>
        </div>
      </AuthLayout>
    </AuthRoute>
  );
}

export default SignInPage;
