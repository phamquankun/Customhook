import ButtonUnstyled, { ButtonProps } from "@mui/base/Button";
import useButton from "@mui/base/useButton";
import * as React from "react";
import { BUTTON_COLOR, BUTTON_SIZE } from "../const";
import { ButtonColor, ButtonSize } from "../models";
import { twMerge } from "tailwind-merge";

interface ICustomButtonProps extends ButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
}

export const CustomButton = React.forwardRef(function (
  props: ICustomButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const {
    children,
    size = "medium",
    color = "primary",
    className,
    disabled,
    ...rest
  } = props;

  const { getRootProps } = useButton({
    ...props,
    rootRef: ref,
  });

  return (
    <ButtonUnstyled
      className={twMerge(
        `${BUTTON_SIZE[size]} ${BUTTON_COLOR[color]} my-4 rounded text-white outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`,
        className
      )}
      {...rest}
      {...getRootProps()}
    >
      {children}
    </ButtonUnstyled>
  );
});
