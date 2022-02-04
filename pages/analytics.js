import { Page } from "@shopify/polaris";
import Link from "next/link";
import React from "react";

function AnalyticsPage() {
  return (
    <Page>
      <div>Analytics Page</div>
      <Link href="/">Go to dahsboard</Link>
    </Page>
  );
}

export default AnalyticsPage;
