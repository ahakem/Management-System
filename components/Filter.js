import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid,InputAdornment, InputLabel} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TextField from 'components/shared/TextField'
const Filter = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        <TextField className={classes.textInput} placeholder="Dates"  id="bootstrap-input"
          startAdornment={
            <InputAdornment position="end">
              <EventNoteIcon className={classes.icon} />
            </InputAdornment>
          }
        />

      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        search
      </Grid>
      <Grid item xs={12} lg={6}>
        actions
      </Grid>
    </Grid>
  );
};

export default Filter;

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.secondary.main,
  },
  textInput:{
    width:"100%"
  },
  icon:{
    color:theme.palette.secondary.main,
    width:16,
    height:16
  }
}));
