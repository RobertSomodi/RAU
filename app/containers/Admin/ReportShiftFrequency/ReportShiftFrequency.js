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
import ReportForm from 'components/ReportForm';
import ReportTable from 'components/ReportTable';
import Button from '@material-ui/core/Button';

import { styles } from './styles';

class ReportShiftFrequency extends React.PureComponent {
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
    if (this.props.searchOptions.storeId && prevProps.searchOptions.storeId != this.props.searchOptions.storeId) {
      await this.props.getDepartmentsByStoreId(this.props.searchOptions.storeId);
    }
  }

  handleChange = async (event) => {
    const searchOptions = Object.assign({}, this.props.searchOptions);
    searchOptions[event.target.name] = event.target.value;

    if (event.target.name == 'storeId') {
      searchOptions.departmentId = 0;
    }

    this.props.onSearchOptionsChange(searchOptions);
  }

  generateHeader() {
    const header = ['Date'];
    this.props.info.shifts.forEach((shift) => {
      header.push((<div style={{ backgroundColor: shift.color, color: '#fff', padding: '4px' }}>{shift.name}</div>));
    });

    return header;
  }

  generateRows() {
    const rows = [];
    Object.keys(this.props.reportShiftFrequency).forEach((key, index) => {
      const row = [];
      row.push(key);
      this.props.info.shifts.forEach((shift) => {
        if (this.props.reportShiftFrequency[key].shifts) {
          if (this.props.reportShiftFrequency[key].shifts[shift.id]) {
            row.push((<span>{`Count: ${this.props.reportShiftFrequency[key].shifts[shift.id]}`}<br></br>{`Percent: ${this.props.reportShiftFrequency[key].percent[shift.id]}`}</span>));
          } else {
            row.push('n/a');
          }
        } else {
          row.push('n/a');
        }
      });
      rows.push(row);
    });
    return rows;
  }

  render() {
    console.log(this.props.reportShiftFrequency);
    if (this.props.info && Object.keys(this.props.info).length > 0 && this.props.info.stores) {
      return (
        <div>
          <Helmet>
            <title>reportShiftFrequency</title>
            <meta name="description" content="Admin" />
          </Helmet>
          <CssBaseline />
          <ReportForm
            searchOptions={this.props.searchOptions}
            handleChange={this.handleChange}
            onSearch={this.onSearch}
            departments={this.props.departments}
            info={this.props.info}
          />
          {this.props.reportShiftFrequency && Object.keys(this.props.reportShiftFrequency).length > 0 &&
          <ReportTable
            rows={this.generateRows()}
            header={this.generateHeader()}
            dynamicCols={false}
          />
          }
        </div>
      );
    }
    return (
      <div>
        <Helmet>
          <title>reportShiftFrequency</title>
          <meta name="description" content="Admin" />
        </Helmet>
      </div>
    );
  }
}

ReportShiftFrequency.propTypes = {
  info: PropTypes.object,
  classes: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
  departments: PropTypes.array,
  reportShiftFrequency: PropTypes.object,
  onSearchOptionsChange: PropTypes.func.isRequired,
  getDepartmentsByStoreId: PropTypes.func.isRequired,
  searchOptions: PropTypes.object.isRequired
};

export default withStyles(styles)(ReportShiftFrequency);
