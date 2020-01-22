import {makeStyles}  from '@material-ui/core';
export const useStyles = makeStyles(theme => ({
    card: {
      margin : "10px",
      '& span' : {
          margin: theme.spacing(1),
          verticalAlign: "middle",
          fontSize: "default"
      },      
    },
    media: {
      height: 200,
    }
}));    