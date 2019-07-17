import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import moment from 'moment'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk'
import { styles } from './styles'
import { ADD_SHIFT } from '../../containers/Admin/Schedule/constants'

const ScheduleTable = props => {
  const { classes, schedule, info, addShift, authUser } = props
  let days = []

  const getName = (key, value) => {
    let data = info[key].find(obj => {
      return obj.id === value
    })
    return data ? data.name : ''
  }

  const getColor = value => {
    let data = info['shifts'].find(obj => {
      return obj.id === value
    })
    return data ? data.color : '#ffffff'
  }

  Object.keys(schedule.days).forEach(key => {
    days.push(`${moment(key).date()} - ${moment(key).format('ddd')}`)
  })
  let rows = []

  Object.keys(schedule.teams).forEach(tKey => {
    let row = []
    row.push({
      teamName: schedule.teams[tKey].name,
      teamId: schedule.teams[tKey].id,
    })
    days.forEach(() => {
      row.push({})
    })
    rows.push(row)
    Object.keys(schedule.teams[tKey].users).forEach(uKey => {
      row = []
      row.push({
        firstName: schedule.teams[tKey].users[uKey].firstName,
        lastName: schedule.teams[tKey].users[uKey].lastName,
        id: schedule.teams[tKey].users[uKey].id,
      })
      Object.keys(schedule.teams[tKey].users[uKey].days).forEach(dKey => {
        row.push(schedule.teams[tKey].users[uKey].days[dKey])
      })
      rows.push(row)
    })
  })

  Object.keys(schedule.users).forEach(uKey => {
    row = []
    row.push({
      firstName: schedule.users[uKey].firstName,
      lastName: schedule.users[uKey].lastName,
    })
    Object.keys(schedule.users[uKey].days).forEach(dKey => {
      row.push(schedule.users[uKey].days[dKey])
    })
    rows.push(row)
  })
  let teamId
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell
                className={`${classes.firstCol} ${classes.userCell} ${classes.tableCell} ${classes.headerCell}`}
              >
                User
              </TableCell>
              {days.map((day, index) => (
                <TableCell
                  width={3850 / days.length}
                  className={`${classes.tableCell} ${classes.headerCell}`}
                  key={`day${index}`}
                >
                  {day}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                key={`row${rowIndex}`}
                className={`${classes.tableRow} ${
                  !row[0].firstName ? classes.teamRow : ''
                }`}
              >
                {row.map((col, index) => {
                  if (index == 0) {
                    if (!col.firstName) {
                      teamId = col.teamId
                    }
                    return (
                      <TableCell
                        className={`${classes.tableCell} ${classes.firstCol} ${
                          !row[0].firstName ? classes.teamCell : ''
                        }`}
                        key={`cell${rowIndex}${index} + index`}
                      >
                        {col.firstName ? col.firstName : col.teamName}
                        <br></br>
                        {col.lastName ? col.lastName : ''}
                      </TableCell>
                    )
                  } else {
                    let keys = Object.keys(schedule.days)
                    let currTeamId = teamId
                    return (
                      <TableCell
                        align="center"
                        className={`${classes.tableCell} ${classes.shift} ${
                          !row[0].firstName ? classes.teamCell : ''
                        }`}
                        key={`cell${rowIndex}${index} + index`}
                        onClick={ev => {
                          if(authUser.roleId == 1) {
                            addShift({
                              date: keys[index - 1],
                              teamId: currTeamId,
                              userId: row[0].id,
                            })
                          }
                        }}
                      >
                        {col.shiftId && (
                          <div
                            className={`${classes.shiftWrapper}`}
                            style={{
                              backgroundColor: getColor(
                                col.shiftId ? col.shiftId : null
                              ),
                            }}
                          >
                            {col.shiftId && (
                              <div className={classes.shiftName}>
                                {getName('shifts', col.shiftId)}
                              </div>
                            )}
                            {col.checkin != null && (
                              <span>
                                <hr className={classes.shiftDivider}></hr>
                                <DirectionsWalkIcon
                                  className={`${classes.icon}`}
                                />
                                :{' '}
                                {col.checkin > 0
                                  ? `+${col.checkin}`
                                  : col.checkin}
                              </span>
                            )}
                            {col.checkout != null && (
                              <span>
                                <br></br>
                                <DirectionsWalkIcon
                                  className={`${classes.reversedIcon} ${classes.icon}`}
                                />
                                :{' '}
                                {col.checkout > 0
                                  ? `+${col.checkout}`
                                  : col.checkout}
                              </span>
                            )}
                          </div>
                        )}
                      </TableCell>
                    )
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </main>
  )
}

ScheduleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  schedule: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired,
  addShift: PropTypes.func.isRequired,
  authUser: PropTypes.object
}

export default withStyles(styles)(ScheduleTable)
