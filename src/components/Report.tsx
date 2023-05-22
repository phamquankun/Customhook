import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { sunburst } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CODE_BUTTON, CODE_MODAL, REPORT_LIST } from "../const";
import { CodeIcon } from "../icons";
import { ButtonColor } from "../models";
import {
  CustomButton,
  CustomInput,
  CustomModal,
  TextInputField,
} from "../shared";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomForm } from "../shared/CustomForm";

interface IReportProps {}

const Report: React.FunctionComponent<IReportProps> = (props) => {
  const [isShowInfo, setIsShowInfo] = React.useState(false);
  const [isShowError, setIsShowError] = React.useState(false);
  const [isShowWarning, setIsShowWarning] = React.useState(false);
  const [isShowCode, setIsShowCode] = React.useState(false);
  const [code, setCode] = React.useState("");

  const onClick = (item: string) => {
    switch (item) {
      case "error":
        setIsShowError(true);
        break;
      case "warning":
        setIsShowWarning(true);
        break;
      case "info":
        setIsShowInfo(true);
        break;
      default:
        setIsShowInfo(true);
        break;
    }
  };

  const handleShowCode = (name: string, type: string) => {
    setIsShowCode(true);
    switch (name) {
      case "button":
        setCode(CODE_BUTTON.find((item) => item.key === type)?.code as string);
        break;
      case "modal":
        setCode(CODE_MODAL.find((item) => item.key === type)?.code as string);
        break;
      default:
        break;
    }
  };
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
    <>
      <CustomModal
        open={isShowCode}
        title="Code"
        type="info"
        onClose={() => {
          setIsShowCode(false);
        }}
      >
        <SyntaxHighlighter
          language="typescript"
          style={sunburst}
          className="text-left"
        >
          {code}
        </SyntaxHighlighter>
      </CustomModal>
      <CustomModal
        open={isShowInfo}
        title="Info Modal"
        type="info"
        onClose={() => {
          setIsShowInfo(false);
        }}
      >
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sed tincidunt arcu. Morbi finibus, libero in commodo gravida, diam
          metus eleifend tellus
        </span>
      </CustomModal>
      <CustomModal
        open={isShowError}
        title="Error Modal"
        type="error"
        onClose={() => setIsShowError(false)}
      >
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sed tincidunt arcu. Morbi finibus, libero in commodo gravida, diam
          metus eleifend tellus
        </span>
      </CustomModal>
      <CustomModal
        open={isShowWarning}
        title="Warning Modal"
        type="warning"
        onClose={() => setIsShowWarning(false)}
      >
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sed tincidunt arcu. Morbi finibus, libero in commodo gravida, diam
          metus eleifend tellus
        </span>
      </CustomModal>
      <div className="py-8 px-5 flex flex-col flex-wrap">
        {REPORT_LIST.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-baseline border-b-2 border-gray-500 gap-[100px] py-8"
            >
              <span className="font-semibold text-3xl min-w-[150px]">
                {item.key}
              </span>
              {item.nodes.map((x, y) => (
                <div key={y} className="pl-3">
                  <span className="font-medium text-xl">{x.name}</span>
                  <div>
                    {x.nodes.map((z, w) => (
                      <div
                        key={w}
                        className="pl-4 flex gap-8 items-center py-2"
                      >
                        <span className="min-w-[120px]">Button {z.type}</span>
                        <div className="min-w-[100px]">{z.node}</div>
                        <div
                          className="cursor-pointer"
                          title="Show code"
                          onClick={() => handleShowCode("button", z.type)}
                        >
                          <CodeIcon />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
        <div className="flex items-center border-b-2 border-gray-500 gap-[100px] py-8">
          <span className="font-semibold text-3xl min-w-[150px]">Modal</span>
          {["info", "error", "warning"].map((item, index) => (
            <div key={index} className="flex gap-5 items-center pl-3">
              <span>Modal {item}</span>
              <CustomButton
                color={item === "info" ? "primary" : (item as ButtonColor)}
                onClick={() => onClick(item)}
              >
                {item}
              </CustomButton>
              <div
                className="cursor-pointer"
                onClick={() => handleShowCode("modal", item)}
              >
                <CodeIcon />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center border-b-2 border-gray-500 gap-[100px] py-8">
          <span className="font-semibold text-3xl min-w-[150px]">Input</span>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5 items-center pl-3">
              <span className="min-w-[100px] block">Text input</span>
              <CustomInput />
            </div>
            <div className="flex gap-5 items-center pl-3">
              <span className="min-w-[100px] block">Text Area</span>
              <CustomInput multiline />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
