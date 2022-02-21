import { Card, Checkbox, Layout } from "@shopify/polaris";
import classNames from "classnames";
import { Controller, useFormContext } from "react-hook-form";

import styles from "../BrandKit.module.scss";
import Accent1 from "./colors/Accent1";
import Accent2 from "./colors/Accent2";
import Primary from "./colors/Primary";
import Secondary from "./colors/Secondary";

import brandKitFormModel from "../../../helpers/brand-kit/formModel";

const {
  formFields: { colors },
} = brandKitFormModel;

const Colors = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Layout.Section>
      <Card>
        <Card.Section
          title={
            <div className={styles.cardTitleCheckbox}>
              <Controller
                name={colors.name}
                control={control}
                render={({ field: { ref, ...fieldProps } }) => (
                  <Checkbox
                    {...fieldProps}
                    label={colors.label}
                    checked={fieldProps.value}
                    error={errors?.[colors.name]?.message}
                  />
                )}
              />
            </div>
          }
        >
          <p className={styles.cardSubtitle}>
            Our optimized page sections will use the color schemes defined
            below.
          </p>
          <div className={classNames(styles.cardContent, styles.innerCards)}>
            <Primary />
            <Secondary />
            <Accent1 />
            <Accent2 />
          </div>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
};

export default Colors;
