import { ReactNode } from "react";
import {
  CalendarIcon,
  DocumentsIcon,
  HomeIcon,
  InfoIcon,
  ProjectIcon,
  ReportIcon,
  WarningIcon,
  TeamIcon,
  ErrorIcon,
} from "../icons/index";
import { ButtonColor, ButtonSize, ModalType } from "../models";
import { CustomButton } from "../shared";

export const SIDE_MENU: { icon: ReactNode; title: string; link: string }[] = [
  {
    icon: <HomeIcon />,
    title: "Home",
    link: "home",
  },
  {
    icon: <TeamIcon />,
    title: "Team",
    link: "team",
  },
  {
    icon: <ProjectIcon />,
    title: "Projects",
    link: "projects",
  },
  {
    icon: <CalendarIcon />,
    title: "Calendar",
    link: "calendar",
  },
  {
    icon: <DocumentsIcon />,
    title: "Documents",
    link: "documents",
  },
  {
    icon: <ReportIcon />,
    title: "Reports",
    link: "reports",
  },
];

export const YOUR_TEAMS = [
  "Herocoins",
  "Supperman",
  "Batman",
  "Supperman",
  "Supperman",
  "Supperman",
];

export const BLUE = {
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

export const MODAL_ICON: { [key in ModalType]: ReactNode } = {
  info: <InfoIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
};

export const BUTTON_SIZE: { [key in ButtonSize]: string } = {
  small: "py-[3px] px-[9px] text-base",
  medium: "py-[5px] px-[15px] text-lg",
  large: "py-[7px] px-[21px] text-xl",
};

export const BUTTON_COLOR: { [key in ButtonColor]: string } = {
  primary: "bg-[rgb(25,118,210)] hover:bg-blue-800",
  error: "bg-[rgb(211,47,47)] hover:bg-red-800",
  warning: "bg-[rgb(250,173,20)] hover:bg-yellow-600",
  success: "bg-[rgb(46,125,50)] hover:bg-green-800",
};
export type Report = "Button" | "Modal";
export const REPORT_LIST: {
  key: Report;
  nodes: { name: string; nodes: { type: string; node: ReactNode }[] }[];
}[] = [
  {
    key: "Button",
    nodes: [
      {
        name: "Size",
        nodes: ["small", "medium", "large"].map((item) => ({
          type: item,
          node: <CustomButton size={item as ButtonSize}>{item}</CustomButton>,
        })),
      },
      {
        name: "Type",
        nodes: ["primary", "success", "warning", "error"].map((item) => ({
          type: item,
          node: <CustomButton color={item as ButtonColor}>{item}</CustomButton>,
        })),
      },
    ],
  },
];
const data = [
  {
    key: 1,
    value: "Tom",
  },
  {
    key: 2,
    value: "Jerry",
  },
  {
    key: 3,
    value: "Mie",
  },
];

export const CODE_BUTTON = [
  {
    key: "small",
    code: `<CustomButton size="small" />`,
  },
  {
    key: "medium",
    code: `<CustomButton size="medium" />`,
  },
  {
    key: "large",
    code: `<CustomButton size="large" />`,
  },
  {
    key: "primary",
    code: `<CustomButton color="primary" />`,
  },
  {
    key: "success",
    code: `<CustomButton color="success" />`,
  },
  {
    key: "warning",
    code: `<CustomButton color="warning" />`,
  },
  {
    key: "error",
    code: `<CustomButton color="error" />`,
  },
];

export const CODE_MODAL = [
  {
    key: "info",
    code: `
      <CustomModal
        open={isShowCode}
        title="Code"
        type="info"
        onClose={() => //do something}}
      >
        // Content
      </CustomModal>
    `,
  },
  {
    key: "error",
    code: `
      <CustomModal
        open={isShowCode}
        title="Code"
        type="error"
        onClose={() => //do something}}
      >
        // Content
      </CustomModal>
    `,
  },
  {
    key: "warning",
    code: `
      <CustomModal
        open={isShowCode}
        title="Code"
        type="warning"
        onClose={() => //do something}}
      >
        // Content
      </CustomModal>
    `,
  },
];

export const CODE_INPUT = [
  {
    key: "text",
    code: `
     <CustomInput placeholder="Enter..." />
    `,
  },
  {
    key: "area",
    code: `
     <CustomInput multiline placeholder="Text area..." />
    `,
  },
  {
    key: "form",
    code: `
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
    `,
  },
];
