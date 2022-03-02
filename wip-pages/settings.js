import { DisplayText, Page } from "@shopify/polaris";
import DashboardLayout from "../components/layout/DashboardLayout";

function SettingsPage() {
  return (
    <DashboardLayout>
      <Page>
        <DisplayText>Settings</DisplayText>
      </Page>
    </DashboardLayout>
  );
}

export default SettingsPage;
