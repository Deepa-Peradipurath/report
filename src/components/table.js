import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import variables from '../styles/_variables.scss';

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  },
  paginaion: {
    display: "inline-flex",
    backgroundColor :variables.paginationBGColor,
    width:'100%',
    justifyContent: 'center'
  },
  stickyHeader: {
    backgroundColor: variables.tableHeaderColor,
    color: variables.white
  },
  tableBody: {
    color: `${variables.white} !imprtant`
  },
  table :{
    marginBottom:"0"
  },
  tableRow: {
    "&:hover": {
      backgroundColor: `${variables.tableHoverColor} !important`
    }
  }
});
const StickyHeadTable = ({
  type,
  tableData,
  start,
  setStart,
  columns,
  createData,
  pageSize,
  setPageSize,
  totalCount,
  page,
  setPage
}) => {
  
  console.log(tableData)
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [rowsData, setRowsData] = React.useState([]);
  const [count, setCount] = useState(0)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setStart((newPage+1)); 
    // setStart(2);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
     setPage(0);
     setStart(0)

    setPageSize(event.target.value)

    
  };

  const clickedRow = row => {
    // alert(JSON.stringify(row.name));
  };
  let rows = [];

  React.useEffect(() => {
      setCount(totalCount)
    if (!!tableData) {
      if (type === "notification") {
        {
          tableData.map((value, index) => {
            rows.push(
              createData(
                value.NOTIFICATIONNAME,
                value.CATEGORYNAME,
                value.UPDATED_DATE,
                value.STATUS,
                value.NOTIFICATIONID,
                value.CATEGORYID,
                value.DESCRIPTION
              )
            );
          });
        }
      }
     else if (type === "template") {
          tableData.map((value, index) => {
            rows.push(
              createData(
                value.NOTIFICATIONNAME,
                value.CHANNELNAME,
                value.TEMPLATENAME,
                value.UPDATEDATE,
                value.STATUS,
                value.TEMPLATEID
              )
            );
          });
        }
        else if (type === "reports") {
            tableData.map((value, index) => {
                rows.push(
                  createData(
                    value.notifcationname,
                    value.templatename,
                    value.itemid,
                    value.channelname,
                    value.sentdate,
                    value.count
                  )
                );
                
              });
        }
    }
    setRowsData(rows);
  }, [tableData,start,columns,page]);

  return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table" className={classes.table}>
            <TableHead className={classes.stickyHeader}>
              <TableRow className={classes.tableRow}>
                {columns.map((column,index) => (
                  <TableCell
                  key = {index}
                    className={classes.stickyHeader}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsData
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row,index) => {
                  return (
                    <TableRow className={classes.tableRow}
                     key = {index}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      onClick={() => {
                        clickedRow(row);
                      }}
                    >
                      {columns.map((column,index) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                           key = {index}
                            key={column.id}
                            align={column.align}
                            className={classes.tableBody}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* {!! totalCount ?  */}
        <TablePagination
          rowsPerPageOptions={[2, 4, 6]}
          component="div"
          className={classes.paginaion}
          count={!!count ? count : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> 
        {/* // : <div>No Data Found</div>} */}
      </Paper>
  );
};
export default StickyHeadTable;
