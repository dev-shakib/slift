import { Card, Checkbox, Layout } from "@shopify/polaris";
import classNames from "classnames";

import styles from "../BrandKit.module.scss";
import Accent1 from "./colors/Accent1";
import Accent2 from "./colors/Accent2";
import Primary from "./colors/Primary";
import Secondary from "./colors/Secondary";

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
          <div className={classNames(styles.cardContent, styles.innerCards)}>
            <Primary />
            <Secondary />
            <Accent1 />
            <Accent2 />
          </div>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
};

export default Colors;
