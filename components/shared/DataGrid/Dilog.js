import React from "react";
import { Button, Grid, Container } from "@material-ui/core";
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
            <Grid item xs={12} lg={12} >
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} id="Vehicle">Vehicle</InputLabel>
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
                <InputLabel className={classes.label} id="Vehicle">Vehicle</InputLabel>
                <TextField />
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} id="Vehicle">Vehicle</InputLabel>
                <TextField />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} id="Vehicle">Vehicle</InputLabel>
                <TextField />
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
    width:'100%',
    marginBottom:theme.spacing(2),
  },
  label:{
    marginBottom:theme.spacing(1),
  }
}));
