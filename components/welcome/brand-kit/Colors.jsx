import { Card, Checkbox, Layout } from "@shopify/polaris";

import styles from "../BrandKit.module.scss";

const Colors = () => {
  return (
    <Layout.Section>
      <Card>
        <Card.Section
          title={
            <div className={styles.cardTitleCheckbox}>
              <Checkbox
                label="Colors"
                checked={true}
                // onChange={handleChange}
              />
            </div>
          }
        >
          <p className={styles.cardSubtitle}>
            Our optimized page sections will use the color schemes defined
            below.
          </p>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
};

export default Colors;
