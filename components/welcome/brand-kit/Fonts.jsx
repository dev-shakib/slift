import {
  Card,
  Checkbox,
  Layout,
  Select,
  Stack,
} from "@shopify/polaris";
import classNames from "classnames";
import { Controller, useFormContext } from "react-hook-form";

// Styles
import styles from "../BrandKit.module.scss";

// Functions
import brandKitFormModel from "../../../helpers/brand-kit/formModel";

const {
  formFields: { fonts, headingsFont, bodyFont },
} = brandKitFormModel;

const HeadingsFontPreview = ({ fontFamily }) => (
  <div
    className={classNames(styles.headingsFontPreview, styles.fontPreview)}
    style={{ fontFamily: fontFamily }}
  >
    Heading
  </div>
);

const BodyFontPreview = ({ fontFamily }) => (
  <div
    className={classNames(styles.fontPreview, styles.bodyFontPreview)}
    style={{ fontFamily: fontFamily }}
  >
    Body Text
  </div>
);

const SHOPIFY_FONTS = [
  { label: "Bebas Neue", value: "Bebas Neue" },
  { label: "Trade Gothic", value: "Trade Gothic" },
  { label: "Open Sans", value: "Open Sans" },
  { label: "Tahoma", value: "Tahoma" },
  { label: "Verdana", value: "Verdana" },
];

const Fonts = () => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  const handleUploadFont = (e) => {
    const file = e.target.files[0];
    console.log("Uploaded font:", file);
  };

  const UploadFontButton = (
    <div className={styles.uploadFontBtn}>
      <div className="label" htmlFor="uploadHeadingsFont">
        Upload OTF or TTF
      </div>
      <label
        className={classNames(
          styles.uploadFontField,
          "Polaris-DropZone-FileUpload__Button"
        )}
      >
        <input
          type="file"
          name="uploadHeadingsFont"
          accept="application/x-font-opentype, application/x-font-ttf"
          // accept="image/png"
          onChange={handleUploadFont}
        />
        Upload
      </label>
    </div>
  );

  return (
    <Layout.Section>
      <Card>
        <Card.Section
          title={
            <div className={styles.cardTitleCheckbox}>
              <Controller
                name={fonts.name}
                control={control}
                render={({ field: { ref, ...fieldProps } }) => (
                  <Checkbox
                    {...fieldProps}
                    label={fonts.label}
                    checked={fieldProps.value}
                    error={errors?.[fonts.name]?.message}
                  />
                )}
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
                    <HeadingsFontPreview
                      fontFamily={watch(headingsFont.name)}
                    />
                    <Stack>
                      <div className={styles.selectShopifyFont}>
                        <Controller
                          name={headingsFont.name}
                          control={control}
                          render={({ field: { ref, ...fieldProps } }) => (
                            <Select
                              {...fieldProps}
                              label={
                                <span className="label">
                                  {headingsFont.label}
                                </span>
                              }
                              options={SHOPIFY_FONTS}
                              error={errors?.[headingsFont.name]?.message}
                            />
                          )}
                        />
                      </div>
                      {UploadFontButton}
                    </Stack>
                  </Card>
                </div>
                <div className={styles.grayCard}>
                  <div className="label">Body</div>
                  <Card sectioned>
                    <BodyFontPreview fontFamily={watch(bodyFont.name)} />
                    <Stack>
                      <div className={styles.selectShopifyFont}>
                        <Controller
                          name={bodyFont.name}
                          control={control}
                          render={({ field: { ref, ...fieldProps } }) => (
                            <Select
                              {...fieldProps}
                              label={
                                <span className="label">{bodyFont.label}</span>
                              }
                              options={SHOPIFY_FONTS}
                              error={errors?.[bodyFont.name]?.message}
                            />
                          )}
                        />
                      </div>
                      {UploadFontButton}
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
