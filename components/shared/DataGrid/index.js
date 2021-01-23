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
} from "@material-ui/core";
import moment from "moment";
import Actions from "components/shared/DataGrid/Actions";
import { axios, urls } from "config/axios";

export default function DataGrid() {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [vehiclesNames, SetVehiclesNames] = useState({});

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
                <TableCell>Vehicle</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Total km</TableCell>
                <TableCell>Volume</TableCell>
                <TableCell>Cost</TableCell>
                <TableCell>Actions</TableCell>
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
                        <TableRow>
                          <TableCell colSpan={6} scope="row">
                            <b>{moment(row.date).format("ddd, MMM Do YYYY")}</b>
                          </TableCell>
                        </TableRow>
                      )}
                      <TableRow hover>
                        <TableCell scope="row">
                          {vehiclesNames[row.vehicle_id]} -<b>{row.status}</b> -{" "}
                          {row.id}
                        </TableCell>
                        <TableCell>{row.time}</TableCell>
                        {/* <TableCell align="right">
                        {moment(row.date).format("dddd, MMMM Do YYYY,")}
                      </TableCell> */}
                        <TableCell>{row.odometer}</TableCell>
                        <TableCell>{row.volume}</TableCell>
                        <TableCell>{row.cost}</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </React.Fragment>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
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
  },
}));
