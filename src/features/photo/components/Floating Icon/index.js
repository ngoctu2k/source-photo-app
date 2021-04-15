import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

FloatingIcon.propTypes = {};

function FloatingIcon(props) {
  const [isshowIcon, setIsShowIcon] = useState(false);
  const {editPhoto,removePhoto,isShow} = props
  useEffect(()=>{
    setIsShowIcon(false)
  },[isShow])
  const showIcon = () => {
    setIsShowIcon((isshowIcon) => !isshowIcon);
  };
  return (
    <>
      <div className={`icon-container ${isShow?"show":""}`}  >
        <div className={`inner-fabs ${isshowIcon && isShow ? "show" : ""} `}>
          <div className="fab round" id="fab4" data-tooltip="Delete" onClick={()=>{removePhoto()}}>
            <i className="material-icons">delete_forever</i>
          </div>
          <div className="fab round" id="fab3" data-tooltip="Edit" onClick={()=>{editPhoto()}}>
            <i className="material-icons">create</i>
          </div>
        </div>
        <div className="fab round" id="fab1" onClick={showIcon} >
          <i className="material-icons" id="fabIcon">
            add
          </i>
        </div>
      </div>
    </>
  );
}

export default FloatingIcon;
