import * as React from "react";
import { CustomButton, CustomSelect, SelectField } from "../../../shared";
import { CustomForm } from "../../../shared/CustomForm";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
interface IListSelectProps {}
type FormValue = {
  cartoon: number;
  movie: number;
};
const ListSelect: React.FunctionComponent<IListSelectProps> = (props) => {
  const schema = yup
    .object({
      cartoon: yup.number().required("Please select"),
      movie: yup.number().required("Please select"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      cartoon: undefined,
      movie: undefined,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit1 = (value: FormValue) => {};

  return (
    <div className="flex border-b-2 items-center border-gray-500 gap-[100px] py-8">
      <span className="font-semibold text-3xl min-w-[150px]">Select</span>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 items-center pl-3">
            <span className="min-w-[100px] block">Select Field</span>
            <CustomSelect
              name="select"
              options={[
                {
                  key: 1,
                  value: "Tom",
                },
                {
                  key: 2,
                  value: "Jerry",
                },
              ]}
            />
          </div>
        </div>
        <div className="flex gap-5 items-center pl-3">
          <span className="min-w-[100px] block">Form Select</span>
          <CustomForm handleSubmit={handleSubmit} onSubmit={onSubmit1}>
            <SelectField
              name="cartoon"
              label="Cartoon"
              control={control}
              errors={errors}
              options={[
                {
                  key: 1,
                  value: "Tom",
                },
                {
                  key: 2,
                  value: "Jerry",
                },
              ]}
            />
            <SelectField
              name="movie"
              label="Movie"
              control={control}
              errors={errors}
              options={[
                {
                  key: 1,
                  value: "Tom",
                },
                {
                  key: 2,
                  value: "Jerry",
                },
              ]}
            />
            <CustomButton type="submit">Submit</CustomButton>
          </CustomForm>
        </div>
      </div>
    </div>
  );
};

export default ListSelect;
