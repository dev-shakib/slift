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
    sectionBackgroundColorAccent1,
    headingTextColorAccent1,
    bodyTextColorAccent1,
    saleTextColorAccent1,
    btnColorAccent1,
    btnTextColorAccent1,
  },
} = brandKitFormModel;

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
        <ColorsWithPreview
          sectionBackgroundColor={sectionBackgroundColorAccent1.name}
          headingTextColor={headingTextColorAccent1.name}
          bodyTextColor={bodyTextColorAccent1.name}
          saleTextColor={saleTextColorAccent1.name}
          btnColor={btnColorAccent1.name}
          btnTextColor={btnTextColorAccent1.name}
        />
      </Card.Section>
    </Card>
  );
};

export default Accent1;
