import {
  Card,
  Heading,
  Icon,
  Stack,
  Tooltip,
} from "@shopify/polaris";
import { QuestionMarkMajor } from "@shopify/polaris-icons";

// Styles
import styles from "../../BrandKit.module.scss";

// Components
import ColorsWithPreview from "./ColorsWithPreview";

// Functions
import brandKitFormModel from "../../../../helpers/brand-kit/formModel";

const {
  formFields: {
    sectionBackgroundColorSecondary,
    headingTextColorSecondary,
    bodyTextColorSecondary,
    saleTextColorSecondary,
    btnColorSecondary,
    btnTextColorSecondary,
  },
} = brandKitFormModel;

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
              Your secondary colors will be used by sections to emphasize
              certain page content.
            </p>
          </Stack>
        }
      >
        <ColorsWithPreview
          sectionBackgroundColor={sectionBackgroundColorSecondary.name}
          headingTextColor={headingTextColorSecondary.name}
          bodyTextColor={bodyTextColorSecondary.name}
          saleTextColor={saleTextColorSecondary.name}
          btnColor={btnColorSecondary.name}
          btnTextColor={btnTextColorSecondary.name}
        />
      </Card.Section>
    </Card>
  );
};

export default Secondary;
