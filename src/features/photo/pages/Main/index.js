import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonToTop from "../../../../components/ButtonToTop";
import PhotoCard from "../../components/Photocard";
import { ScrollAsyncThunk, searchAsyncThunk } from "../../photoSlice";
import Banner from "./../../../../components/Banner";
import { useStyles } from "./style";

function MainPage(props) {
  const classes = useStyles();
  const [isloading, setLoading] = useState(false);
  const [page,setPage] =  useState(1)
  //
  const state = useSelector(state => state.photo)
  const dispatch = useDispatch();
  const {data,pagination,key,currentpage,totalPage,loading}=state
  useEffect(()=>{
    const action = searchAsyncThunk({page:1,title:key});
    dispatch(action);
  },[loading])
 
  useEffect(() => {
    var flag = true
    const loadMoreData = async () => {
        const action = await ScrollAsyncThunk({page:currentpage+1,title:key});
        dispatch(action);
    };
    const onScroll = e => {
      if (window.innerHeight + document.documentElement.scrollTop
        > document.documentElement.offsetHeight -300 && flag){
          flag = false
         if (currentpage<totalPage ) {
          loadMoreData();
         }
        }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [state]);
 
  return (
    <>
      <Banner title="List Photo App" ></Banner>
      <Container maxWidth="false">
        <Button
          className={classes.button}
          component={Link}
          to="photos/add"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add photo
        </Button>
        <Grid container spacing={3} id="list">
          {data.map((x, i) => {
            return (
              <Grid item xs={3} spacing={3}>
                 <PhotoCard photoItem={x} />
              </Grid>
            );
          })}
        </Grid>
        {loading && <div>Loading ...</div>}
        {/* <div onClick={()=>{setPage(page+1)}}>aaaaa</div> */}
        <ButtonToTop></ButtonToTop>
      </Container>
    </>
  );
}

export default MainPage;
