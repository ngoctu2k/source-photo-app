import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    scrollTop:{
        position:"fix",
        position: "fixed",
        bottom: `1.5rem`,
        right: `0.5rem`,
        animation: `$fadeIn 700ms ease-in-out 1s both`,
        cursor: "pointer"
    },
    "@keyframes fadeIn" :{
        "from": {
          opacity: 0
        },
        "to": {
          opacity: 1
        }
      }
  }));