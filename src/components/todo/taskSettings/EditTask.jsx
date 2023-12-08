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
import { useChangeTaskMutation } from "store/slice/todos/todosSlice";
import { useDispatch } from "react-redux";
import { changeTask } from "store/slice/todos";

const EditTask = ({ id }) => {
  const { openModal, closeModal } = useContext(ModalContext);
  const { control, register, reset } = useForm();
  const [changeTaskReq, isLoading] = useChangeTaskMutation();
  const dispatch = useDispatch();
  const handleSubmit = async (data) => {
    const obj = { id, ...data.data };

    const updateTask = await changeTaskReq(obj).unwrap();

    dispatch(changeTask(updateTask));
    closeModal();
  };
  const hadnelOpen = () => {
    openModal({
      title: (
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Task
        </Typography>
      ),
      children: (
        <Form control={control} onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl>
              <TextField
                label="New Title"
                variant="standard"
                id="standard-basic"
                {...register("title")}
              ></TextField>
            </FormControl>
            <FormControl>
              <TextField
                label="New Description"
                variant="standard"
                id="standard-basic"
                {...register("description")}
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
