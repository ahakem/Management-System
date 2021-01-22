import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid,InputAdornment, Button} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SearchIcon from '@material-ui/icons/Search';
import TextField from 'components/shared/TextField'
import FilterListIcon from '@material-ui/icons/FilterList';
const Filter = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        <TextField className={classes.textInput} placeholder="Dates"  id="date"
          startAdornment={
            <InputAdornment position="end">
              <EventNoteIcon className={classes.icon} />
            </InputAdornment>
          }
        />

      </Grid>
      <Grid item xs={12} md={6} lg={3}>
      <TextField className={classes.textInput} placeholder="Search vehicles"  id="Search_vehicles"
          startAdornment={
            <InputAdornment position="end">
              <SearchIcon className={classes.icon} />
            </InputAdornment>
          }
        />
      </Grid>
      <Grid item xs={12} lg={6} className={classes.actions}>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<FilterListIcon />}
      >
        Filters
      </Button>
      <Typography className={classes.filterLabel}><span className={classes.textHighlight}>1 Filter</span> Applied</Typography>
      <Button
        color="primary"
        style={{whiteSpace:"nowrap"}}
      >
        Clear all
      </Button>
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
  },
  actions:{
    display:"flex",
    alignItems:"center",
  },
  filterLabel:{
    fontSize:14,
    color:theme.palette.secondary.main,
    margin:'0 8px',
    whiteSpace:"nowrap"
  },
  textHighlight:{
    color:theme.palette.primary.main
  }
}));
