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
import { styles } from './styles';

const PositionForm = (props) => {
  const {
    positionDetails, classes, handleChange, onSave, action
  } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
            Manage Position
        </Typography>
        <form className={classes.form} onSubmit={(e) => { e.preventDefault(); onSave(); }}>
          <FormControl margin="normal" disabled={action == 'view'} required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              autoFocus
              value={positionDetails.name || ''}
              onChange={handleChange}
            />
          </FormControl>
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

PositionForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  onSave: PropTypes.func,
  positionDetails: PropTypes.object,
  action: PropTypes.string.isRequired
};

export default withStyles(styles)(PositionForm);
