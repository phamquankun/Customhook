import Modal, { ModalProps } from "@mui/base/Modal";
import * as React from "react";
import { MODAL_ICON } from "../const";
import { ModalType } from "../models";
import { CustomButton } from "./CustomButton";
import { twMerge } from "tailwind-merge";

interface ICustomModalProps extends ModalProps {
  type?: ModalType;
  title: string;
  onClose?: () => void;
  className?: string;
}
export const CustomModal: React.FunctionComponent<ICustomModalProps> = ({
  open = false,
  children,
  type = "info",
  title,
  onClose,
  className,
}) => {
  return (
    <Modal
      open={open}
      className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
    >
      <>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
          className={twMerge(
            "min-w-[420px] max-w-[550px] min-h-[160px] rounded-md bg-white flex flex-col gap-5 items-center justify-center outline-none py-6 px-4",
            className
          )}
        >
          <div className="flex items-center flex-col justify-center gap-2">
            {MODAL_ICON[type]}
            <span className="font-semibold text-2xl">{title}</span>
          </div>
          <div className="text-center">{children}</div>
          <div className="flex gap-2">
            <CustomButton onClick={onClose}>Close</CustomButton>
          </div>
        </div>
      </>
    </Modal>
  );
};
