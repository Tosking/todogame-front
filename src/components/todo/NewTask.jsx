import React, { useEffect, useMemo } from "react";

import { Modal, Typography, Box, Stack } from "@mui/material";
import { Form, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import Button from "components/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "store/slice/todos";

const NewTask = ({ setOpen, open }) => {
  const { control, register, reset } = useForm();
  const dispatch = useDispatch();
  const style = useMemo(() => {
    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const handleSubmit = async (data) => {
    dispatch(addTodo({ ...data.data }));
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
                {...register("title")}
              />
            </FormControl>
            <FormControl>
              <TextField
                id="standard-basic"
                label="About task"
                variant="standard"
                {...register("description")}
              />
            </FormControl>
            <Button type="submit">Submit</Button>
          </Stack>
        </Form>
      </Box>
    </Modal>
  );
};

export default NewTask;
