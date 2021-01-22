import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, ButtonGroup, Button, Typography, Menu, MenuItem, Fade } from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Actions = () => {
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
    <Box my={4} className={classes.root}>
      <Typography className={classes.pagenationNo}>1-10 of 40</Typography>
      <ButtonGroup
        className={classes.pagenationBtns}
        color="secondary"
        aria-label="outlined secondary button group"
      >
        <Button>
          <ArrowBackIosOutlinedIcon />
        </Button>
        <Button>
          <ArrowForwardIosOutlinedIcon />
        </Button>
      </ButtonGroup>
      <div>
      <Button className={classes.sortBtn} variant="outlined" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        <span>Sort: <span style={{color:"#000"}}>{sortType}</span></span>
        {!anchorEl ? <ExpandMoreIcon /> : <ExpandLessIcon/>}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        className={classes.menu}
      >
        <MenuItem className={classes.menuItem} onClick={()=>{handleClose("date")}}>Date</MenuItem>
        <MenuItem onClick={()=>{handleClose("status")}}>status</MenuItem>
      </Menu>
    </div>
    </Box>
  );
};

export default Actions;

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
    
  },
  menuItem:{
    minWidth:theme.spacing(17),
  }
}));
