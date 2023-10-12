import React from 'react';
import { Checkbox } from 'pretty-checkbox-react';
import "pretty-checkbox/dist/pretty-checkbox.css"

const ColorsTheme = () => {
	return (
		<div>
			<Checkbox  style={{fontSize:"30px",marginRight:"10px"}} 
            shape="round" color="success" animation="pulse"/>
			<Checkbox  style={{fontSize:"30px",marginRight:"10px"}} 
            shape="round" color="success" animation="pulse"/>
						<Checkbox  style={{fontSize:"30px",marginRight:"10px"}} 
            shape="round" color="success" animation="pulse"/>
		</div>
	);
}

export default ColorsTheme;
