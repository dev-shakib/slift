import { Button, DisplayText } from "@shopify/polaris";
import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user/slice";

const SetupDone = () => {
  const dispatch = useDispatch();

  const handleCompleteOnboarding = () => {
    dispatch(userActions.completeOnboarding());
  };

  return (
    <>
      <DisplayText>Your store is now set up.</DisplayText>
      <Button size="large" onClick={handleCompleteOnboarding}>
        Go to Dashboard
      </Button>
    </>
  );
};

export default SetupDone;
