import { Card, Heading, Icon, Stack, Tooltip } from "@shopify/polaris";
import { QuestionMarkMajor } from "@shopify/polaris-icons";

// Styles
import styles from "../../BrandKit.module.scss";

// Components
import ColorsWithPreview from "./ColorsWithPreview";

// Functions
import brandKitFormModel from "../../../../helpers/brand-kit/formModel";

const {
  formFields: {
    sectionBackgroundColorAccent2,
    headingTextColorAccent2,
    bodyTextColorAccent2,
    saleTextColorAccent2,
    btnColorAccent2,
    btnTextColorAccent2,
  },
} = brandKitFormModel;

const Accent2 = () => {
  return (
    <Card>
      <Card.Section
        title={
          <Stack alignment="center">
            <Heading>Accent 2</Heading>
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
        <ColorsWithPreview
          sectionBackgroundColor={sectionBackgroundColorAccent2.name}
          headingTextColor={headingTextColorAccent2.name}
          bodyTextColor={bodyTextColorAccent2.name}
          saleTextColor={saleTextColorAccent2.name}
          btnColor={btnColorAccent2.name}
          btnTextColor={btnTextColorAccent2.name}
        />
      </Card.Section>
    </Card>
  );
};

export default Accent2;
