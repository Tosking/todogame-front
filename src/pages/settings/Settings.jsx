import { Link } from "react-router-dom";
import React from 'react';
import Header from 'components/Header';
import edit from "images/edit.svg";
import "styleComponents/Settings.css"

const Settings = () => {
	return (
		<div className="App">
			<Header burger={true}/>
			<div className="content">
				<Link to={"/settingsEditName"}>
					<span>Edit Name</span>
					<img src={edit} alt="#" />
				</Link>
				<Link to={"/settingsChangeEmail"}>
					<span>Change Email</span>
					<img src={edit} alt="#" />
				</Link>
				<Link to={"/settingsChangePassword"}>
					<span>Change password</span>
					<img src={edit} alt="#" />
				</Link>
				<Link to={"/settingsTheme"}>
					<span>Theme</span>
					<img src={edit} alt="#" />
				</Link>
			</div>
		</div>
	);
}

export default Settings;
