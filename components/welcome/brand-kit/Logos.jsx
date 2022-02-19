import {
  Card,
  Checkbox,
  DropZone,
  Layout,
  Stack,
  Thumbnail,
} from "@shopify/polaris";
import { useState } from "react";
import styles from "../BrandKit.module.scss";

const Logos = () => {
  const [logo, setLogo] = useState();

  // const acceptedLogoTypes = ["image/png", "image/svg+xml"];
  const handleUploadLogo = ({ acceptedFiles }) => {
    console.log(acceptedFiles)
    setLogo(acceptedFiles[0]);
  };

  const fileUpload = !logo && (
    <DropZone.FileUpload
      actionHint={
        <span className="text-left">
          <p>or drop a file to upload</p>
          <p> Max file size ~1MB</p>
        </span>
      }
    />
  );

  const uploadedLogo = logo && (
    <Stack>
      <Thumbnail
        size="small"
        alt={logo.name}
        source={window.URL.createObjectURL(logo)}
      />
    </Stack>
  );

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
                  allowMultiple={false}
                  variableHeight={true}
                  onDrop={handleUploadLogo}
                >
                  {uploadedLogo}
                  {fileUpload}
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
