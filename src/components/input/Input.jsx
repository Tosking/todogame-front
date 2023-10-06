import React  from "react";
import '../../styleComponents/Input.css'

const  Input = (props)=> {
  return (
      <div className="form-group">
      <input type="text" className={props.className} placeholder={props.placeholder} onChange={e=>props.setProperty(e.target.value)}/>
      <label className="authtorization-form__label"  htmlFor={props.className}>{props.placeholder}</label>
      </div>
  
  );

}

export default Input;
