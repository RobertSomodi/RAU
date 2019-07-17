/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import moment from 'moment'

import withStyles from '@material-ui/core/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'

import EnhancedTable from 'components/EnhancedTable'
import TableButtons from 'components/TableButtons'
import ReportForm from 'components/ReportForm'
import ReportTable from 'components/ReportTable'
import Button from '@material-ui/core/Button'

import { styles } from './styles'

class ReportClocking extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  async onSearch() {
    await this.props.onSearch()
  }

  async componentDidUpdate(prevProps) {
    if (
      this.props.searchOptions.storeId &&
      prevProps.searchOptions.storeId != this.props.searchOptions.storeId
    ) {
      await this.props.getDepartmentsByStoreId(this.props.searchOptions.storeId)
    }
  }

  handleChange = async event => {
    const searchOptions = Object.assign({}, this.props.searchOptions)
    searchOptions[event.target.name] = event.target.value

    if (event.target.name == 'storeId') {
      searchOptions.departmentId = 0
    }

    this.props.onSearchOptionsChange(searchOptions)
  }

  generateHeader() {
    const header = ['Date', 'Total']
    Object.keys(this.props.reportClocking.days).forEach(key => {
      header.push(`${moment(key).date()} - ${moment(key).format('ddd')}`)
    })
    return header
  }

  generateRows() {
    const rows = []
    Object.keys(this.props.reportClocking.rows).forEach((key, index) => {
      const row = []
      row.push(
        <div sometag={this.props.reportClocking.rows[key].id}>
          {this.props.reportClocking.rows[key].lastName}
          <br></br>
          {this.props.reportClocking.rows[key].firstName}
        </div>
      )
      let data = this.props.reportClocking.rows[key].data.map(obj => {
        if (obj) {
          return (
            <div>
              In: {obj.in ? obj.in : 'n/a'}
              <br></br>Out: {obj.out ? obj.out : 'n/a'}
            </div>
          )
        } else {
          return ''
        }
      })

      rows.push([...row, ...data])
    })

    return rows
  }

  render() {
    console.log(this.props.reportClocking)
    if (
      this.props.info &&
      Object.keys(this.props.info).length > 0 &&
      this.props.info.stores
    ) {
      return (
        <div>
          <Helmet>
            <title>reportClocking</title>
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
          {this.props.reportClocking &&
            Object.keys(this.props.reportClocking).length > 0 && (
              <ReportTable
                rows={this.generateRows()}
                header={this.generateHeader()}
                dynamicCols={true}
              />
            )}
        </div>
      )
    }
    return (
      <div>
        <Helmet>
          <title>reportClocking</title>
          <meta name="description" content="Admin" />
        </Helmet>
      </div>
    )
  }
}

ReportClocking.propTypes = {
  info: PropTypes.object,
  classes: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
  departments: PropTypes.array,
  reportClocking: PropTypes.object,
  onSearchOptionsChange: PropTypes.func.isRequired,
  getDepartmentsByStoreId: PropTypes.func.isRequired,
  searchOptions: PropTypes.object.isRequired,
}

export default withStyles(styles)(ReportClocking)
