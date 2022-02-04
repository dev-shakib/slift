import Link from "next/link";
import React from "react";
import AuthRoute from "../components/routes/AuthRoute";

function SignInPage() {
  return (
    <AuthRoute>
      <div>This is the sign in page.</div>
      <Link href="/">Go to dashboard</Link>
    </AuthRoute>
  );
}

export default SignInPage;
