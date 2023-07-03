import React, { useEffect } from "react"
import { useState } from "react"
const FormInput = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, name, onChange, id, ...inputProps } = props
   console.log(props,'props')
  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        name={name}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
