import React from "react";
import { Button, Grid,  InputAdornment , InputLabel, FormHelperText} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "components/shared/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { DatePicker } from "@material-ui/pickers";
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventIcon from '@material-ui/icons/Event';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  odometer: yup
    .number()
    .positive().required(),
  volume: yup
    .number()
    .positive().required(),
  time: yup
    .string().required(),
});
// date and dropdowns are fourced for values

export default function DialogForm({
  openModel,
  handleCloseModel,
  data,
  vehiclesNames,
  submitData
}) {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      ...data
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitData(values)
    },
  });


  return (
    <div>
      <Dialog
        onClose={handleCloseModel}
        open={openModel}
        maxWidth="md"
        fullWidth={true}
      >


        <DialogTitle onClose={handleCloseModel}>Edit Fuel Entry</DialogTitle>
        <form onSubmit={formik.handleSubmit}>

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

                    value={formik.values.vehicle_id}
                    onChange={formik.handleChange}
                    input={<TextField />}
                    name="vehicle_id"

                  >
                    {Object.keys(vehiclesNames).map((item) => (
                      <MenuItem key={item} value={item}>
                        {vehiclesNames[item]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6} md={3}>
                <FormControl error={formik.touched.date && Boolean(formik.errors.date)} className={classes.formControl}>
                  <InputLabel className={classes.label} id="date">
                    Start Date
                </InputLabel>
                  <DatePicker
                    value={formik.values.date}
                    onChange={val => {
                      formik.setFieldValue("date", val.format("YYYY-M-D"));
                    }}
                    name="date"
                    animateYearScrolling
                    TextFieldComponent={TextField}
                    startAdornment={
                      <InputAdornment position="end">
                        <EventIcon />
                      </InputAdornment>
                    }
                  />
                  <FormHelperText >{formik.touched.date && formik.errors.date}</FormHelperText>

                </FormControl>

              </Grid>
              <Grid item xs={6} md={3}>
                <FormControl error={formik.touched.time && Boolean(formik.errors.time)} className={classes.formControl}>
                  <InputLabel className={classes.label} id="Vehicle">
                    Start Time
                </InputLabel>
                  <TextField
                    type="time"
                    name="time"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    startAdornment={
                      <InputAdornment position="end">
                        <ScheduleIcon />
                      </InputAdornment>
                    }
                  />
                  <FormHelperText >{formik.touched.time && formik.errors.time}</FormHelperText>

                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl error={formik.touched.odometer && Boolean(formik.errors.odometer)}
                  className={classes.formControl}>
                  <InputLabel className={classes.label} id="Odometer">
                    Odometer
                </InputLabel>
                  <TextField
                    id="odometer"
                    name="odometer"
                    endAdornment={
                      <InputAdornment position="start">KMs</InputAdornment>
                    }
                    value={formik.values.odometer}
                    onChange={formik.handleChange}
                  />
                  <FormHelperText >{formik.touched.odometer && formik.errors.odometer}</FormHelperText>

                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl error={formik.touched.volume && Boolean(formik.errors.volume)}
                  className={classes.formControl}>
                  <InputLabel className={classes.label} id="volume">
                    Volume
                </InputLabel>
                  <TextField
                    name="volume"
                    value={formik.values.volume}
                    onChange={formik.handleChange}
                    endAdornment={
                      <InputAdornment position="start">Ltrs</InputAdornment>
                    }
                  />
                  <FormHelperText >{formik.touched.volume && formik.errors.volume}</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl className={classes.formControl} error={formik.touched.fuel_types && Boolean(formik.errors.fuel_types)}>
                  <InputLabel className={classes.label} id="fuel_types">
                    Fuel Type (optional)
                </InputLabel>
                  <Select
                    labelId="fuel_types"
                    id="fuel_types"
                    name="fuel_types"
                    value={formik.values.fuel_types}
                    onChange={formik.handleChange}

                    input={<TextField />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="gasoline">Gasoline</MenuItem>
                    <MenuItem value="diesel">Diesel</MenuItem>
                  </Select>
                  <FormHelperText >{formik.touched.fuel_types && formik.errors.fuel_types}</FormHelperText>

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
                    name="filling"
                    value={formik.values.filling}
                    onChange={formik.handleChange}
                    input={<TextField />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Type 1</MenuItem>
                    <MenuItem value={2}>Type 2</MenuItem>
                  </Select>
                  <FormHelperText >{formik.touched.filling && formik.errors.filling}</FormHelperText>

                </FormControl>
              </Grid>
            </Grid>



          </DialogContent>

          <DialogActions>
            {/* <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button> */}
            <Button type="submit" autoFocus variant="contained" color="primary">
              Save changes
          </Button>
          </DialogActions>
        </form>
        {/* </form> */}
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
  },
}))(MuiDialogActions);
