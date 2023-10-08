import React from 'react'
import check from "images/check.svg";
import { Checkbox } from 'pretty-checkbox-react';
import "pretty-checkbox/dist/pretty-checkbox.css"


const Task = ({children})=> {
    return ( 
        <div className="task">
            <div className="task__inner">
            <Checkbox  style={{fontSize:"30px",marginRight:"10px"}} 
            shape="round" color="success" animation="pulse"/>
                <div className="task__content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default Task;