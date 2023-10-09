import React,{useState}  from "react";
import 'styleComponents/Input.css'
import closeeye from "images/closeeye.svg"
import eye from "images/eye.svg"

const  Input = ({rootClassName,inputClassName,placeholder,onChange,typeInput,showHidden})=> {
  const [type,setType] = useState('password');
  const [toggleIcon,setToggleIcon] = useState(closeeye);
  
  const toggleIconPass = ()=>{
    if(type ==="password"){
        setType('text');
        setToggleIcon(eye);
    }
    else{
      setType('password')
      setToggleIcon(closeeye)
    }
  }

  return (
      <div className={rootClassName}>
      <input type={showHidden?type:typeInput} className={inputClassName} placeholder={placeholder} onChange={e=>onChange(e.target.value)}/>
        {showHidden ?<span className="input__handlepassword" onClick={toggleIconPass}><img src={toggleIcon} alt="" /></span>:""} 
      <label className="authtorization-form__label"  htmlFor={inputClassName}>{placeholder}</label>
      </div>
  
  );

}

export default Input;
