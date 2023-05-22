import * as React from "react";
import {
  CheckboxField,
  CustomButton,
  CustomCheckbox,
  CustomForm,
} from "../../../shared";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IListCheckboxProps {}

const ListCheckbox: React.FunctionComponent<IListCheckboxProps> = (props) => {
  type FormValue = {
    check: number[];
  };
  const schema = yup
    .object({
      check: yup
        .array()
        .min(1, "Please select at least one option")
        .required("Please select at least one option"),
    })
    .required();

  const {
    control,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      check: [],
    },
    resolver: yupResolver(schema),
  });

  const onSubmit1 = (value: FormValue) => {
    console.log("value>>>>>>>>>.", value);
  };

  return (
    <div className="flex border-b-2 items-center border-gray-500 gap-[100px] py-8">
      <span className="font-semibold text-3xl min-w-[150px]">Checkbox</span>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 items-center pl-3">
            <span className="min-w-[115px] block">Checkbox</span>
            <CustomCheckbox
              label="Male"
              onChange={(e) => alert(`Change - ${e.target.checked}`)}
            />
            <CustomCheckbox label="Female" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 items-center pl-3">
            <span className="min-w-[115px] block">Checkbox Form</span>
            <CustomForm handleSubmit={handleSubmit} onSubmit={onSubmit1}>
              <CheckboxField
                name="check"
                control={control}
                errors={errors}
                options={[
                  {
                    key: 1,
                    value: "Check1",
                  },
                  {
                    key: 2,
                    value: "Check2",
                  },
                ]}
                defaultValue={getValues("check")}
              />
              <CustomButton type="submit">Submit</CustomButton>
            </CustomForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCheckbox;
