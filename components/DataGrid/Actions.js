import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  ButtonGroup,
  Button,
  Typography,
  Menu,
  MenuItem,
  Fade,
} from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Actions = ({
  handleRequestSort,
  count,
  page,
  onChangePage,
  rowsPerPage,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortType, setSortType] = useState("date");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const callSorter = (type) => {
    setSortType(type);
    handleClose();
  };
  const Lastrow = (page + 1) * rowsPerPage;
  return (
    <Box my={4} className={classes.root}>
      <Typography className={classes.pagenationNo}>
        {(page + 1) * rowsPerPage - rowsPerPage + 1}-
        {Lastrow > count ? count : Lastrow} of {count}
      </Typography>
      <ButtonGroup
        className={classes.pagenationBtns}
        color="secondary"
        aria-label="outlined secondary button group"
      >
        <Button
          disabled={page == 0}
          onClick={() => {
            onChangePage(page - 1);
          }}
        >
          <ArrowBackIosOutlinedIcon />
        </Button>
        <Button
          disabled={Math.ceil(count / rowsPerPage) == page + 1}
          onClick={() => {
            onChangePage(page + 1);
          }}
        >
          <ArrowForwardIosOutlinedIcon />
        </Button>
      </ButtonGroup>
      <div>
        <Button
          className={classes.sortBtn}
          variant="outlined"
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <span>
            Sort: <span style={{ color: "#000" }}>{sortType}</span>
          </span>
          {!anchorEl ? <ExpandMoreIcon /> : <ExpandLessIcon />}
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
          <MenuItem
            className={classes.menuItem}
            disabled={sortType === "date"}
            onClick={() => {
              handleRequestSort("date"), callSorter("date");
            }}
          >
            Date
          </MenuItem>
          <MenuItem
            disabled={sortType === "status"}
            onClick={() => {
              handleRequestSort("status"), callSorter("status");
            }}
          >
            status
          </MenuItem>
          <MenuItem
            disabled={sortType === "odometer"}
            onClick={() => {
              handleRequestSort("odometer"), callSorter("odometer");
            }}
          >
            odometer
          </MenuItem>
          <MenuItem
            disabled={sortType === "cost"}
            onClick={() => {
              handleRequestSort("cost"), callSorter("cost");
            }}
          >
            cost
          </MenuItem>
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
  sortBtn: {
    marginLeft: theme.spacing(2),
    minWidth: theme.spacing(17),
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "space-between",
  },
  menu: {
    marginTop: theme.spacing(7),
  },
  menuItem: {
    minWidth: theme.spacing(17),
  },
}));
