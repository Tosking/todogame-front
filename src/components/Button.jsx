import React from 'react'

const Button =({buttonClassName,children,onClick})=> {
     return (
        <button onClick={onClick} className={buttonClassName}>{children}</button>
    );
}
 
export default Button;