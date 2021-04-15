import Fab from "@material-ui/core/Fab";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
ButtonToTop.propTypes = {};

function ButtonToTop(props) {
  const [isShow, setIsShow] = useState(false);
  const classes = useStyles();
  function logit() {
    if (window.pageYOffset > 300) {
        setIsShow(true)
    }
    else{
        setIsShow(false)
    }
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isShow && (
        <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          className={(classes.margin, classes.scrollTop)}
          id="scroll-to-top"
          onClick={scrollToTop}
        >
          <ExpandLessIcon />
        </Fab>
      )}
    </>
  );
}

export default ButtonToTop;
