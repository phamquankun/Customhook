import * as React from "react";
import { MenuIcon, SearchIcon } from "../icons";
import { Outlet } from "react-router-dom";
import Drawer from "./Drawer";

interface IContextProps {}

const Context: React.FunctionComponent<IContextProps> = (props) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [isShow, setIsShow] = React.useState(false);
  return (
    <>
      <div className="context ml-0 md:ml-[300px] h-full w-full flex flex-col">
        <div className="flex justify-between md:gap-0 gap-5 h-[64px] max-h-[64px] min-h-[64px] border-b-2 border-gray-200 items-center px-10">
          <div
            className="md:hidden block cursor-pointer"
            onClick={() => setIsShow(true)}
          >
            <MenuIcon />
          </div>
          <div className="flex gap-2 items-center flex-[2]">
            <SearchIcon
              onClick={() => ref.current?.focus()}
              className="cursor-pointer"
            />
            <input
              placeholder="Search..."
              ref={ref}
              className="w-full p-2 border-none  outline-none"
            />
          </div>
          <div className="pl-10 border-l-2 border-gray-200">
            <h1>AVT</h1>
          </div>
        </div>
        <div className="h-full">
          <Outlet />
        </div>
      </div>
      {isShow && <Drawer onClick={() => setIsShow(false)} />}
    </>
  );
};

export default Context;
