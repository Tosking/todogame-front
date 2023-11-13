import { Link } from "react-router-dom";
import React from 'react';
import Header from 'components/Header';
import edit from "images/edit.svg";
import "styleComponents/Settings.css"
import MainContent from "components/Maincontent";
import { Button, Modal, Box, Typography, TextField, Stack } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#212121',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Settings = () => {

	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

	const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

	return (
		<div>
			<Header burger={true}/>
			<MainContent contentClassName="settings">
				<h1 className="settings-word" style={{fontSize: '12px'}}>Settings</h1>

				<Link onClick={handleOpen} className="settings-cell">
					<span className="settings-word">Edit Name</span>
					<img src={edit} alt="#" />
				</Link>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Stack spacing={3}>
							<TextField id="outlined-basic" label="New Name" variant="outlined" />
							<Button onClick={handleClose}>Submit</Button>
						</Stack>
					</Box>
				</Modal>

				<Link onClick={handleOpen1} className="settings-cell">
					<span className="settings-word">Change Email</span>
					<img src={edit} alt="#" />
				</Link>
				<Modal
					open={open1}
					onClose={handleClose1}	
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Stack spacing={3}>
							<TextField id="outlined-basic" label="New Email" variant="outlined" />
							<Button onClick={handleClose1}>Submit</Button>
						</Stack>
						
					</Box>
				</Modal>

				<Link onClick={handleOpen2} className="settings-cell">
					<span className="settings-word">Change password</span>
					<img src={edit} alt="#" />
				</Link>
				<Modal
					open={open2}
					onClose={handleClose2}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Stack spacing={3}>
							<TextField id="outlined-basic" label="New Password" variant="outlined" />
							<TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
							<Button onClick={handleClose2}>Submit</Button>
						</Stack>
						
					</Box>
				</Modal>

				<Link to={"/settingsTheme"} className="settings-cell">
					<span className="settings-word">Theme</span>
					<img src={edit} alt="#" />
				</Link>
			</MainContent>
		</div>
	);
}


export default Settings;
