import { TitleBar } from "@shopify/app-bridge-react";
import { Button, DisplayText, Icon, ProgressBar } from "@shopify/polaris";
import { CircleTickMajor } from "@shopify/polaris-icons";
import classNames from "classnames";
import { useState } from "react";

import FullPage from "../layout/FullPage";
import styles from "./ImportBrandStyles.module.scss";

const ImportBrandStyles = ({ handleNext }) => {
  const [isScanScreen, setIsScanScreen] = useState(false);
  const [progress, setProgress] = useState(0);

  const isScanning = progress !== 100;

  const handleScan = () => {
    setIsScanScreen(true);
    let timeLeft = 100;
    let fakeTimer = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(fakeTimer);
      }
      setProgress(100 - timeLeft);
      timeLeft -= 1;
    }, 100);
  };

  const Start = (
    <>
      <h2 className={classNames("text-center", styles.title)}>
        Let's scan your store and import your brand styles
      </h2>
      <div className={classNames("text-center", styles.subtitle)}>
        We'll take a look at your store's theme and automatically pull your
        styles into Shoplift.
      </div>
      <div className={styles.actionBtn}>
        <Button size="large" primary onClick={handleScan}>
          Scan My Store
        </Button>
      </div>
    </>
  );

  const Scan = (
    <>
      <h2 className={classNames("text-center", styles.title)}>
        {isScanning
          ? "Importing brand styles, this will only take a second"
          : "Brand styles successfully imported"}
      </h2>
      <div className={styles.progressBar}>
        <ProgressBar color="primary" progress={progress} size="small" />
        <span className={!isScanning && "done"}>
          <Icon color="success" source={CircleTickMajor} />
        </span>
      </div>
      <div className={classNames("text-center", styles.progressMessage)}>
        {isScanning ? (
          <>
            <p>Finding fonts...</p>
            <p>Locating logos...</p>
            <p>Coralling colors...</p>
          </>
        ) : (
          <p>Done!</p>
        )}
      </div>
      {!isScanning && (
        <div className={styles.actionBtn}>
          <Button size="large" primary onClick={handleNext}>
            Review Brand Kit
          </Button>
        </div>
      )}
    </>
  );

  return (
    <FullPage>
      <TitleBar title="Import Brand Styles" />
      {isScanScreen ? Scan : Start}
    </FullPage>
  );
};

export default ImportBrandStyles;
