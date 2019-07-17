import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { CirclePicker } from 'react-color'
import { styles } from './styles'

const ShiftForm = props => {
  const { shiftDetails, classes, handleChange, onSave, action } = props

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Manage Shift
        </Typography>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault()
            onSave()
          }}
        >
          <FormControl
            margin="normal"
            disabled={action == 'view'}
            required
            fullWidth
          >
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              autoFocus
              value={shiftDetails.name || ''}
              onChange={handleChange}
              shrink={shiftDetails.name}
            />
          </FormControl>
          <FormControl
            margin="normal"
            disabled={action == 'view'}
            required
            fullWidth
          >
            <InputLabel htmlFor="color" shrink>
              Color
            </InputLabel>
            <CirclePicker
              className={classes.picker}
              id="color"
              name="color"
              autoFocus
              color={shiftDetails.color || ''}
              circleSize={28}
              circleSpacing={8}
              width={'100%'}
              colors={[
                '#f44336',
                '#E91E63',
                '#9C27B0',
                '#673AB7',
                '#3F51B5',
                '#2196F3',
                '#03A9F4',
                '#00BCD4',
                '#009688',
                '#4CAF50',
                '#8BC34A',
                '#CDDC39',
                '#FFEB3B',
                '#FFC107',
                '#FF9800',
                '#FF5722',
                '#795548',
                '#9E9E9E',
                '#607D8B',
              ]}
              onChangeComplete={(color, event) => {
                const newEvent = {
                  target: { name: 'color', id: 'color', value: color.hex },
                }
                console.log(newEvent)
                handleChange(newEvent)
              }}
            />
          </FormControl>
          <FormControl component="fieldset" required fullWidth>
            <FormLabel component="legend">Type of shift</FormLabel>
            <RadioGroup
              aria-label="off"
              name="off"
              value={
                !shiftDetails.off || shiftDetails.off == 'false' ? '0' : '1'
              }
              onChange={handleChange}
            >
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="Working Shift"
              />
              <FormControlLabel value="1" control={<Radio />} label="Day off" />
            </RadioGroup>
          </FormControl>
          <FormControl
            margin="normal"
            disabled={action == 'view'}
            required
            fullWidth
          >
            <InputLabel htmlFor="startTime" shrink>
              Start Time
            </InputLabel>
            <Input
              id="startTime"
              name="startTime"
              autoComplete="startTime"
              autoFocus
              type="time"
              value={shiftDetails.startTime || ''}
              onChange={handleChange}
              inputProps={{
                step: 10, // 5 min
              }}
            />
          </FormControl>
          <FormControl
            margin="normal"
            disabled={action == 'view'}
            required
            fullWidth
          >
            <InputLabel htmlFor="endTime" shrink>
              End Time
            </InputLabel>
            <Input
              id="endTime"
              name="endTime"
              autoComplete="endTime"
              autoFocus
              type="time"
              value={shiftDetails.endTime || ''}
              onChange={handleChange}
              inputProps={{
                step: 10, // 5 min
              }}
            />
          </FormControl>
          {action != 'view' && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>
          )}
        </form>
      </Paper>
    </main>
  )
}

ShiftForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  onSave: PropTypes.func,
  shiftDetails: PropTypes.object,
  action: PropTypes.string.isRequired,
}

export default withStyles(styles)(ShiftForm)
