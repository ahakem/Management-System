import React, { Fragment, useState } from "react";
import { Button, Grid, Container, InputAdornment } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "components/shared/TextField";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { DatePicker } from "@material-ui/pickers";
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventIcon from '@material-ui/icons/Event';
export default function DialogForm({
  openModel,
  handleCloseModel,
  data,
  vehiclesNames,
}) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [selectedDate, handleDateChange] = useState(new Date());
  const [currency, setCurrency] = React.useState("EUR");

  const handleChangeSelect = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <Dialog
        onClose={handleCloseModel}
        open={openModel}
        maxWidth="md"
        fullWidth={true}
      >
        <DialogTitle onClose={handleCloseModel}>Edit Fuel Entry</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={12}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} id="Vehicle">
                  Vehicle
                </InputLabel>
                <Select
                  labelId="Vehicle"
                  id="Vehicle"
                  value={age}
                  onChange={handleChange}
                  input={<TextField />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {Object.keys(vehiclesNames).map((item) => (
                    <MenuItem key={item} value={item}>
                      {vehiclesNames[item]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={3}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} id="Vehicle">
                  Start Date
                </InputLabel>
                <DatePicker
                  label="Basic example"
                  value={selectedDate}
                  onChange={handleDateChange}
                  animateYearScrolling
                  TextFieldComponent={TextField}
                  startAdornment={
                    <InputAdornment position="end">
                      <EventIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} id="Vehicle">
                  Start Time
                </InputLabel>
                <TextField
                type="time"
                startAdornment={
                  <InputAdornment position="end">
                    <ScheduleIcon />
                  </InputAdornment>
                }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} id="Odometer">
                  Odometer
                </InputLabel>
                <TextField
                  type="number"
                  endAdornment={
                    <InputAdornment position="start">KMs</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} id="Odometer">
                  Volume
                </InputLabel>
                <TextField
                  type="number"
                  endAdornment={
                    <InputAdornment position="start">Ltrs</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} id="fuel">
                  Fuel Type (optional)
                </InputLabel>
                <Select
                  labelId="fuel"
                  id="fuel"
                  value={age}
                  onChange={handleChange}
                  input={<TextField />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>11</MenuItem>
                  <MenuItem value={2}>22</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} id="filling">
                  Filling Type (optional)
                </InputLabel>
                <Select
                  labelId="filling"
                  id="filling"
                  value={age}
                  onChange={handleChange}
                  input={<TextField />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>11</MenuItem>
                  <MenuItem value={2}>22</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseModel} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  label: {
    marginBottom: theme.spacing(1),
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(3),
    color: "#252631",
    fontSize: 20,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h5">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    minWidth: 500,
  },
}))(MuiDialogActions);
