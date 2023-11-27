import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
/*Разобраться с окрашиванием выбранного дня*/
const TodoDateCalendar = () => {
  console.log("ee");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar sx={{ width: "100%" }} />
    </LocalizationProvider>
  );
};
export default TodoDateCalendar;
