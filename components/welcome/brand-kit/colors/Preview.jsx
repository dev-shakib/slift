import { Button } from "@shopify/polaris";
import { RefreshMajor } from "@shopify/polaris-icons";
import styles from "./Preview.module.scss";

const Preview = ({ cardStyles, headingStyles, btnStyles, bodyStyles }) => {
  return (
    <div className={styles.preview}>
      <div className={styles.previewContainer}>
        <div className="label">Preview</div>
        <div className={styles.previewCard} style={cardStyles}>
          <h2 className="heading" style={headingStyles}>
            THIS IS A HEADLINE
          </h2>
          <p className="body-text" style={bodyStyles}>
            This is a body paragraph that explains in more detail.
          </p>
          <button style={btnStyles}>Button</button>
        </div>
      </div>
      <Button icon={RefreshMajor}>Regenerate Preview</Button>
    </div>
  );
};

export default Preview;
