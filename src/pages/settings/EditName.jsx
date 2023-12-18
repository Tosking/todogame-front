import React, { useState, useEffect, useContext } from "react";
import { Form } from "react-hook-form";
import { Stack, FormControl, TextField, Button } from "@mui/material";
import { useChangeNameMutation } from "store/slice/user/userSlice";
import { useDispatch } from "react-redux";
import { changeName } from "store/slice/auth";
import ModalContext from "contexts/ModalContext";

const EditName = ({ register, control }) => {
	const {closeModal} = useContext(ModalContext);
	const [label, setLabel] = useState('');

  useEffect(() => {
    if (label.trim() === '') {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [label]);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleLabelChange = (event) => {
    setLabel(event.target.value);
  };

	const [changename] = useChangeNameMutation();
	const dispatch = useDispatch();

	const sendData = async(data) => {
		console.log(label);
		const response = await changename({login:label}).unwrap();
		dispatch(changeName(response));
		closeModal();
	};

  return (
    <Form control={control}>
      <Stack gap={3}>
        <FormControl>
          <TextField type="text" onChange={handleLabelChange} id="standard-basic" label="New name" value={label} variant="standard" />
        </FormControl>
        <Button type="submit" variant="outlined" disabled={buttonDisabled} onClick={sendData}>
          Complete
        </Button>
      </Stack>
    </Form>
  );
};

export default EditName;
