import React from "react";
import "../../styleComponents/Maincontent.css"


const  MainContent=(props)=> {
        return (
            <div className="content">
                <div className="content__inner container">
									<h1 className="type-auth">{props.type_auth}</h1>
                </div>
            </div>
        );
    }

 
export default MainContent;