import * as React from "react";
import { UseFormHandleSubmit } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface ICustomFormProps {
  handleSubmit: UseFormHandleSubmit<{ [k: string]: any }>;
  onSubmit: (value: any) => void;
  children: React.ReactNode;
  className?: string;
}
export const CustomForm: React.FunctionComponent<ICustomFormProps> = ({
  handleSubmit,
  onSubmit,
  children,
  className,
}) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge("flex flex-col", className)}
    >
      {children}
    </form>
  );
};
