import { InputBase } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchAsyncThunk } from "../../../features/photo/photoSlice";
import { useStyles } from "./style";

function Search(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const typingTimeoutRef = useRef(null);
  // useEffect(()=>{
  //   const action = searchAsyncThunk({page:1,title:""});
  //   dispatch(action);
  // },[])
  const handleFitlerChange = (e) => {
    const value  = e.target.value 
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    };
    typingTimeoutRef.current =  setTimeout(()=>{
      const action = searchAsyncThunk({page:1,title:value});
      dispatch(action);
    },300)

  };
  return (
    <>
      <form action="">
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={handleFitlerChange}
        />
      </form>
    </>
  );
}

export default Search;
