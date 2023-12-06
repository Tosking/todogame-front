import { createContext } from "react";

const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});
export default ModalContext;
