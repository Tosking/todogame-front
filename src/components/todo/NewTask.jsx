import React, { useMemo } from "react";

import {
  Modal,
  Typography,
  Box,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import { Form, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";

import { useDispatch } from "react-redux";
import { addTodo } from "store/slice/todos";
import TodoDateCalendar from "components/TodoDateCalendar";
import { useAddTodoMutation } from "store/slice/todos/todosSlice";

const NewTask = ({ setOpen, open }) => {
  const { control, register, reset } = useForm();
  const dispatch = useDispatch();
  const [createTask, { isLoading: isLoadingCreateTask }] = useAddTodoMutation();
  const style = useMemo(() => {
    return {
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
  }, []);

  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const handleSubmit = async (data) => {
    const task = await createTask(data.data).unwrap();
    console.log(task);
    dispatch(addTodo({ ...task }));
    reset();
    setOpen(false);
  };
  return (
    <Modal
      onClose={handleClose}
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          New Task
        </Typography>
        <Form control={control} onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl>
              <TextField
                id="standard-basic"
                label="Task name"
                variant="standard"
                InputLabelProps={{ sx: { color: "#B0B0B0" } }}
                {...register("title")}
              />
            </FormControl>
            <FormControl>
              <TextField
                id="standard-basic"
                label="About task"
                variant="standard"
                InputLabelProps={{ sx: { color: "#B0B0B0" } }}
                {...register("description")}
              />
            </FormControl>
            <FormControl sx={{ display: "flex", gap: "10px" }}>
              <Typography>Categories</Typography>

              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
              >
                <MenuItem>Food</MenuItem>
                <MenuItem>Animal</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <TodoDateCalendar />
            </FormControl>

            <Button
              type="submit"
              variant="outlined"
              sx={{ borderColor: "white", color: "white" }}
            >
              Create Task
            </Button>
          </Stack>
        </Form>
      </Box>
    </Modal>
  );
};

export default NewTask;
