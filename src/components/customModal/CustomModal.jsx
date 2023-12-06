import React, { useContext } from "react";
import ModalContext from "contexts/ModalContext";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  maxWidth: "100%",
  bgcolor: "#2E2E2E",
  border: "1px solid white",
  boxShadow: 24,
  borderRadius: "20px",
  color: "white",
  p: 4,
};

const CustomModal = (props) => {
  const { children, title, open } = props;
  const { closeModal } = useContext(ModalContext);

  return (
    <Modal
      onClose={closeModal}
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {title}
        {children}
      </Box>
    </Modal>
  );
};
export default CustomModal;
