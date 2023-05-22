import Input, { InputProps } from "@mui/base/Input";
import * as React from "react";
import { styled } from "@mui/system";
import { Control, Controller, FieldErrors } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";

type CustomCheckbox = {
  label?: string;
} & InputProps;
export const CustomCheckbox = React.forwardRef(function CustomInput(
  props: CustomCheckbox,
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
            type: "checkbox",
            className: `${
              props.error ? "!text-red-500" : ""
            } outline-none w-[25px] h-[25px]`,
            defaultChecked: Boolean(props.defaultChecked),
          },
        }}
      />
      <span className="font-semibold">{props.label}</span>
    </div>
  );
});

type CheckboxProps = {
  control: Control<any>;
  errors?: FieldErrors<any>;
  name: string;
  label?: string;
  options: { key: number; value: string }[];
} & InputProps;

export const CheckboxField = ({
  name,
  control,
  label,
  options,
  defaultValue,
  errors,
}: CheckboxProps) => {
  const [values, setValues] = React.useState<number[]>([]);

  return (
    <>
      <div className="flex gap-4">
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              <>
                {options.map((item, index) => (
                  <CustomCheckbox
                    {...field}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setValues([...values, item.key]);
                        field.onChange([...values, item.key]);
                      } else {
                        setValues(values.slice(0, values.length - 1));
                        field.onChange(values.slice(0, values.length - 1));
                      }
                    }}
                    key={index}
                    label={item.value}
                    error={Boolean(errors?.[name])}
                  />
                ))}
              </>
            );
          }}
        />
        <span className="font-semibold">{label}</span>
      </div>
      {errors?.[name] && (
        <span className="text-red-500 opacity-100 transition-all ease-out duration-[3000ms]">
          {errors[name]?.message?.toString() || ""}
        </span>
      )}
    </>
  );
};

const StyledInputElement = styled(Checkbox)(({ theme }) => ``);
