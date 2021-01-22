import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, ButtonGroup, Button, Typography, Menu, MenuItem, Fade } from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Actions from 'components/shared/DataGrid/Actions'
const DataGrid = () => {
  const classes = useStyles();


  return (
    <><Actions/></>
  );
};

export default DataGrid;

const useStyles = makeStyles((theme) => ({
  root: {
   
  },
  
}));
