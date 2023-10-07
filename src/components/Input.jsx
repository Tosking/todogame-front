import React  from "react";
import 'styleComponents/Input.css'

const  Input = ({rootClassName,inputClassName,placeholder,onChange})=> {
  return (
      <div className={rootClassName}>
      <input type="text" className={inputClassName} placeholder={placeholder} onChange={e=>onChange(e.target.value)}/>
      <label className="authtorization-form__label"  htmlFor={inputClassName}>{placeholder}</label>
      </div>
  
  );

}

export default Input;
