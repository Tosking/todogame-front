import React from 'react'

const Button =({buttonClassName,children})=> {
     return (
        <button className={buttonClassName}>{children}</button>
    );
}
 
export default Button;