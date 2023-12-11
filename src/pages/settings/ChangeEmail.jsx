import React from "react";

import { Form } from "react-hook-form";
import { Stack, FormControl, TextField, Button } from "@mui/material";
const ChangeEmail = ({ register, control }) => {
  return (
    <Form control={control}>
      <Stack gap={3}>
        <FormControl>
          <TextField id="standard-basic" label="New email" variant="standard" />
        </FormControl>
        <Button type="submit" variant="outlined">
          Confirm email
        </Button>
      </Stack>
    </Form>
  );
};

export default ChangeEmail;
