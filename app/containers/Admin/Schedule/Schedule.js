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
import ScheduleForm from 'components/ScheduleForm';
import ScheduleTable from 'components/ScheduleTable';
import Button from '@material-ui/core/Button';

import { styles } from './styles';

class Schedules extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  async onSearch() {
    await this.props.onSearch();
  }

  async componentDidUpdate(prevProps) {
    if(this.props.searchOptions.storeId && prevProps.searchOptions.storeId != this.props.searchOptions.storeId) {
      await this.props.getDepartmentsByStoreId(this.props.searchOptions.storeId);
    }
  }

  handleChange = async (event) => {
    const searchOptions = Object.assign({}, this.props.searchOptions);
    searchOptions[event.target.name] = event.target.value;

    if(event.target.name == 'storeId') {
      searchOptions['departmentId'] = 0;
    }

    this.props.onSearchOptionsChange(searchOptions);
  }

  generateRows() {
    let rows = [];
    this.props.info.schedules.forEach((position, index) => {
      rows[index] = [];
      rows[index].push(position.id);
      rows[index].push(position.name);
      rows[index].push();
    });
    return rows;
  }

  render() {
    console.log(this.props.schedule);
    if(this.props.info && Object.keys(this.props.info).length > 0 && this.props.info.stores){
      // let rows = this.generateRows();
      return (
        <div>
          <Helmet>
            <title>Schedules</title>
            <meta name="description" content="Admin" />
          </Helmet>
          <CssBaseline />
          <ScheduleForm
            searchOptions={this.props.searchOptions}
            handleChange={this.handleChange}
            onSearch={this.onSearch}
            departments={this.props.departments}
            info={this.props.info}
          />
          {this.props.schedule && this.props.schedule.days &&  
            <ScheduleTable
              schedule={this.props.schedule}
              info={this.props.info}
            />
          }
        </div>
      );
    } else {
      return (
        <div>
          <Helmet>
            <title>Schedules</title>
            <meta name="description" content="Admin" />
          </Helmet>
          </div>
      )
    }
    
  }
}

Schedules.propTypes = {
  info: PropTypes.object,
  classes: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
  departments: PropTypes.array,
  schedule: PropTypes.object,
  onSearchOptionsChange: PropTypes.func.isRequired,
  getDepartmentsByStoreId: PropTypes.func.isRequired
};

export default withStyles(styles)(Schedules);