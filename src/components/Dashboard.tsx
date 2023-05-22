import React from "react";
import Context from "./Content";
import SideBar from "./SideBar";
import Drawer from "./Drawer";
import { useWindowSize } from "../hooks";
interface IDashboardProps {}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
  const size = useWindowSize();
  return (
    <div className="dashboard flex h-screen">
      {size.width && size.width >= 768 && <SideBar />}
      <Context />
      {/* <Drawer /> */}
    </div>
  );
};

export default Dashboard;
