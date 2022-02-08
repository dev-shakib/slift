import { Button, DisplayText } from "@shopify/polaris";
import React from "react";

const ImportBrandStyles = ({ handleNext }) => {
  return (
    <>
      <DisplayText>
        Let's scan your store and import your brand styles
      </DisplayText>
      <Button size="large" onClick={handleNext}>
        Review Brand Kit
      </Button>
    </>
  );
};

export default ImportBrandStyles;
