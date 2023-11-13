import React from 'react';
import Header from 'components/Header';
import { TextField } from '@mui/material';

const EditName = () => {
	return (
		<div className='App'>
			<Header to={"/settings"}/>
			<TextField id="outlined-basic" label="Outlined" variant="outlined" />
		</div>
	);
}

export default EditName;
