import * as React from "react";
import { sunburst } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CODE_BUTTON, CODE_INPUT, CODE_MODAL } from "../../const";
import { CustomModal } from "../../shared";
import ListButton from "./components/ListButton";
import ListInput from "./components/ListInput";
import ListModal from "./components/ListModal";
import ListSelect from "./components/ListSelect";

import SyntaxHighlighter from "react-syntax-highlighter";
import ListCheckbox from "./components/ListCheckbox";
import ListRadio from "./components/ListRadio";

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
      case "input":
        setCode(CODE_INPUT.find((item) => item.key === type)?.code as string);
        break;
      default:
        break;
    }
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
        className="w-fit"
      >
        <SyntaxHighlighter
          language="react"
          wrapLongLines
          style={sunburst}
          useInlineStyles
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
        <ListButton handleShowCode={handleShowCode} />
        <ListModal handleShowCode={handleShowCode} onClick={onClick} />
        <ListInput handleShowCode={handleShowCode} />
        <ListSelect />
        <ListCheckbox />
        <ListRadio />
      </div>
    </>
  );
};

export default Report;
