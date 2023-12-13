import { createContext } from "react";

const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
  updateModal: () => {},
});
export default ModalContext;
