import {
  Button,
  Page,
  Stack,
  TextStyle,
} from "@shopify/polaris";
import RecommendationsCards from "../components/dashboard/RecommendationsCards";

import DashboardLayout from "../components/layout/DashboardLayout";
import UserRoute from "../components/routes/UserRoute";
import styles from "../styles/pages/dashboard.module.scss";

function Dashboard() {
  const handleCreateATest = () => {
    console.log("Create a test NOW!");
  };

  return (
    <UserRoute>
      <DashboardLayout>
        <Page fullWidth title="Dashboard" titleHidden>
          <div className="page-header">
            <Stack wrap={false}>
              <Stack.Item fill>
                <h2 className="page-title">Dashboard</h2>
                <p>
                  <TextStyle variation="subdued">
                    Jump into your active tests and test drafts, and get ideas
                    for new tests with our data-driven test recommendations.
                  </TextStyle>
                </p>
              </Stack.Item>
              <Stack.Item>
                <Button onClick={handleCreateATest} primary>
                  Create a test
                </Button>
              </Stack.Item>
            </Stack>
          </div>
          <RecommendationsCards/>
        </Page>
      </DashboardLayout>
    </UserRoute>
  );
}

export default Dashboard;
