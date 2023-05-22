import { useCallback, useEffect, useState } from "react";
import { HttpError } from "../models";

export const useHandleError = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAuthen, setModalAuthen] = useState(false);
  const [message, setMessage] = useState("");

  const handleError = (error: HttpError) => {
    console.log("dau ham");
    setMessage("abcd");
    if (error.unauthorized) {
      setModalAuthen(true);
    } else {
      setModalOpen(true);
    }
    console.log("cuoi ham ham");
  };

  const closeModal = () => {
    // setModalOpen(false);
  };

  const closeModalAuthen = () => {
    // setModalAuthen(false);
  };

  return {
    handleError,
    modalOpen,
    modalAuthen,
    closeModal,
    closeModalAuthen,
    message,
  };
};
