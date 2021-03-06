import { TitleBar } from "@shopify/app-bridge-react";
import { Button, DisplayText, Page } from "@shopify/polaris";
import classNames from "classnames";

import FullPage from "../layout/FullPage";
import styles from "./Start.module.scss";
import StartCards from "./start/StartCards";

const Start = ({ handleNext }) => {
  return (
    <Page>
      <FullPage>
        <TitleBar title="Welcome" />
        <div className={classNames("text-center", styles.title)}>
          <DisplayText element="h2" size="large">
            Welcome to Shoplift
          </DisplayText>
        </div>
        <div className={classNames("text-center", styles.subtitle)}>
          <DisplayText size="small">
            Here's how you can easily A/B test improvements to your store in
            minutes.
          </DisplayText>
        </div>
        <StartCards />
        <div className={styles.getStartedBtn}>
          <Button size="large" primary onClick={handleNext}>
            Get Started
          </Button>
        </div>
      </FullPage>
    </Page>
  );
};

export default Start;
