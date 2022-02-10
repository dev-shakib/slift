import { Card, Heading, Layout } from "@shopify/polaris";
import classNames from "classnames";

import styles from "../Start.module.scss";

const StartCard = ({ title, content }) => {
  return (
    <Layout.Section oneThird>
      <Card sectioned>
        <div className="d-flex justify-content-center">
          <div className={styles.placeholderRound} />
        </div>
        <Card.Section>
          <div className="text-center">
            <h6 className={classNames("Polaris-Heading", styles.cardTitle)}>{title}</h6>
            <p className={styles.cardSubtitle}>{content}</p>
          </div>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
};

export default StartCard;
