import React from "react";
import "styleComponents/Maincontent.css"



const MainContent=({children,contentClassName})=> {
	return (
            <div className={"content " + (!!contentClassName ? contentClassName+"-content":"")   }>
                <div className="content__inner container">
					{children}
                </div>
            </div>
        );
    }

 
export default MainContent;