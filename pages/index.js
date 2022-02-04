import { Heading, Page } from "@shopify/polaris";
import Link from "next/link";
import UserRoute from "../components/routes/UserRoute";

const Dashboard = () => (
  <UserRoute>
    <Page>
      <Heading>Welcome to ShopLift App 🎉</Heading>
      <Link href="/welcome">Go to onboarding</Link>
    </Page>
  </UserRoute>
);

export default Dashboard;
