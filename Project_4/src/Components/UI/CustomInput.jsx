import React from "react";
import classes from "../UI/CustomInput.module.css"
// import CustomInput from './CustomInput';

const CustomInput = (props) => {
  const { inputValue, placeholder, size, onHandleChange } = props;

  return (
    <input
      type="text"
      placeholder="hello"
      className={`${classes.default_input} ${size}`}
      value={inputValue}
      onChange={onHandleChange}
    />
  );
};
export default CustomInput;
