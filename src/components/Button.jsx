import React from "react";

const Button = ({ buttonClassName, children, onClick, typeBtn, isValid }) => {
  return (
    <button
      disabled={!isValid && isValid !== undefined}
      type={typeBtn}
      onClick={onClick}
      className={buttonClassName}
    >
      {children}
    </button>
  );
};

export default Button;
