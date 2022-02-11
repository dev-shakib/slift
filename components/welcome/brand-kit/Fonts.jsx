import { Card, Checkbox, Layout } from "@shopify/polaris";

import styles from "../BrandKit.module.scss";

const Fonts = () => {
  return (
    <Layout.Section>
      <Card>
        <Card.Section
          title={
            <div className={styles.cardTitleCheckbox}>
              <Checkbox
                label="Fonts"
                checked={true}
                // onChange={handleChange}
              />
            </div>
          }
        >
          <p className={styles.cardSubtitle}>
            Select your heading and body fonts so that they match your store, or
            upload the OTF or TTF font files directly.
          </p>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
};

export default Fonts;
