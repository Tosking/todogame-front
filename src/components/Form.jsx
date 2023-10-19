import React from 'react'

const Form = ({onSubmit,children,formClassName}) => {
  return (
    <form className={"form " + formClassName } onSubmit={onSubmit} >
        {children}
      </form>
    )
}

export default Form;