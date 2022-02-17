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

const Secondary = () => {
  return (
    <Card>
      <Card.Section
        title={
          <Stack alignment="center">
            <Heading>Secondary</Heading>
            <Tooltip
              content="Secondary is Lorem ipsum dolor"
              dismissOnMouseOut
              preferredPosition="above"
            >
              <Icon source={QuestionMarkMajor} color="base" />
            </Tooltip>
            <p className={styles.cardSubtitle}>
            Your secondary colors will be used by sections to emphasize certain page content.
            </p>
          </Stack>
        }
      >
        <Layout>
          <Layout.Section>
            <Stack distribution="fillEvenly" spacing="extraLoose">
              <ColorPicker label="Section Background" color="#F0F0F0" />
              <Stack vertical spacing="tight">
                <ColorPicker label="Heading Text" defaultColor="#121212" />
                <ColorPicker label="Body Text" defaultColor="#121212" />
                <ColorPicker label="Sale Text" defaultColor="#CCCCCC" />
              </Stack>
              <Stack vertical spacing="tight">
                <ColorPicker label="Button" defaultColor="#121212" />
                <ColorPicker label="Button Text" defaultColor="#FFFFFF" />
              </Stack>
            </Stack>
          </Layout.Section>
          <Layout.Section secondary>
            <Preview
              cardStyles={{ backgroundColor: "#F0F0F0" }}
              headingStyles={{ color: "#121212" }}
              btnStyles={{ backgroundColor: "#121212", color: "#FFFFFF" }}
              bodyStyles={{ color: "#121212" }}
            />
          </Layout.Section>
        </Layout>
      </Card.Section>
    </Card>
  );
};

export default Secondary;
