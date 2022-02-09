import { Frame, Loading } from "@shopify/polaris";
import React from "react";

const LoadingBar = () => (
  <div style={{ height: "100px" }}>
    <Frame>
      <Loading />
    </Frame>
  </div>
);

export default LoadingBar;
