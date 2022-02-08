import { Button, DisplayText } from "@shopify/polaris";

const Welcome = ({ handleNext }) => {
  return (
    <>
      <DisplayText>Welcome to Shoplift</DisplayText>
      <Button size="large" onClick={handleNext}>
        Get Started
      </Button>
    </>
  );
};

export default Welcome;
