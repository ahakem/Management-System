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
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import Actions from "components/shared/DataGrid/Actions";
import { axios, urls } from "config/axios";
import DialogForm from "components/shared/DataGrid/Dilog";
export default function DataGrid() {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [vehiclesNames, SetVehiclesNames] = useState({});

  //
  const [openModel, setOpenModel] = React.useState(false);
  const [formData, setFormData] = React.useState(null);

  const handleClickOpenModel = (data) => {
    setFormData(data)
    setOpenModel(true);
  };
  const handleCloseModel = () => {
    setOpenModel(false);
  };


  const rowsPerPage = 7;
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const SortData = (property, _data = data) => {
    const compare = (a, b) => (a[property] < b[property] ? -1 : 1);
    setData([..._data.sort(compare)]);
  };

  useEffect(() => {
    axios
      .get(urls.vehicles)
      .then((res) => {
        SetVehiclesNames(res.data.data.vehicles_names);
        SortData("date", res.data.data.vehicles_info);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        //
      });
  }, []);
  useEffect(() => {
    console.log("data", data);
  });
  let currentDate = null;
  return (
    <div className={classes.root}>
     
      <Actions
        handleRequestSort={SortData}
        count={data.length}
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
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  let head = null;
                  if (row.date !== currentDate) {
                    currentDate = row.date;
                    head = row.date;
                  }
                  return (
                    <React.Fragment key={row.id}>
                      {head && (
                        <TableRow className={classes.dateRow}>
                          <TableCell colSpan={6} scope="row">
                            <b>{moment(row.date).format("ddd, MMM D, YYYY")}</b>
                          </TableCell>
                        </TableRow>
                      )}
                      <TableRow>
                        <TableCell scope="row">
                          {vehiclesNames[row.vehicle_id]} -<b>{row.status}</b> -{" "}
                          {row.id}
                        </TableCell>
                        <TableCell>{row.time}</TableCell>

                        <TableCell>{row.odometer}</TableCell>
                        <TableCell>{row.volume}</TableCell>
                        <TableCell>{row.cost}</TableCell>
                        <TableCell align="right">
                          <IconButton aria-label="Edit"  onClick={()=>{handleClickOpenModel(row)}} >
                            <EditIcon style={{color:"#FE4D5C"}}/>
                          </IconButton>
                          <IconButton aria-label="delete" >
                            <DeleteOutlineIcon style={{color:"#FFAB2B"}}/>
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
      {formData &&
      <DialogForm vehiclesNames={vehiclesNames} data={formData} openModel={openModel} handleCloseModel={handleCloseModel}/>
    }
    </div>
  );
}

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
}));
