import { Button, DisplayText } from "@shopify/polaris";
import React from "react";

const BrandKit = ({ handleNext }) => {
  return (
    <>
      <DisplayText>Brand Kit</DisplayText>
      <Button size="large" onClick={handleNext}>
        Confirm Brand Styles
      </Button>
    </>
  );
};

export default BrandKit;
