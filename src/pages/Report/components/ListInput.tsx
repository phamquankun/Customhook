import * as React from "react";
import { CustomButton, CustomInput, TextInputField } from "../../../shared";
import { CustomForm } from "../../../shared/CustomForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CodeIcon } from "../../../icons";
interface IListInputProps {
  handleShowCode: (name: string, type: string) => void;
}

const ListInput: React.FunctionComponent<IListInputProps> = ({
  handleShowCode,
}) => {
  type FormValue = {
    email: string;
    user: string;
  };
  const schema = yup
    .object({
      email: yup.string().required("Email is required"),
      user: yup.string().required("Name is required"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      email: "",
      user: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: FormValue) => {
    alert(`Email: ${values.email} - Name: ${values.user}`);
  };

  return (
    <div className="flex items-center border-b-2 border-gray-500 gap-[100px] py-8">
      <span className="font-semibold text-3xl min-w-[150px]">Input</span>
      <div className="flex flex-col gap-4">
        <div className="flex gap-5 items-center pl-3">
          <span className="min-w-[100px] block">Text input</span>
          <CustomInput placeholder="Enter..." />
          <div
            className="cursor-pointer"
            onClick={() => handleShowCode("input", "text")}
          >
            <CodeIcon />
          </div>
        </div>
        <div className="flex gap-5 items-center pl-3">
          <span className="min-w-[100px] block">Text Area</span>
          <CustomInput multiline placeholder="Text area..." />
          <div
            className="cursor-pointer"
            onClick={() => handleShowCode("input", "area")}
          >
            <CodeIcon />
          </div>
        </div>
        <div className="flex gap-5 items-center pl-3">
          <span className="min-w-[100px] block">Form</span>
          <CustomForm handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <TextInputField
              control={control}
              name="user"
              errors={errors}
              label="User Name"
              placeholder="Enter your user name"
            />
            <TextInputField
              control={control}
              name="email"
              errors={errors}
              label="Email"
              placeholder="Enter your email"
            />
            <CustomButton type="submit">Submit</CustomButton>
          </CustomForm>
          <div
            className="cursor-pointer"
            onClick={() => handleShowCode("input", "form")}
          >
            <CodeIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListInput;
