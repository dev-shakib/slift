import { DisplayText, Frame, Page } from "@shopify/polaris";
import React, { useState } from "react";

import StartPage from "../components/welcome/Start";
import ImportBrandStylesPage from "../components/welcome/ImportBrandStyles";
import BrandKitPage from "../components/welcome/BrandKit";
import SetupDonePage from "../components/welcome/SetupDone";
import OnboardingRoute from "../components/routes/OnboadingRoute";

function WelcomePage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleGoNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const renderCurrentStepForm = () => {
    switch (activeStep) {
      case 0:
        return <StartPage handleNext={handleGoNextStep} />;
      case 1:
        return <ImportBrandStylesPage handleNext={handleGoNextStep} />;
      case 2:
        return <BrandKitPage handleNext={handleGoNextStep} />;
      case 3:
        return <SetupDonePage handleNext={handleGoNextStep} />;
      default:
        return (
          <DisplayText size="extraLarge">This page not found.</DisplayText>
        );
    }
  };

  return (
    <OnboardingRoute>
      <Frame>{renderCurrentStepForm()}</Frame>
    </OnboardingRoute>
  );
}

export default WelcomePage;
