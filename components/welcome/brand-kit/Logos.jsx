import { Card, Checkbox, DropZone, Layout } from "@shopify/polaris";
import styles from "../BrandKit.module.scss";

const Logos = () => {
  return (
    <Layout.Section>
      <Card>
        <Card.Section
          title={
            <div className={styles.cardTitleCheckbox}>
              <Checkbox
                label="Logos"
                checked={true}
                // onChange={handleChange}
              />
            </div>
          }
        >
          <p className={styles.cardSubtitle}>
            Our optimized page sections will use your logo at key moments to
            reinforce your brand.
          </p>
          <div className={styles.cardContent}>
            <Card.Subsection>
              <div className={styles.uploadLogo}>
                <DropZone
                  label={<span className="label">Logo</span>}
                  // type="image"
                  accept="image/png, image/svg+xml"
                  variableHeight={true}
                >
                  <DropZone.FileUpload
                    actionHint={
                      <span className="text-left">
                        <p>or drop files to upload</p>
                        <p> Max file size ~1MB</p>
                      </span>
                    }
                  />
                </DropZone>
              </div>
            </Card.Subsection>
          </div>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
};

export default Logos;
