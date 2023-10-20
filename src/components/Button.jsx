import React from 'react'

const Button =({buttonClassName,children,onClick,typeBtn})=> {
     return (
        <button type = {typeBtn} onClick={onClick}  className={buttonClassName}>{children}</button>
    );
}
 
export default Button;