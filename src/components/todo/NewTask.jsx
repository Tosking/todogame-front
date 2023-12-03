import React, { useId, useMemo, useState } from "react";

import {
  Modal,
  Typography,
  Box,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  Button,
  OutlinedInput,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Controller, Form, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "store/slice/todos";
import TodoDateCalendar from "components/TodoDateCalendar";
import { useAddTodoMutation } from "store/slice/todos/todosSlice";
import { getCategories } from "store/slice/category";

const NewTask = ({ setOpen, open }) => {
  const categories = useSelector(getCategories);
  const categoryID = useId();
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
        <div onClick={(e) => setOpen(false)}>
          <CloseIcon
            sx={{ position: "absolute", right: "32px", cursor: "pointer" }}
          />
        </div>

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

              <Box>
                <TextField
                  select={categories.length > 0 ? true : false}
                  id="outlined-read-only-input"
                  inputProps={{
                    readOnly: categories.length > 0 ? false : true,
                  }}
                  placeholder="Create a category"
                  defaultValue={""}
                  fullWidth
                  name="category"
                  {...register("category")}
                >
                  {categories.map((value, index) => {
                    return (
                      <MenuItem key={`${categoryID}-${index}`} value={value.id}>
                        {value.title}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </Box>
            </FormControl>

            <FormControl>
              <TodoDateCalendar register={register} />
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
