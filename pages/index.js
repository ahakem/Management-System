import React from "react";
import {Container, Typography, Box} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Filter from 'components/Filter'
export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Box my={2}>
        <Typography
          className={classes.heading}
          variant="h5"
          component="h1"
          gutterBottom
        >
          Fuel History
        </Typography>
      </Box>
      <Filter/>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.secondary.main,
  },
}));
