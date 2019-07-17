/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import DepartmentForm from 'components/DepartmentForm'

export default class ManageDepartment extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      action: undefined,
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  componentWillMount() {
    if (this.props.match.path.indexOf('edit') != -1) {
      this.setState({ action: 'edit' })
    }
    if (this.props.match.path.indexOf('add') != -1) {
      this.setState({ action: 'add' })
    }
    if (this.props.match.path.indexOf('view') != -1) {
      this.setState({ action: 'view' })
    }
  }

  componentDidMount() {
    if (
      (this.state.action == 'edit' || this.state.action == 'view') &&
      this.props.info
    ) {
      const department = this.props.info.departments.find(
        departmentObj => departmentObj.id == this.props.match.params.id
      )
      this.props.onDepartmentDetailsChange(department)
    } else {
      this.props.onDepartmentDetailsChange({ id: null, name: null })
    }
  }

  handleChange = async event => {
    const departmentDetails = Object.assign({}, this.props.department)
    departmentDetails[event.target.name] = event.target.value

    this.props.onDepartmentDetailsChange(departmentDetails)
  }

  async onSave() {
    switch (this.state.action) {
      case 'edit':
        await this.props.onEdit()
        break
      case 'add':
        await this.props.onAdd()
        break
      default:
        break
    }
    this.context.router.history.push(`/admin/departments`)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Manage Departments</title>
          <meta name="description" content="Dashboard page" />
        </Helmet>
        {(this.props.department.id || this.state.action == 'add') &&
          this.props.info && (
            <DepartmentForm
              departmentDetails={this.props.department}
              handleChange={this.handleChange}
              onSave={this.onSave}
              action={this.state.action}
            />
          )}
      </div>
    )
  }
}

ManageDepartment.propTypes = {
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
  onDepartmentDetailsChange: PropTypes.func,
  info: PropTypes.object,
  department: PropTypes.object,
}
