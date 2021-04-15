import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css"
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../theme/themeSlice";
import { Tooltip } from "@material-ui/core";
ToggleMode.propTypes = {};

function ToggleMode(props) {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        const action = toggleTheme(event.target.checked)
        dispatch(action)
      };
  return (
    <Tooltip title="Toggle light/dark theme" aria-label="add">
     <div className="toggle-switch">
      <label className="switch" >
        <input type="checkbox"  onChange={handleChange} />
        <span className="slider round" />
      </label>
    </div>
  </Tooltip>
  
  );
}

export default ToggleMode;
