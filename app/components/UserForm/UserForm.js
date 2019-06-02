import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { styles } from './styles';

const UserForm = (props) => {
  const {
    userDetails, classes, handleChange, onSave, departments, teams, info, action
  } = props;
  const getOptions = (options,key)=> {
    if(options && options.length) {
      return options.map((option) => {
        return (<MenuItem key={option.id+key} value={option.id}>{option.name}</MenuItem>);
      });
    }
  }
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
            Manage User
        </Typography>
        <form className={classes.form} onSubmit={(e) => { e.preventDefault(); onSave(); }}>
          <FormControl margin="normal" disabled={action == 'view'} required fullWidth>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Input
              id="firstName"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              value={userDetails.firstName || ''}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" disabled={action == 'view'} required fullWidth>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input
              name="lastName"
              id="lastName"
              autoComplete="lastName"
              value={userDetails.lastName || ''}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" disabled={action == 'view'} required fullWidth>
            <InputLabel htmlFor="roleId">Role</InputLabel>
            <Select
              value={userDetails.roleId || 0}
              onChange={handleChange}
              inputProps={{
                name: 'roleId',
                id: 'roleId',
              }}
            >
              <MenuItem disabled value={0}>NONE</MenuItem>
              {getOptions(info.roles, 'roles')}
            </Select>
          </FormControl>
          <FormControl margin="normal" disabled={action == 'view'} required fullWidth>
            <InputLabel htmlFor="positionId">Position</InputLabel>
            <Select
              value={userDetails.positionId  || 0}
              onChange={handleChange}
              inputProps={{
                name: 'positionId',
                id: 'positionId',
              }}
            >
              <MenuItem disabled value={0}>NONE</MenuItem>
              {getOptions(info.positions, 'positions')}
            </Select>
          </FormControl>
          <FormControl margin="normal" disabled={action == 'view'} required fullWidth>
            <InputLabel htmlFor="storeId">Store</InputLabel>
            <Select
              value={userDetails.storeId  || 0}
              onChange={handleChange}
              inputProps={{
                name: 'storeId',
                id: 'storeId',
              }}
            >
              <MenuItem disabled value={0}>NONE</MenuItem>
              {getOptions(info.stores, 'stores')}
            </Select>
          </FormControl>
          <FormControl margin="normal" disabled={!departments.length || action == 'view'} fullWidth>
            <InputLabel htmlFor="departmentId">Department</InputLabel>
            <Select
              value={userDetails.departmentId  || 0}
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
          <FormControl margin="normal" disabled={!teams.length || action == 'view'} fullWidth>
            <InputLabel htmlFor="teamId">Team</InputLabel>
            <Select
              value={userDetails.teamId  || 0}
              onChange={handleChange}
              inputProps={{
                name: 'teamId',
                id: 'teamId',
              }}
            >
              <MenuItem value={0}>NONE</MenuItem>
              {getOptions(teams, 'teams')}
            </Select>
          </FormControl>
          <FormControl margin="normal" disabled={action == 'view'} required fullWidth>
            <InputLabel htmlFor="weeklyHours">Weekly Hours</InputLabel>
            <Input
              name="weeklyHours"
              id="weeklyHours"
              type="text"
              autoComplete="weeklyHours"
              value={userDetails.weeklyHours || null}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" disabled={action == 'view'} required fullWidth>
            <InputLabel htmlFor="daysOff">Days Off</InputLabel>
            <Input
              name="daysOff"
              id="daysOff"
              type="text"
              autoComplete="daysOff"
              value={userDetails.daysOff || null}
              onChange={handleChange}
            />
          </FormControl>
          {action=='add' &&
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                id="password"
                type="password"
                autoComplete="password"
                value={userDetails.password || ''}
                onChange={handleChange}
              />
            </FormControl>
          }
          {action!='view' &&
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
              Save
            </Button>
          }
          
        </form>
      </Paper>
    </main>);
};

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  onSave: PropTypes.func,
  userDetails: PropTypes.object,
  departments: PropTypes.array,
  teams: PropTypes.array,
  info: PropTypes.object,
  action: PropTypes.string.isRequired
};

export default withStyles(styles)(UserForm);
