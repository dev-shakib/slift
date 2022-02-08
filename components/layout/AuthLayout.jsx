import { Card, Layout, Page } from "@shopify/polaris";

const AuthLayout = ({ children }) => {
  return (
    <Page>
      <Layout>
        <Layout.Section>{children}</Layout.Section>
      </Layout>
    </Page>
  );
};

export default AuthLayout;
