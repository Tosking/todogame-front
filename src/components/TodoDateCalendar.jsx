import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
/*Разобраться с окрашиванием выбранного дня*/
const TodoDateCalendar = ({ register }) => {
  const [value, setValue] = useState();
  const handleChange = (data) => {
    console.log(data);
    setValue(data);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar sx={{ width: "100%" }} />
    </LocalizationProvider>
  );
};
export default TodoDateCalendar;
