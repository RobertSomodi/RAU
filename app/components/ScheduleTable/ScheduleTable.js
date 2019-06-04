import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import moment from 'moment';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { styles } from './styles';
import Divider from '@material-ui/core/Divider';

const ScheduleTable = (props) => {
  const {
    classes, schedule, info
  } = props;
  let days = [];
  
  const getName = (key, value) => {
    let data = info[key].find((obj) => {
      return obj.id === value;
    });
    return data ? data.name : '';
  }

  const getColor = (value) => {
    let data = info['shifts'].find((obj) => {
      return obj.id === value;
    });
    return data ? data.color : '#ffffff';
  }

  Object.keys(schedule.days).forEach((key) => {
    days.push(`${moment(key).date()} - ${moment(key).format('ddd')}`);
  });
  let rows = [];
  
  Object.keys(schedule.teams).forEach((tKey) => {
    let row = [];
    row.push(schedule.teams[tKey].name);
    days.forEach(() => {
      row.push('');
    });
    rows.push(row);
    Object.keys(schedule.teams[tKey].users).forEach((uKey) => {
      row = [];
      row.push({firstName: schedule.teams[tKey].users[uKey].firstName, lastName: schedule.teams[tKey].users[uKey].lastName});
      Object.keys(schedule.teams[tKey].users[uKey].days).forEach((dKey)=> {
        row.push(schedule.teams[tKey].users[uKey].days[dKey]);
      });
      rows.push(row);
    });
  });

  Object.keys(schedule.users).forEach((uKey) => {
    row = [];
    row.push({firstName: schedule.users[uKey].firstName, lastName: schedule.users[uKey].lastName});
    Object.keys(schedule.users[uKey].days).forEach((dKey)=> {
      row.push(schedule.users[uKey].days[dKey]);
    });
    rows.push(row);
  });
  console.log(rows);

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.userCell}>User</TableCell>
              {days.map((day, index) => (
                <TableCell
                  width={(3000-days.length)/days.length}
                  className={classes.tableCell}
                  key={`day${index}`}>
                    {day}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row[0].toString()} className= {`${!row[0].firstName ? classes.teamRow: ''}`}>
                {row.map((col, index) => {
                  if(index == 0) {
                    return <TableCell 
                            className={`${classes.tableCell} ${!row[0].firstName ? classes.teamCell: ''}`}
                            key={row[0].toString() + index}>
                              {col.firstName? col.firstName : col}<br></br>{col.lastName? col.lastName : ''}
                            </TableCell>
                  } else{
                    return <TableCell
                            align="center"
                            style={{backgroundColor: getColor(col.shiftId ? col.shiftId : null)}}
                            className={`${classes.tableCell} ${classes.shift} ${!row[0].firstName ? classes.teamCell: ''}`}
                            key={row[0].toString() + index}>
                              {getName('shifts', col.shiftId)}
                              {col.checkin!=null &&
                                <span><hr className={classes.shiftDivider}></hr>in: {col.checkin}</span>
                              }
                              {col.checkout!=null &&
                                <span><br></br>out: {col.checkout}</span>
                              }
                            </TableCell>
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </main>);
};

ScheduleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  schedule: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired
};

export default withStyles(styles)(ScheduleTable);
