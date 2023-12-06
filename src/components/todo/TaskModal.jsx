import ModalContext from "contexts/ModalContext";
import React, { useId, useContext } from "react";

import { Typography, Box, Stack, MenuItem, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Form, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "store/slice/todos";
import TodoDateCalendar from "components/TodoDateCalendar";
import { useAddTodoMutation } from "store/slice/todos/todosSlice";
import { getCategories } from "store/slice/category";
import CustomButton from "components/Button";

const TaskModal = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const categories = useSelector(getCategories);
  const categoryID = useId();
  const { control, register, reset } = useForm();
  const dispatch = useDispatch();
  const [createTask, { isLoading: isLoadingCreateTask }] = useAddTodoMutation();
  const handleOpen = () => {
    openModal({
      title: (
        <>
          <div onClick={(e) => closeModal()}>
            <CloseIcon
              sx={{ position: "absolute", right: "32px", cursor: "pointer" }}
            />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Task
          </Typography>
        </>
      ),
      children: (
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
      ),
    });
  };
  const handleSubmit = async (data) => {
    const task = await createTask(data.data).unwrap();
    dispatch(addTodo({ ...task }));
    reset();
    closeModal();
  };
  return (
    <CustomButton onClick={handleOpen} buttonClassName={"content-create-task"}>
      <span></span>
      <span></span>
    </CustomButton>
  );
};
export default TaskModal;
