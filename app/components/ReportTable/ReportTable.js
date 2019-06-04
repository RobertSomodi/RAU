import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { styles } from './styles';

const ReportTable = (props) => {
  const {
    classes, header, rows, dynamicCols
  } = props;
  const days = [];

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Table className={classes.table} style={dynamicCols ? {width:header.length*100 + 'px'} : {}}>
          <TableHead>
            <TableRow>
              {header.map((day, index) => (
                <TableCell
                  width={(3000 - days.length) / days.length}
                  className={classes.tableCell}
                  key={`day${index}`}
                >
                  {day}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={`rowNumber${index}`}>
                {row.map((col, index) => (
                  <TableCell
                    align="center"
                    className={`${classes.tableCell}`}
                    key={row[0].toString() + index}
                  >
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </main>);
};

ReportTable.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
  header: PropTypes.array.isRequired,
  dynamicCols: PropTypes.bool.isRequired
};

export default withStyles(styles)(ReportTable);
