import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const Analytics = ({ value, title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.value}>{title}</Typography>
      <Typography className={classes.title}>{value}</Typography>
    </Box>
  );
};

export default Analytics;

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  title: {
    color: theme.palette.secondary.main,
    fontSize: 12,
  },
  value: {
    color: theme.palette.primary.main,
    fontSize: 20,
  },
}));
