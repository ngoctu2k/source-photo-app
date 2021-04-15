import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Prompt, useHistory, useParams } from "react-router";
import { AddAsyncThunk, EditAsyncThunk } from "../../photoSlice";
import PhotoApi from "./../../../../aip/photoApi";
import { useStyles } from "./style";
import HomeIcon from '@material-ui/icons/Home';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: {} });
  const classes = useStyles();
  const dispatch = useDispatch();
  const [photoCard, setPhotoCard] = useState({});
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;
  const state = useSelector((state) => state.photo);
  const { data } = state;
  useEffect(async () => {
    if (photoId) {
      const photoEdit = await PhotoApi.get(photoId);
      setPhotoCard({ ...photoEdit });
      reset({ ...photoEdit });
    } else {
      setPhotoCard({});
    }
  }, []);

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setPhotoCard({
      ...photoCard,
      imageUrl: value,
    });
  };
  const onSubmit = async (data) => {
    if (isAddMode) {
      const action = await AddAsyncThunk(data);
      dispatch(action);
    } else {
      const photoEdited = {
        id: data.id,
        author: data.author,
        description: data.description,
        imageUrl: data.imageUrl,
        title: data.title,
      };
      const action = await EditAsyncThunk(photoEdited);
      dispatch(action);
    }

    history.push("/photos");
  }; // your form submit function which will invoke after successful validation
  const handleGoHome = ()=>{
	history.push("/photos");
  }
  return (
    <>
	  {/* <Prompt message="Are you sure you want to leave?" /> */}

      <Container maxWidth="false">
	  <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<HomeIcon />}
		style={{marginTop:30}}
		onClick={handleGoHome}
      >
        Go back home
      </Button>
        <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
          <Typography
            variant="h4"
            align="center"
            component="h1"
            gutterBottom
            className="colorMode"
          >
            🏁 {isAddMode ? "Add Photo Card" : "Edit Photo Card"}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-multiline-static"
                    label="id"
                    variant="outlined"
                    fullWidth
                    dis
                    inputProps={register("id")}
                    style={{ display: "none" }}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Title"
                    variant="outlined"
                    fullWidth
                    required={true}
                    focused={!isAddMode}
                    inputProps={register("title")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Author"
                    variant="outlined"
                    fullWidth
                    required={true}
                    focused={!isAddMode}
                    inputProps={register("author")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    focused={!isAddMode}
                    required={true}
                    inputProps={register("description")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Link Image"
                    rows={2}
                    variant="outlined"
                    fullWidth
                    focused={!isAddMode}
                    required={true}
                    inputProps={register("imageUrl", {
                      pattern: /(https?:\/\/[^\s]+)/g,
                    })}
                    onChange={handleChangeInput}
                  />
                  {errors.imageUrl && <span>Nhập link ảnh !!!</span>}
                </Grid>
                <Grid item xs={12}>
                  <Card variant="outlined">
                    <CardContent
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        style={{ width: 360, height: 360, objectFit: "cover" }}
                        src={photoCard.imageUrl}
                        alt=""
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </div>
      </Container>
    </>
  );
}

export default AddEditPage;
