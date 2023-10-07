import React from 'react'
import '../'

function Task(props) {
    return ( 
        <div className="task">
            <div className="task__inner">
                <svg height="26" width="26" className="task__circle"> 
                    <circle cx="13" cy="13" r="12" stroke="gray" fill-opacity="0%"
                    stroke-width="2" /> 
                </svg> 
                <div className="task__content">
                    {props.children}
                </div>
            </div>
        </div>
     );
}

export default Task;