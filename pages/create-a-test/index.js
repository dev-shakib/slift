import { Button, DisplayText, Page } from "@shopify/polaris";
import Link from "next/link";
import UserRoute from "../../components/routes/UserRoute";

function CreateATestHomepage() {
  return (
    <UserRoute>
      <Page>
        <DisplayText>Select a page to test in Homepage</DisplayText>
        <Link href="/">Back to Dashboard</Link>
      </Page>
    </UserRoute>
  );
}

export default CreateATestHomepage;
