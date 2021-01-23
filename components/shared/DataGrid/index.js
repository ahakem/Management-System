import React,{useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import Actions from "components/shared/DataGrid/Actions";

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

const headCells = [
  {
    id: "status",
    numeric: false,
    disablePadding: true,
    label: "status",
  },
  { id: "date", numeric: true, disablePadding: false, label: "Date" },
  { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
  { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
  { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" },
];

function EnhancedTableHead(props) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
          >
            <TableSortLabel>{headCell.label}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
}));

export default function DataGrid() {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [data, setData] = useState(rows);
  const rowsPerPage = 10;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const SortData = (property) => {
    const compare = (a, b) => (a[property] < b[property] ? -1 : 1);

    setData([...data.sort(compare)]);
  };
  useEffect(() => {
    SortData("date");
  }, []);
  return (
    <div className={classes.root}>
      <Actions
        handleRequestSort={SortData}
        count={rows.length}
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
            <EnhancedTableHead
              classes={classes}
              rowCount={rows.length}
            />
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover tabIndex={-1} key={row.name}>
                      <TableCell padding="checkbox"></TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">
                        {moment(row.date).format("dddd, MMMM Do YYYY,")}
                      </TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
