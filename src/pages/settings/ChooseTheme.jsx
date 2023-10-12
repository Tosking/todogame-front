import React, { useState } from 'react';
import Header from 'components/Header';
import MainContent from 'components/Maincontent';
import { Switch } from 'pretty-checkbox-react';
import "pretty-checkbox/dist/pretty-checkbox.css"
import Select from "react-select";
import ColorsTheme from './ColorsTheme';

const options = [
  {value: "black", label:"Black"},
  {value: "white", label:"White"},
	{value: "green", label: "Green"},
	{value: "blue", label:"Blue"},
	{value: "pink", label: "Pink"},
	{value: "purple", label:"Purple"}
]



const ChooseTheme = () => {

	const [currentColor, setCurrentColor] = useState('')

	const getValue = () => {
		return currentColor ? options.find(c => c.value === currentColor) : ''
	}

	const onChange = (newValue) => {
		setCurrentColor(newValue.value)
	}

	return (
		<div className='App'>
			<Header to={"/settings"}/>
			<MainContent contentClassName="theme">
				
				<div className='settings-theme-content'>
					<h1 className='settings-theme-name'>Display completed tasks</h1>
					<Switch shape="fill" color="success" className='settings-theme-swtich'></Switch>
				</div>

				<div className='settings-theme-color'>
					<h1 className='settings-theme-content settings-theme-nColor'>Color</h1>

					<div className='settings-theme-content'>
						<h1 className='settings-theme-name'>Light theme</h1>
						<Switch shape="fill" color="success" className='settings-theme-swtich'></Switch>
					</div>

					<div className='settings-theme-content'>
						<h1 className='settings-theme-name'>Dark theme</h1>
						<Switch shape="fill" color="success" className='settings-theme-swtich'></Switch>
					</div>
					
					<div className='settings-theme-content'>
					<Select  
						isSearchable = {false}
						onChange={onChange}
						value={getValue()}
						options={options}
						placeholder="Color Theme"
						className='settings-theme-selectName'/>
					</div>
					
				</div>				
			</MainContent>
		</div>
	);
}

export default ChooseTheme;
