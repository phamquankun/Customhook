import Input, { InputProps } from "@mui/base/Input";
import { styled } from "@mui/system";
import * as React from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export const CustomInput = React.forwardRef(function CustomInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <Input
      slots={{ input: StyledInputElement }}
      slotProps={{
        input: {
          className: twMerge(
            `${
              Boolean(props.error) ? "border-red-600" : "border-gray-400"
            } border-[1px] w-full`,
            props.className
          ),
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

type InputType<T extends FieldValues> = {
  control: Control<T>;
  errors?: FieldErrors<T>;
  name: keyof T;
  label?: string;
} & InputProps;

export const TextInputField: React.FunctionComponent<InputType<any>> = ({
  name,
  control,
  errors,
  label,
  ...rest
}) => {
  return (
    <div className="pt-4">
      <span className="font-semibold block pb-1">{label}</span>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <CustomInput
              {...field}
              {...rest}
              error={Boolean(errors?.[name]?.type)}
            />
          );
        }}
      />
      {errors?.[name] && (
        <span className="text-red-500 opacity-100 transition-all ease-out duration-[3000ms]">
          {errors[name]?.message?.toString() || ""}
        </span>
      )}
    </div>
  );
};

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
