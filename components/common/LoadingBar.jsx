import { Frame, Loading } from "@shopify/polaris";
import { useEffect, useState } from "react";

const LoadingBar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div style={{ height: "100px" }}>
        <Frame>
          <Loading />
        </Frame>
      </div>
    )
  );
};

export default LoadingBar;
