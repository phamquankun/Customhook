import Input, { InputProps } from "@mui/base/Input";
import * as React from "react";
import { styled } from "@mui/system";
import { Control, Controller, FieldErrors } from "react-hook-form";
import Radio from "@mui/material/Radio";

type CustomRadio = {
  label?: string;
  selected?: number;
} & InputProps;

export const CustomRadio = React.forwardRef(function CustomInput(
  props: CustomRadio,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className="flex items-center gap-2">
      <Input
        {...props}
        ref={ref}
        slots={{ input: StyledInputElement }}
        slotProps={{
          input: {
            type: "radio",
            className: `${
              props.error ? "!text-red-500" : ""
            } outline-none w-[25px] h-[25px]`,
            checked: Number(props.value) === Number(props.selected),
          },
        }}
      />
      <span className={`${props.error ? "!text-red-500" : ""} font-semibold`}>
        {props.label}
      </span>
    </div>
  );
});

type RadioFieldProps = {
  control: Control<any>;
  errors?: FieldErrors<any>;
  name: string;
  label?: string;
  options: { key: number; value: string }[];
  selectedRadio?: number;
} & InputProps;

export const RadioField = ({
  name,
  control,
  label,
  errors,
  options,
  selectedRadio,
  ...props
}: RadioFieldProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              <>
                {options.map((item, index) => (
                  <div key={index}>
                    <CustomRadio
                      {...field}
                      {...props}
                      value={item.key}
                      label={item.value}
                      selected={selectedRadio}
                      error={Boolean(errors?.[name])}
                    />
                  </div>
                ))}
              </>
            );
          }}
        />
        <span className="">{label}</span>
      </div>

      {errors?.[name] && (
        <span className="text-red-500 opacity-100 transition-all ease-out duration-[3000ms]">
          {errors[name]?.message?.toString() || ""}
        </span>
      )}
    </div>
  );
};

const StyledInputElement = styled(Radio)(({ theme }) => ``);
