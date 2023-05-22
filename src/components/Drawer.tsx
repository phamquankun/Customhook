import * as React from "react";
import SideBar from "./SideBar";
import Button from "@mui/base/Button";

interface IDrawerProps {
  onClick: () => void;
}

const Drawer: React.FunctionComponent<IDrawerProps> = (props) => {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 left-0 right-0 md:hidden block"
      onClick={props.onClick}
    >
      <SideBar />
      <Button>Click Me</Button>
    </div>
  );
};

export default Drawer;
