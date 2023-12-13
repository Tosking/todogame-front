import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const TodoDateCalendar = ({ control }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name="deadline"
        defaultValue={dayjs().startOf("D")}
        render={({ field }) => (
          <DatePicker
            sx={{ width: "100%" }}
            onChange={(date) => field.onChange(date)}
            selected={field.value}
          />
        )}
      />
    </LocalizationProvider>
  );
};
export default TodoDateCalendar;
