import React from "react";
import {Container, Typography, Box, Divider} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Filter from 'components/Filter'
import  Analytics from 'components/Analytics'
import DataGrid from 'components/shared/DataGrid'
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
      <Divider className={classes.divider}/>
      <Analytics/>
      <DataGrid />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.secondary.main,
  },
  divider:{
    margin:theme.spacing(5,0)
  }
}));
