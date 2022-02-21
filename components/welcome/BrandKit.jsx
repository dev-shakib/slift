import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
import { Button, Layout, Page, TextContainer } from "@shopify/polaris";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import { TitleBar } from "@shopify/app-bridge-react";

// Components
import ColorsCard from "./brand-kit/Colors";
import FontsCard from "./brand-kit/Fonts";
import LogosCard from "./brand-kit/Logos";
import styles from "./BrandKit.module.scss";

// Functions
import BrandKitSchema from "../../helpers/brand-kit/validationSchema";
import brandKitFormModel from "../../helpers/brand-kit/formModel";

const BrandKit = ({ handleNext }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleSubmit, ...methods } = useForm({
    resolver: yupResolver(BrandKitSchema),
    defaultValues: {
      sectionBackgroundColorPrimary: "#1d1160",
      headingTextColorPrimary: "#e56020",
      bodyTextColorPrimary: "#f9a01b",
      saleTextColorPrimary: "#cccccc",
      btnColorPrimary: "#f9a01b",
      btnTextColorPrimary: "#000000",
      sectionBackgroundColorSecondary: "#5d76a9",
      headingTextColorSecondary: "#12173f",
      bodyTextColorSecondary: "#f5b112",
      saleTextColorSecondary: "#cccccc",
      btnColorSecondary: "#12173f",
      btnTextColorSecondary: "#707271",
      sectionBackgroundColorAccent1: "#00471b",
      headingTextColorAccent1: "#eee1c6",
      bodyTextColorAccent1: "#ffffff",
      saleTextColorAccent1: "#cccccc",
      btnColorAccent1: "#eee1c6",
      btnTextColorAccent1: "#00471b",
      sectionBackgroundColorAccent2: "#006bb6",
      headingTextColorAccent2: "#fdb927",
      bodyTextColorAccent2: "#ffffff",
      saleTextColorAccent2: "#cccccc",
      btnColorAccent2: "#fdb927",
      btnTextColorAccent2: "#26282a",
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    console.log("submitted values:", values);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    handleNext();
  };

  return (
    <Page fullWidth>
      <TitleBar title="Brand Kit" />
      <div className={styles.mainContent}>
        <div className={styles.titleArea}>
          <TextContainer>
            <h2 className={styles.title}>Here's what we found</h2>
            <div className={styles.subtitle}>
              Review your brand styles below and make sure everything looks
              good.
            </div>
          </TextContainer>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} id={brandKitFormModel.formId}>
            <Layout>
              <LogosCard />
              <FontsCard />
              <ColorsCard />
            </Layout>
            <div className={styles.confirmBtn}>
              <Button
                size="large"
                fullWidth
                primary
                submit
                loading={isSubmitting}
              >
                Confirm Brand Styles
              </Button>
            </div>
          </form>
        </FormProvider>
        <DevTool control={methods.control} />
      </div>
    </Page>
  );
};

export default BrandKit;
