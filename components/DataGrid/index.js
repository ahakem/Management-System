import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Avatar
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import Actions from "components/DataGrid/Actions";
import { axios, urls, cancelToken } from "config/axios";
import DialogForm from "components/DataGrid/Dilog";
import { connect } from "react-redux";
import {
  updateVehicle,
  deleteVehicle,
  initVehicles,
  sortVehicles,
} from "store/vehicles/action";
import useHandleResponse from 'hooks/useHandleResponse'
const DataGrid = (props) => {
  const classes = useStyles();
  const { vehicles, init, update, remove, sort } = props;

  const [page, setPage] = useState(0);
  const [openModel, setOpenModel] = React.useState(false);
  const [formData, setFormData] = React.useState(null);
  const {handleError} = useHandleResponse();
  const handleClickOpenModel = (rowData) => {
    setFormData(rowData);
    setOpenModel(true);
  };
  const handleCloseModel = () => {
    setOpenModel(false);
    setFormData(null);

  };

  const rowsPerPage = 7;
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const submitData = (data) => {
    update(data)
    handleCloseModel()
  };

  const SortData = (property, _data = vehicles.vehicles_info) => {
    const compare = (a, b) => (a[property] < b[property] ? -1 : 1);
    sort([..._data.sort(compare)]);
  };
  let source = cancelToken.source();
  useEffect(() => {
    axios
      .get(urls.vehicles)
      .then((res) => {
        init(res.data.data);
        SortData("date", res.data.data.vehicles_info);
      })
      .catch((error) => {
        handleError(error);
      })
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, []);

  let currentDate = null;
  return (
    <div className={classes.root}>
      <Actions
        handleRequestSort={SortData}
        count={vehicles.vehicles_info.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
      />
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={"medium"}
            aria-label="enhanced table"
          >
            <TableHead>
              <TableRow>
                <TableCell className={classes.headCell}>Vehicle</TableCell>
                <TableCell className={classes.headCell}>Time</TableCell>
                <TableCell className={classes.headCell}>Total km</TableCell>
                <TableCell className={classes.headCell}>Volume</TableCell>
                <TableCell className={classes.headCell}>Cost</TableCell>
                <TableCell align="right" className={classes.headCell}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles &&
                vehicles.vehicles_info &&
                vehicles.vehicles_info
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    let head = null;
                    if (row.date != currentDate) {
                      currentDate = row.date;
                      head = row.date;
                    }
                    return (
                      <React.Fragment key={row.id}>
                        {head && (
                          <TableRow className={classes.dateRow}>
                            <TableCell colSpan={6} scope="row">
                              <b>
                                {moment(row.date).format("ddd, MMM D, YYYY")}
                              </b>
                            </TableCell>
                          </TableRow>
                        )}
                        <TableRow>
                          <TableCell scope="row">
                            <Box alignItems="center" display="flex">
                              <Avatar className={classes.photo} alt={vehicles.vehicles_names[row.vehicle_id]} src={row.photo} />
                              <Box> {vehicles.vehicles_names[row.vehicle_id]} -
                              <Box className={`${classes.status}
                              ${row.status == 'active' && classes.active}
                              ${row.status === "out of service" && classes.outOfService}
                              ${row.status === "in shop" && classes.inShop}
                              
                             `}>{row.status}</Box> </Box>
                            </Box>
                          </TableCell>
                          <TableCell>{row.time}</TableCell>

                          <TableCell>{row.odometer}</TableCell>
                          <TableCell>{row.volume}</TableCell>
                          <TableCell>{new Intl.NumberFormat('en-EG', { style: 'currency', currency: 'EGP' }).format(row.cost)}</TableCell>
                          <TableCell align="right">
                            <IconButton
                              aria-label="Edit"
                              onClick={() => {
                                handleClickOpenModel(row);
                              }}
                            >
                              <EditIcon style={{ color: "#FE4D5C" }} />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              onClick={() => {
                                remove(row.id);
                              }}
                            >
                              <DeleteOutlineIcon style={{ color: "#FFAB2B" }} />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {formData && (
        <DialogForm
          vehiclesNames={vehicles.vehicles_names}
          setFormData={setFormData}
          data={formData}
          openModel={openModel}
          handleCloseModel={handleCloseModel}
          submitData={submitData}
        />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    vehicles: { ...state.vehicles },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    init: (data) => dispatch(initVehicles(data)),
    update: (data) => dispatch(updateVehicle(data)),
    remove: (id) => dispatch(deleteVehicle(id)),
    sort: (data) => dispatch(sortVehicles(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DataGrid);
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  paper: {
    overflowX: "auto",
    marginBottom: theme.spacing(2),
    position: "absolute",
    top: 64,
    minHeight: 200,
    left: 0,
    right: 0,
  },
  table: {
    minWidth: 750,
    border: "1px solid #E8ECEF",
  },
  headCell: {
    background: "#F8FAFB",
    color: theme.palette.secondary.main,
    fontSize: 12,
  },
  dateRow: {
    background: "#F8FAFB",
    fontSize: 12,
    letterSpacing: 0.3,
  },
  photo: {
    marginRight: theme.spacing(2)
  },
  status: {
    display: "block",
  },
  active: { color: "#21A11E" },
  inShop: { color: "#C1931B" },
  outOfService: { color: "#C11B1B" },
}));
