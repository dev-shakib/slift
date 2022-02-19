import { Button, DisplayText, Page, Stack } from "@shopify/polaris";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import { userActions } from "../../store/user/slice";
import FullPage from "../layout/FullPage";
import styles from "./SetupDone.module.scss";

const SetupDone = () => {
  const dispatch = useDispatch();

  const handleCreateATest = () => {
    dispatch(userActions.completeOnboarding(true));
  };

  const handleGoToDashboard = () => {
    dispatch(userActions.completeOnboarding(false));
  };

  return (
    <Page>
      <FullPage>
        <div className={classNames("text-center", styles.title)}>
          <DisplayText element="h2" size="large">
            Your store is now set up.
          </DisplayText>
        </div>
        <div className={classNames("text-center", styles.subtitle)}>
          <DisplayText size="small">
            Do you want to create your first test now, or go to the dashboard
            and create a test later?
          </DisplayText>
        </div>
        <div className={styles.dashboardBtns}>
          <Stack vertical>
            <Button size="large" fullWidth primary onClick={handleCreateATest}>
              Create A Test
            </Button>
            <Button size="large" fullWidth onClick={handleGoToDashboard}>
              Go To Dashboard
            </Button>
          </Stack>
        </div>
      </FullPage>
    </Page>
  );
};

export default SetupDone;
