import { TitleBar } from "@shopify/app-bridge-react";
import { Button, DisplayText } from "@shopify/polaris";
import React from "react";

const ImportBrandStyles = ({ handleNext }) => {
  return (
    <>
      <TitleBar title="Import Brand Styles" />
      <div className="text-center">
        <DisplayText>
          Let's scan your store and import your brand styles
        </DisplayText>
      </div>
      <Button size="large" onClick={handleNext}>
        Review Brand Kit
      </Button>
    </>
  );
};

export default ImportBrandStyles;
