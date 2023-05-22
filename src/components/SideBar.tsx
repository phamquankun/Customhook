import * as React from "react";
import { SIDE_MENU, YOUR_TEAMS } from "../const";
import { SettingIcon } from "../icons";
import { useLocation, useNavigate } from "react-router-dom";

interface ISideBarProps {}

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-white border-r-2 side-bar flex flex-col justify-between gap-8 w-[300px] fixed top-0 left-0 bottom-0  p-[24px] overflow-y-auto">
      <div className="flex flex-col gap-10">
        <img
          src={
            "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          }
          alt="image"
          className="w-fit h-[32px] pl-2"
        />
        <div className="flex flex-col gap-3">
          {SIDE_MENU.map((item, index) => (
            <div
              key={index}
              className={`flex gap-2 p-2 items-center cursor-pointer hover:bg-gray-50 hover:font-semibold hover:text-indigo-700 ${
                location.pathname.includes(item.link)
                  ? "bg-gray-50 rounded-md text-indigo-700 font-semibold"
                  : ""
              }`}
              onClick={() => navigate(item.link)}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div>
          <span className="pl-2">Your team</span>
          {YOUR_TEAMS.map((item, index) => (
            <div
              key={index}
              className="p-2 flex gap-2 items-center hover:font-semibold hover:text-indigo-700 cursor-pointer hover:bg-gray-50"
            >
              <span className="py-1 px-2 rounded-lg border-2 border-solid border-gray-200">
                H
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex p-2 gap-2 hover:font-semibold hover:text-indigo-700 cursor-pointer hover:bg-gray-50">
        <SettingIcon />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default SideBar;
