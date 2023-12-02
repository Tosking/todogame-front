import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form } from "react-hook-form";
import Category from "./Category";
import { ReactComponent as AddCategory } from "images/addcategory.svg";
import { useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "store/slice/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { createCategory as create, getCategory } from "store/slice/category";
import { useId } from "react";
const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  maxWidth: "100%",
  p: 4,
};
const CreateCategory = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { control, register, reset } = useForm();
  const [createCategory, isLoading] = useCreateCategoryMutation();
  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSubmit = async (data) => {
    const category = await createCategory(data.data).unwrap();
    dispatch(create({ ...category }));
    setOpen(false);
    reset();
  };
  return (
    <>
      <Category onClick={handleOpen}>
        <div
          className="category-button__create"
          style={{ textAlign: "center" }}
        >
          <AddCategory />
        </div>
      </Category>
      <Modal open={open} onClose={handleClose}>
        <Box sx={styles}>
          <Typography>New Category</Typography>
          <Form control={control} onSubmit={handleSubmit}>
            <Stack gap={3}>
              <FormControl>
                <TextField
                  id="standard-basic"
                  label="Category name"
                  variant="standard"
                  {...register("title")}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="standard-basic"
                  label="Category description"
                  variant="standard"
                  {...register("description")}
                />
              </FormControl>
              <Button type="submit" variant="outlined">
                Create new category
              </Button>
            </Stack>
          </Form>
        </Box>
      </Modal>
    </>
  );
};
export default CreateCategory;
