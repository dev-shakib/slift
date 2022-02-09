import { Card, Layout } from "@shopify/polaris";
import styles from "../Start.module.scss";
import StartCard from "./StartCard";

const cards = [
  {
    title: "1. Import your brand styles",
    content:
      "We'll scan your store and automatically import your brand styles.",
  },
  {
    title: "2. Create and edit your test",
    content:
      "Select a page to improve, choose a goal and an audience, and edit your new version",
  },
  {
    title: "3. Launch your test!",
    content:
      "Launch your test and see how it performs with realtime analytics and insights.",
  },
];

const StartCards = () => {
  return (
    <div className={styles.cards}>
      <Layout>
        {cards.map((card) => (
          <StartCard
            key={card.title}
            title={card.title}
            content={card.content}
          />
        ))}
      </Layout>
    </div>
  );
};

export default StartCards;
