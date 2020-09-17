import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});


const RouteList = (props) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <React.Fragment>
      {
        data
        && data.length > 0
        &&
        <div style = {{marginTop: 40}}>
        <Typography variant="h6">
          Route List
        </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Route List">
              <TableHead>
                <TableRow>
                  <TableCell>From</TableCell>
                  <TableCell align="left">To</TableCell>
                  <TableCell align="left">Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((route, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {route.from}
                    </TableCell>
                    <TableCell align="left">{route.to}</TableCell>
                    <TableCell align="left">{route.cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      }
    </React.Fragment>
  )
}

export default RouteList;