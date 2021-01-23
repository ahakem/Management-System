import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
} from "@material-ui/core";
import moment from "moment";
import Actions from "components/shared/DataGrid/Actions";
import { axios, urls } from "config/axios";

function createData(name, date, fat, carbs, protein) {
  return { name, date, fat, carbs, protein };
}

const rows = [
  createData("Active1", new Date("2021-2-1"), 25.0, 51, 4.9),
  createData("InShop2", new Date("2021-1-1"), 16.0, 24, 6.0),
  createData("Active3", new Date("2021-1-1"), 3.7, 67, 4.3),
  createData("OutOfService4", new Date("2021-1-5"), 6.0, 24, 4.0),
  createData("Active5", new Date("2021-1-1"), 16.0, 49, 3.9),
  createData("InShop6", new Date("2021-1-5"), 3.2, 87, 6.5),
  createData("InShop7", new Date("2021-2-1"), 9.0, 37, 4.3),
  createData("Active8", new Date("2021-1-7"), 0.0, 94, 0.0),
  createData("InShop9", new Date("2021-1-1"), 26.0, 65, 7.0),
  createData("Active10", new Date("2021-1-7"), 0.2, 98, 0.0),
  createData("OutOfService11", new Date("2021-1-12"), 0, 81, 2.0),
  createData("OutOfService12", new Date("2021-1-12"), 19.0, 9, 37.0),
  createData("Active13", new Date("2021-1-1"), 18.0, 63, 4.0),
];


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

export default function DataGrid() {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [vehiclesNames, SetVehiclesNames] = useState({});

  const rowsPerPage = 5;
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const SortData = (property) => {
    
    const compare = (a, b) => (a[property] < b[property] ? -1 : 1);

    setData([...data.sort(compare)]);
  };

  useEffect(() => {
    axios
      .get(urls.vehicles)
      .then((res) => {
        setData(res.data.data.vehicles_info);
        SetVehiclesNames(res.data.data.vehicles_names);
        SortData("date")
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        //
      });
  }, []);
 
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
                      {head &&
                      <TableRow>
                        <TableCell colSpan={6} scope="row">
                          <b>{moment(row.date).format("ddd, MMM Do YYYY")}</b>
                        </TableCell>
                        </TableRow>
                        }
                      <TableRow hover >
                        <TableCell scope="row">
                          {vehiclesNames[row.vehicle_id]} - 
                          <b>{row.status}</b> - {row.id}
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
