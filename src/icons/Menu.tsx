import * as React from "react";

interface IMenuIconProps {}

export const MenuIcon: React.FunctionComponent<IMenuIconProps> = (props) => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        width={"25px"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        ></path>
      </svg>
    </span>
  );
};
