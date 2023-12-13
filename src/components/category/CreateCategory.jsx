import React, { useContext } from "react";
import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form } from "react-hook-form";
import Category from "./Category";
import { ReactComponent as AddCategory } from "images/addcategory.svg";
import { useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "store/slice/category/categorySlice";
import { useDispatch } from "react-redux";
import { createCategory as create } from "store/slice/category";

import ModalContext from "contexts/ModalContext";

const CreateCategory = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const { control, register, reset } = useForm();
  const [createCategory] = useCreateCategoryMutation();

  const handleOpen = () => {
    openModal({
      title: <Typography>New Category</Typography>,
      children: (
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
      ),
    });
  };
  const handleSubmit = async (data) => {
    const category = await createCategory(data.data).unwrap();
    dispatch(create({ ...category }));
    closeModal();
    reset();
  };
  return (
    <Category onClick={handleOpen}>
      <div className="category-button__create" style={{ textAlign: "center" }}>
        <AddCategory />
      </div>
    </Category>
  );
};
export default CreateCategory;
