import React from "react";

import { Form } from "react-hook-form";
import { Stack, FormControl, TextField, Button } from "@mui/material";
const ChangePassword = ({ register, control }) => {
  return (
    <Form control={control}>
      <Stack gap={3}>
        <FormControl>
          <TextField
            id="standard-basic"
            label="New password"
            variant="standard"
          />
        </FormControl>
        <FormControl>
          <TextField
            id="standard-basic"
            label="Repeat new password"
            variant="standard"
          />
        </FormControl>
        <Button type="submit" variant="outlined">
          Complete
        </Button>
      </Stack>
    </Form>
  );
};

export default ChangePassword;
