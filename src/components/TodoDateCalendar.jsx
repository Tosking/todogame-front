import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
/*Разобраться с окрашиванием выбранного дня*/
const TodoDateCalendar = ({ register, control }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name="deadline"
        render={({ field }) => (
          <DateCalendar
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
