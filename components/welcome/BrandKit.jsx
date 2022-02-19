import {
  Button,
  Layout,
  Page,
  TextContainer,
} from "@shopify/polaris";

import ColorsCard from "./brand-kit/Colors";
import FontsCard from "./brand-kit/Fonts";
import LogosCard from "./brand-kit/Logos";
import styles from "./BrandKit.module.scss";

const BrandKit = ({ handleNext }) => {
  return (
    <Page fullWidth>
      <div className={styles.mainContent}>
        <div className={styles.titleArea}>
          <TextContainer>
            <h2 className={styles.title}>Here's what we found</h2>
            <div className={styles.subtitle}>
              Review your brand styles below and make sure everything looks
              good.
            </div>
          </TextContainer>
        </div>
        <Layout>
          <LogosCard />
          <FontsCard />
          <ColorsCard />
        </Layout>
        <div className={styles.confirmBtn}>
          <Button size="large" fullWidth primary onClick={handleNext}>Confirm Brand Styles</Button>
        </div>
      </div>
    </Page>
  );
};

export default BrandKit;
