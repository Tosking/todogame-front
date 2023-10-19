import React from "react";

const MainContent=({children,contentClassName,addTask})=> {
	return (
            <div className={"content " + (!!contentClassName ? contentClassName+"-content":"")   }>
                {addTask?<button href="#" className="content-create-task">
                    <span></span>
                    <span></span>
                    </button>:""}
                <div className="content__inner container">
					{children}
                </div>
            </div>
        );
    }

 
export default MainContent;