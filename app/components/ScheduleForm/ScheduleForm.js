import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Paper from '@material-ui/core/Paper'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Lens from '@material-ui/icons/Lens'
import { styles } from './styles'

const ScheduleForm = props => {
  const {
    searchOptions,
    classes,
    handleChange,
    handleShiftChange,
    selectedShift,
    onSearch,
    departments,
    info,
    saveSchedule,
    authUser
  } = props
  const getOptions = (options, key) => {
    if (options && options.length) {
      return options.map(option => {
        return (
          <MenuItem key={option.id + key} value={option.id}>
            {option.name}
          </MenuItem>
        )
      })
    }
  }
  const getShiftOptions = () => {
    if (info && info.shifts && info.shifts.length) {
      return info.shifts.map(shift => {
        return (
          <MenuItem key={shift.id + 'shift'} value={shift.id}>
            <Lens style={{ color: shift.color }} />
            &nbsp; {shift.name} |{' '}
            {shift.off == 'true'
              ? 'Day off'
              : `${shift.startTime} - ${shift.endTime}`}
          </MenuItem>
        )
      })
    }
  }
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Grid container spacing={8}>
        <Grid item xs={7} className={classes.gridItem}>
          <Paper className={classes.paper}>
            <form
              className={classes.form}
              onSubmit={e => {
                e.preventDefault()
                onSearch()
              }}
            >
              <Grid container spacing={8}>
              {authUser.roleId == 1 &&
                <Grid item xs={4} className={classes.gridItem}>
                  
                    <FormControl
                    margin="normal"
                    className={classes.formControl}
                    required
                  >
                    <InputLabel htmlFor="storeId">Store</InputLabel>
                    <Select
                      value={searchOptions.storeId || 0}
                      onChange={handleChange}
                      inputProps={{
                        name: 'storeId',
                        id: 'storeId',
                      }}
                    >
                      <MenuItem disabled value={0}>
                        NONE
                      </MenuItem>
                      {getOptions(info.stores, 'stores')}
                    </Select>
                  </FormControl>
                  
                  
                </Grid>
              }
                {authUser.roleId == 1 &&
                <Grid item xs={4} className={classes.gridItem}>
                
                  <FormControl
                    margin="normal"
                    className={classes.formControl}
                    disabled={!departments.length}
                  >
                    <InputLabel htmlFor="departmentId">Department</InputLabel>
                    <Select
                      value={searchOptions.departmentId || 0}
                      onChange={handleChange}
                      inputProps={{
                        name: 'departmentId',
                        id: 'departmentId',
                      }}
                    >
                      <MenuItem value={0}>NONE</MenuItem>
                      {getOptions(departments, 'departments')}
                    </Select>
                  </FormControl>
                </Grid>}
                <Grid item xs={2} className={classes.gridItem}>
                  <FormControl
                    margin="normal"
                    className={classes.formControl}
                    required
                  >
                    <InputLabel htmlFor="month" shrink>Month</InputLabel>
                    <Input
                      id="month"
                      name="month"
                      autoComplete="month"
                      autoFocus
                      type="month"
                      value={searchOptions.month || ''}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={2} className={classes.gridItem}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Load Schedule
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        {authUser.roleId == 1 &&
        <Grid item xs={5} className={classes.gridItem}>
          <Paper className={classes.paper}>
            <Grid container spacing={8}>
              <Grid item xs={8} className={classes.gridItem}>
                <FormControl
                  margin="normal"
                  className={classes.formControl}
                  required
                >
                  <InputLabel htmlFor="shiftId" shrink>Shift</InputLabel>
                  <Select
                    value={selectedShift ? selectedShift.id : 0}
                    onChange={handleShiftChange}
                    inputProps={{
                      name: 'shiftId',
                      id: 'shiftId',
                    }}
                  >
                    <MenuItem disabled value={0}>
                      NONE
                    </MenuItem>
                    {getShiftOptions()}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} className={classes.gridItem}>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={(ev) => {saveSchedule()}}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>}
      </Grid>
    </main>
  )
}

ScheduleForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  handleShiftChange: PropTypes.func,
  onSearch: PropTypes.func,
  searchOptions: PropTypes.object,
  departments: PropTypes.array,
  info: PropTypes.object,
  selectedShift: PropTypes.object,
  saveSchedule: PropTypes.func.isRequired,
  authUser: PropTypes.object
}

export default withStyles(styles)(ScheduleForm)
