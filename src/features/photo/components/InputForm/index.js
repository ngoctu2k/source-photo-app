import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

InputForm.propTypes = {};

function InputForm(props) {
  const { defaultValue, required, inputProps, value } = props;
  const [valueInput, setValueInput] = useState("");
  useEffect(()=>{
    setValueInput(value)
  },[value])
  const handleValue = (e) => {
    const value = e.target.value 
    setValueInput(value)
  };
  return (
    <>
      <TextField
        id="outlined-multiline-static"
        label="Title"
        variant="outlined"
        fullWidth
        // defaultValue={defaultValue}
        required={required}
        inputProps={inputProps}
        value={valueInput}
        focused={value}
        onChange={handleValue}
      />
    </>
  );
}

export default InputForm;
