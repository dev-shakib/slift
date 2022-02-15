import {
  Card,
  Checkbox,
  DropZone,
  FormLayout,
  Layout,
  Select,
  Stack,
  Thumbnail,
} from "@shopify/polaris";
import classNames from "classnames";

import styles from "../BrandKit.module.scss";

const HeadingsFontPreview = () => (
  <div className={classNames(styles.headingsFontPreview, styles.fontPreview)}>
    Bebas Neue
  </div>
);

const BodyFontPreview = () => (
  <div className={classNames(styles.fontPreview, styles.bodyFontPreview)}>
    Trade Gothic
  </div>
);

const SHOPIFY_FONTS = [
  { label: "Bebas Neue", value: "bebasNeue" },
  { label: "Trade Gothic", value: "tradeGothic" },
  { label: "Open Sans", value: "openSans" },
  { label: "Tahoma", value: "tahoma" },
];

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
              />
            </div>
          }
        >
          <p className={styles.cardSubtitle}>
            Select your heading and body fonts so that they match your store, or
            upload the OTF or TTF font files directly.
          </p>
          <div className={styles.cardContent}>
            <Card.Subsection>
              <Stack>
                <div className={styles.grayCard}>
                  <div className="label">Headings</div>
                  <Card sectioned>
                    <HeadingsFontPreview />
                    <Stack>
                      <div className={styles.selectShopifyFont}>
                        <Select
                          label={<span className="label">Shopify Fonts</span>}
                          options={SHOPIFY_FONTS}
                          value="bebasNeue"
                        />
                      </div>
                      <div className={styles.uploadFontBtn}>
                        <DropZone
                          label={
                            <span className="label">Upload OTF or TTF</span>
                          }
                          accept="application/x-font-opentype, application/x-font-ttf"
                          outline={false}
                        >
                          <DropZone.FileUpload
                            actionTitle={
                              <div className="Polaris-DropZone-FileUpload__Button">
                                Upload
                              </div>
                            }
                            actionHint={null}
                          />
                        </DropZone>
                      </div>
                    </Stack>
                  </Card>
                </div>
                <div className={styles.grayCard}>
                  <div className="label">Body</div>
                  <Card sectioned>
                    <BodyFontPreview />
                    <Stack>
                      <div className={styles.selectShopifyFont}>
                        <Select
                          label={<span className="label">Shopify Fonts</span>}
                          options={SHOPIFY_FONTS}
                          value="tradeGothic"
                        />
                      </div>
                      <div className={styles.uploadFontBtn}>
                      <DropZone
                          label={
                            <span className="label">Upload OTF or TTF</span>
                          }
                          accept="application/x-font-opentype, application/x-font-ttf"
                          outline={false}
                        >
                          <DropZone.FileUpload
                            actionTitle={
                              <div className="Polaris-DropZone-FileUpload__Button">
                                Upload
                              </div>
                            }
                            actionHint={null}
                          />
                        </DropZone>
                      </div>
                    </Stack>
                  </Card>
                </div>
              </Stack>
            </Card.Subsection>
          </div>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
};

export default Fonts;
