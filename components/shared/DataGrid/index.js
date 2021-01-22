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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sortType, setSortType] = React.useState('date');
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type) => {
    setAnchorEl(null);
    setSortType(type)
  };

  return (
    <><Actions/></>
  );
};

export default DataGrid;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  pagenationNo: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.main,
    fontWeight: "normal",
    fontSize: 14,
  },
  pagenationBtns: {
    minHeight: theme.spacing(6),
    minWidth: theme.spacing(6),
    background: "#fff",
  },
  sortBtn:{
    marginLeft:theme.spacing(2),
    minWidth:theme.spacing(17),
    textTransform:"capitalize",
    display:"flex",
    justifyContent:"space-between"
  },
  menu:{
    marginTop:theme.spacing(7),
  }
}));
