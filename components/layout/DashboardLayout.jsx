import { Frame } from "@shopify/polaris";

import Sidebar from "../common/Sidebar";
import styles from "./DashboardLayout.module.scss";

const DashboardLayout = ({ children }) => {
  return (
    <Frame navigation={<Sidebar />}>
      <div className={styles.mainContainer}>{children}</div>
    </Frame>
  );
};

export default DashboardLayout;
