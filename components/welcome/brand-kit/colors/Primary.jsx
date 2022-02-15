import {
  Button,
  Card,
  Heading,
  Icon,
  Layout,
  Stack,
  Tooltip,
} from "@shopify/polaris";
import { QuestionMarkMajor } from "@shopify/polaris-icons";
import ColorPicker from "../../../form/ColorPicker";

import styles from "../../BrandKit.module.scss";

const Primary = () => {
  return (
    <Card>
      <Card.Section
        title={
          <Stack alignment="center">
            <Heading>Primary</Heading>
            <Tooltip
              content="Primary is Lorem ipsum dolor"
              dismissOnMouseOut
              preferredPosition="above"
            >
              <Icon source={QuestionMarkMajor} color="base" />
            </Tooltip>
            <p className={styles.cardSubtitle}>
              Your primary colors will be used by most custom sections and the
              majority of your page content.
            </p>
          </Stack>
        }
      >
        <Layout>
          <Layout.Section>
            <Stack>
              <ColorPicker />
            </Stack>
          </Layout.Section>
          <Layout.Section secondary>Preview</Layout.Section>
        </Layout>
      </Card.Section>
    </Card>
  );
};

export default Primary;
