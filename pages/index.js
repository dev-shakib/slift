import { Button, DisplayText, Heading, Page } from "@shopify/polaris";
import Link from "next/link";
import { useDispatch } from "react-redux";
import DashboardLayout from "../components/layout/DashboardLayout";
import UserRoute from "../components/routes/UserRoute";
import * as authActions from "../store/auth/actions";

function Dashboard() {
  

  return (
    <UserRoute>
      <DashboardLayout>
        <Page fullWidth>
          <DisplayText>Dashboard</DisplayText>
          
          <Link href="/create-a-test">Create a Test</Link>
        </Page>
      </DashboardLayout>
    </UserRoute>
  );
}

export default Dashboard;
