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
import Preview from "./Preview";

const Accent1 = () => {
  return (
    <Card>
      <Card.Section
        title={
          <Stack alignment="center">
            <Heading>Accent 1</Heading>
            <Tooltip
              content="Accent is Lorem ipsum dolor"
              dismissOnMouseOut
              preferredPosition="above"
            >
              <Icon source={QuestionMarkMajor} color="base" />
            </Tooltip>
            <p className={styles.cardSubtitle}>
              Your accent colors are used for important callouts or calls to
              action, and are intended to draw attention.
            </p>
          </Stack>
        }
      >
        <Layout>
          <Layout.Section>
            <Stack distribution="fillEvenly" spacing="extraLoose">
              <ColorPicker label="Section Background" color="#FFFFFF" />
              <Stack vertical spacing="tight">
                <ColorPicker label="Heading Text" defaultColor="#121212" />
                <ColorPicker label="Body Text" defaultColor="#121212" />
                <ColorPicker label="Sale Text" defaultColor="#CCCCCC" />
              </Stack>
              <Stack vertical spacing="tight">
                <ColorPicker label="Button" defaultColor="#CCCCCC" />
                <ColorPicker label="Button Text" defaultColor="#121212" />
              </Stack>
            </Stack>
          </Layout.Section>
          <Layout.Section secondary>
            <Preview
              cardStyles={{ backgroundColor: "#FFFFFF" }}
              headingStyles={{ color: "#121212" }}
              btnStyles={{ backgroundColor: "#CCCCCC", color: "#121212" }}
              bodyStyles={{ color: "#121212" }}
            />
          </Layout.Section>
        </Layout>
      </Card.Section>
    </Card>
  );
};

export default Accent1;
