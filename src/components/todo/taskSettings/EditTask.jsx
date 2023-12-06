import React, { useContext } from "react";
import { ReactComponent as EditTaskSVG } from "images/edittask.svg";
import ModalContext from "contexts/ModalContext";
import {
  FormControl,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { Form, useForm } from "react-hook-form";

const EditTask = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const { control, register, reset } = useForm();
  const hadnelOpen = () => {
    openModal({
      title: (
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Task
        </Typography>
      ),
      children: (
        <Form control={control}>
          <Stack spacing={3}>
            <FormControl>
              <TextField
                label="New Title"
                variant="standard"
                id="standard-basic"
              ></TextField>
            </FormControl>
            <FormControl>
              <TextField
                label="New Description"
                variant="standard"
                id="standard-basic"
              ></TextField>
            </FormControl>
            <Button
              type="submit"
              variant="outlined"
              sx={{ borderColor: "white", color: "white" }}
            >
              Change
            </Button>
          </Stack>
        </Form>
      ),
    });
  };

  return (
    <button onClick={hadnelOpen} style={{ backgroundColor: "transparent" }}>
      <EditTaskSVG />
    </button>
  );
};
export default EditTask;
