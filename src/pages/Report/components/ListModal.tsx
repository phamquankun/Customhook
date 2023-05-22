import * as React from "react";
import { CustomButton } from "../../../shared";
import { ButtonColor } from "../../../models";
import { CodeIcon } from "../../../icons";

interface IListModalProps {
  handleShowCode: (name: string, type: string) => void;
  onClick: (item: string) => void;
}

const ListModal: React.FunctionComponent<IListModalProps> = ({
  handleShowCode,
  onClick,
}) => {
  return (
    <>
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
    </>
  );
};

export default ListModal;
