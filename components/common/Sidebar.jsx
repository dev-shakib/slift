import { Navigation } from "@shopify/polaris";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { TransferOutMajor } from "@shopify/polaris-icons";

// Components
import DashboardIcon from "../svg/DashboardIcon";
import AnalyticsIcon from "../svg/AnalyticsIcon";
import RecommendationsIcon from "../svg/RecommendationsIcon";
import SettingsIcon from "../svg/SettingsIcon";
import TestsIcon from "../svg/TestsIcon";
import * as authActions from "../../store/auth/actions";

const Sidebar = () => {
  const { pathname } = useRouter();
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(authActions.signout());
  };

  return (
    <Navigation location={pathname}>
      <Navigation.Section
        fill
        items={[
          {
            url: "/",
            label: "Dashboard",
            icon: DashboardIcon,
            exactMatch: true,
          },
          {
            url: "/tests",
            label: "Tests",
            icon: TestsIcon,
          },
          {
            url: "/analytics",
            label: "Analytics",
            icon: AnalyticsIcon,
          },
          {
            url: "/recommendations",
            label: "Recommendations",
            icon: RecommendationsIcon,
          },
          {
            url: "/settings",
            label: "Settings",
            icon: SettingsIcon,
          },
        ]}
      />
      <Navigation.Section
        items={[
          { label: "Sign Out", icon: TransferOutMajor, onClick: handleSignout },
        ]}
      />
    </Navigation>
  );
};

export default Sidebar;
