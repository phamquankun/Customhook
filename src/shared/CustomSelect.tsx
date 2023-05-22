import Option, { optionClasses } from "@mui/base/Option";
import Popper from "@mui/base/Popper";
import Select, {
  selectClasses,
  SelectProps,
  SelectRootSlotProps,
} from "@mui/base/Select";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import { styled } from "@mui/system";
import * as React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type CustomSelectProps<T extends {}, P extends boolean> = {
  options: { key: number; value: string }[];
  control?: Control<any>;
  errors?: FieldErrors<any>;
  name: string;
  label?: string;
} & SelectProps<T, P>;

export const CustomSelect = React.forwardRef(function CustomSelect<
  TValue extends {},
  Multiple extends boolean
>(
  props: CustomSelectProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };
  return (
    <Select
      {...props}
      ref={ref}
      slots={slots}
      className={twMerge(
        `${
          Boolean(props.errors?.[props.name])
            ? "border-red-600"
            : "border-gray-400"
        } border-[1px]`,
        props.className
      )}
    >
      {props.options.map((item, index) => (
        <StyledOption value={item.key} key={index}>
          {item.value}
        </StyledOption>
      ))}
    </Select>
  );
});

export const SelectField = (props: CustomSelectProps<{}, false>) => {
  const { name, control, options, errors, className, label } = props;
  return (
    <div className="flex flex-col pt-4">
      <span className="font-semibold block pb-1">{label}</span>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <CustomSelect
              options={options}
              value={field.value}
              onChange={(_, value) => field.onChange(value)}
              name={field.name}
              errors={errors}
              className={className}
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
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const Button = React.forwardRef(function Button<
  TValue extends {},
  Multiple extends boolean
>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      <UnfoldMoreRoundedIcon />
    </button>
  );
});

const StyledButton = styled(Button, { shouldForwardProp: () => true })(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  position: relative;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &.${selectClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  `
);

const StyledOption = styled(Option)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;
