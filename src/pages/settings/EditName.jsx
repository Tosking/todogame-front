import React from "react";
import { Form } from "react-hook-form";
import { Stack, FormControl, TextField, Button } from "@mui/material";

const EditName = ({ register, control }) => {
  return (
    <Form control={control}>
      <Stack gap={3}>
        <FormControl>
          <TextField id="standard-basic" label="New name" variant="standard" />
        </FormControl>
        <Button type="submit" variant="outlined">
          Complete
        </Button>
      </Stack>
    </Form>
  );
};

export default EditName;
