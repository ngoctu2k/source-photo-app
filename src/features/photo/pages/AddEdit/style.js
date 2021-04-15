import {  makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    input: {
        "&:invalid": {
          border: "red solid 2px"
        }
      }
  
}));