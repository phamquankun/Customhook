import * as React from "react";

interface IReportIconProps {}

export const ReportIcon: React.FunctionComponent<IReportIconProps> = (
  props
) => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={"25px"}
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="axk brh nx rz um"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
        ></path>
      </svg>
    </span>
  );
};
