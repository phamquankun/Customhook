import * as React from "react";
import {
  CheckboxField,
  CustomButton,
  CustomCheckbox,
  CustomForm,
  CustomRadio,
  RadioField,
} from "../../../shared";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IListRadioProps {}

const ListRadio: React.FunctionComponent<IListRadioProps> = (props) => {
  const [selected, setSelected] = React.useState<number>();

  type FormValue = {
    radio: number;
  };
  const schema = yup
    .object({
      radio: yup.string().required("Choose your option"),
    })
    .required();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      radio: 1,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit1 = (value: FormValue) => {
    alert(`check1-${value.radio}`);
  };

  const selectedRadio = watch("radio");

  return (
    <div className="flex border-b-2 items-center border-gray-500 gap-[100px] py-8">
      <span className="font-semibold text-3xl min-w-[150px]">Radio Button</span>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 items-center pl-3">
            <span className="min-w-[115px] block">Radio</span>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <CustomRadio
                label={item + " milk"}
                value={item}
                onChange={() => setSelected(item)}
                selected={selected}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 items-center pl-3">
            <span className="min-w-[115px] block">Radio Form</span>
            <CustomForm handleSubmit={handleSubmit} onSubmit={onSubmit1}>
              <RadioField
                name="radio"
                control={control}
                options={[
                  {
                    key: 1,
                    value: "male",
                  },
                  {
                    key: 2,
                    value: "female",
                  },
                  {
                    key: 3,
                    value: "both",
                  },
                  {
                    key: 4,
                    value: "other",
                  },
                ]}
                selectedRadio={selectedRadio}
                errors={errors}
              />
              <CustomButton type="submit">Submit</CustomButton>
            </CustomForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRadio;
