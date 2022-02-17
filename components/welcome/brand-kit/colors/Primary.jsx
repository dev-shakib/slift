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
              btnStyles={{ backgroundColor: "#cccccc", color: "#121212" }}
              bodyStyles={{ color: "#121212" }}
            />
          </Layout.Section>
        </Layout>
      </Card.Section>
    </Card>
  );
};

export default Primary;
