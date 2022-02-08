import { Button, DisplayText, Heading, Page } from "@shopify/polaris";
import { useDispatch } from "react-redux";
import UserRoute from "../components/routes/UserRoute";
import * as authActions from "../store/auth/actions"

const Dashboard = () => {
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
      </Page>
    </UserRoute>
  );
};

export default Dashboard;
