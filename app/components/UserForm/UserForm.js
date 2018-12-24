import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { styles } from './styles';

const UserForm = (props) => {
  const {
    userDetails, classes, handleChange, onSave
  } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
            Manage User
        </Typography>
        <form className={classes.form} onSubmit={(e) => { e.preventDefault(); onSave(); }}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={userDetails.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={userDetails.password}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <Input
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              value={userDetails.confirmPassword}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="role">Role</InputLabel>
            <Select
              value={userDetails.role}
              onChange={handleChange}
              inputProps={{
                name: 'role',
                id: 'role',
              }}
            >
              <MenuItem value={'user'}>User</MenuItem>
              <MenuItem value={'admin'}>Admin</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              Save
          </Button>
        </form>
      </Paper>
    </main>);
};

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  onSave: PropTypes.func,
  userDetails: PropTypes.object
};

export default withStyles(styles)(UserForm);
