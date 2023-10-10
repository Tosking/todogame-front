import React from 'react';
import Header from 'components/Header';
import MainContent from 'components/Maincontent';
import { Switch } from 'pretty-checkbox-react';
import "pretty-checkbox/dist/pretty-checkbox.css"

const ChooseTheme = () => {
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
						<h1 className='settings-theme-name'>Color theme</h1>
					</div>
				</div>
				
			</MainContent>
		</div>
	);
}

export default ChooseTheme;
