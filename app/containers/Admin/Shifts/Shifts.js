/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

import EnhancedTable from 'components/EnhancedTable';
import TableButtons from 'components/TableButtons';
import Button from '@material-ui/core/Button';
import { styles } from './styles';

class Shifts extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.onView = this.onView.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    this.context.router.history.push(`/admin/shifts/add/`);
  }

  onView(id) {
    this.context.router.history.push(`/admin/shifts/view/${id}`);
  }

  async onDelete(id) {
    await this.props.onDelete(id);
    await this.props.getInfo();
    this.forceUpdate();
  }

  onEdit(id) {
    this.context.router.history.push(`/admin/shifts/edit/${id}`);
  }

  generateRows() {
    let rows = [];
    this.props.info.shifts.forEach((position, index) => {
      rows[index] = [];
      rows[index].push(position.id);
      rows[index].push(position.name);
      rows[index].push(position.color);
      rows[index].push(position.off);
      rows[index].push(position.startTime);
      rows[index].push(position.endTime);
      rows[index].push(
      <TableButtons
         key={`position${position.id}`}
         objectId={position.id}
         onView={this.onView}
         onDelete={this.onDelete}
         onEdit={this.onEdit}
      />);
    });
    return rows;
  }

  render() {
    if(this.props.info && Object.keys(this.props.info).length > 0 && this.props.info.shifts){
      let rows = this.generateRows();
      return (
        <div>
          <Helmet>
            <title>Shifts</title>
            <meta name="description" content="Admin" />
          </Helmet>
          <CssBaseline />
          <Button variant="contained" color="primary" onClick={(ev) => {this.onAdd()}} className={this.props.classes.button}>
            Add shift
          </Button>
          {rows.length > 0 &&
          <EnhancedTable
            tableName="Shifts"
            initialData={rows}
            rows={[
            {
              id: 'id', numeric: true, disablePadding: false, label: 'ID'
            },
              {
              id: 'name', numeric: false, disablePadding: false, label: 'Name'
            },
            {
              id: 'color', numeric: false, disablePadding: false, label: 'Color'
            },
            {
              id: 'off', numeric: false, disablePadding: false, label: 'Working day'
            },
            {
              id: 'startTime', numeric: false, disablePadding: false, label: 'Start'
            },
            {
              id: 'endTime', numeric: false, disablePadding: false, label: 'End'
            },
            {
              id: 'actions', numeric: false, disablePadding: false, label: 'Actions'
            }
          ]}
          />
        }
        </div>
      );
    } else {
      return (
        <div>
          <Helmet>
            <title>Shifts</title>
            <meta name="description" content="Admin" />
          </Helmet>
          </div>
      )
    }
    
  }
}

Shifts.propTypes = {
  onDelete: PropTypes.func.isRequired,
  info: PropTypes.object,
  classes: PropTypes.object.isRequired,
  getInfo: PropTypes.func.isRequired
};

export default withStyles(styles)(Shifts);