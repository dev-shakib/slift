import { Card, Heading, Icon, Stack, Tooltip } from "@shopify/polaris";
import { QuestionMarkMajor } from "@shopify/polaris-icons";

// Styles
import styles from "../../BrandKit.module.scss";

// Component
import ColorsWithPreview from "./ColorsWithPreview";

// Functions
import brandKitFormModel from "../../../../helpers/brand-kit/formModel";

const {
  formFields: {
    sectionBackgroundColorPrimary,
    headingTextColorPrimary,
    bodyTextColorPrimary,
    saleTextColorPrimary,
    btnColorPrimary,
    btnTextColorPrimary,
  },
} = brandKitFormModel;

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
        <ColorsWithPreview
          sectionBackgroundColor={sectionBackgroundColorPrimary.name}
          headingTextColor={headingTextColorPrimary.name}
          bodyTextColor={bodyTextColorPrimary.name}
          saleTextColor={saleTextColorPrimary.name}
          btnColor={btnColorPrimary.name}
          btnTextColor={btnTextColorPrimary.name}
        />
      </Card.Section>
    </Card>
  );
};

export default Primary;
