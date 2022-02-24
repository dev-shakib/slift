import { Frame } from "@shopify/polaris";
import Sidebar from "../common/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <Frame navigation={<Sidebar />}>
      {children}
    </Frame>
  );
};

export default DashboardLayout;
