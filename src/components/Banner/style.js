import {  makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  banner: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center",
    height:15+"rem",
    // background:`url(https://i.pinimg.com/564x/8a/a7/f3/8aa7f39e153dc80ca16855071320063c.jpg)` ,
    backgroundPosition: "center",
    // backgroundSize: "cover",
  },
  title:{
      color:"rgba(255,255,255,0.85)",
      fontWeight:"bold",
      margin:"auto"
  }
}));
