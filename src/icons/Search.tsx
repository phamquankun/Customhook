import * as React from "react";

interface ISearchIconProps {
  onClick?: () => void;
  className?: string;
}

export const SearchIcon: React.FunctionComponent<ISearchIconProps> = (
  props
) => {
  return (
    <span onClick={props.onClick} className={props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#ccc"
        aria-hidden="true"
        width={20}
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>
  );
};