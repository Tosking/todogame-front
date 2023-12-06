import React, { useState } from "react";
import ModalContext from "./ModalContext";
import CustomModal from "components/customModal/CustomModal";
const ModalContextProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (modalConfig) => {
    setModalContent(modalConfig);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };
  const valueModalProvider = {
    openModal,
    closeModal,
  };
  return (
    <ModalContext.Provider value={valueModalProvider}>
      {<CustomModal {...modalContent} open={modalOpened} />}
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;
