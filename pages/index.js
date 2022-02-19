import { Button, DisplayText, Heading, Page } from "@shopify/polaris";
import Link from "next/link";
import { useDispatch } from "react-redux";
import UserRoute from "../components/routes/UserRoute";
import * as authActions from "../store/auth/actions"

function Dashboard() {
  const dispatch = useDispatch()

  const handleSignout = () => {
    dispatch(authActions.signout())
  }
  
  return (
    <UserRoute>
      <Page>
        <DisplayText>Welcome to ShopLift App Dashboard 🎉</DisplayText>
        <Button plain monochrome onClick={handleSignout}>
          Sign out
        </Button>
        <Link href="/create-a-test">Create a Test</Link>
      </Page>
    </UserRoute>
  );
};

export default Dashboard;
