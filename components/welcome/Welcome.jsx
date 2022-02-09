import { TitleBar } from "@shopify/app-bridge-react";
import {
  Button,
  Card,
  DisplayText,
  Heading,
  Layout,
  Page,
  SkeletonThumbnail,
  Stack,
} from "@shopify/polaris";
import classNames from "classnames";
import FullPage from "../layout/FullPage";

import styles from "./Welcome.module.scss";

const Welcome = ({ handleNext }) => {
  return (
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
      
      <Button size="large" onClick={handleNext}>
        Get Started
      </Button>
    </FullPage>
  );
};

export default Welcome;
