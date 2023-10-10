import { Link } from "react-router-dom";
import React from 'react';
import Header from 'components/Header';
import edit from "images/edit.svg";
import "styleComponents/Settings.css"
import MainContent from "components/Maincontent";

const Settings = () => {
	return (
		<div className="App">
			<Header burger={true}/>
			<MainContent contentClassName="settings">
				<h1>Settings</h1>
				<Link to={"/settingsEditName"} className="settings-cell">
					<span>Edit Name</span>
					<img src={edit} alt="#" />
				</Link>
				<Link to={"/settingsChangeEmail"} className="settings-cell">
					<span>Change Email</span>
					<img src={edit} alt="#" />
				</Link>
				<Link to={"/settingsChangePassword"} className="settings-cell">
					<span>Change password</span>
					<img src={edit} alt="#" />
				</Link>
				<Link to={"/settingsTheme"} className="settings-cell">
					<span>Theme</span>
					<img src={edit} alt="#" />
				</Link>
			</MainContent>
		</div>
	);
}

export default Settings;
