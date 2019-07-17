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
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { styles } from './styles'

const ReportForm = props => {
  const {
    searchOptions,
    classes,
    handleChange,
    onSearch,
    departments,
    info,
  } = props
  const getOptions = (options, key) => {
    if (options && options.length) {
      return options.map(option => (
        <MenuItem key={option.id + key} value={option.id}>
          {option.name}
        </MenuItem>
      ))
    }
  }
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault()
            onSearch()
          }}
        >
          <FormControl margin="normal" className={classes.formControl} required>
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
          <FormControl margin="normal" className={classes.formControl} required>
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Get Report
          </Button>
        </form>
      </Paper>
    </main>
  )
}

ReportForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  onSearch: PropTypes.func,
  searchOptions: PropTypes.object,
  departments: PropTypes.array,
  info: PropTypes.object,
}

export default withStyles(styles)(ReportForm)
