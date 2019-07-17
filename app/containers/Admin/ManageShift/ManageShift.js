/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import ShiftForm from 'components/ShiftForm'

export default class ManageShift extends React.PureComponent {
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
      const shift = this.props.info.shifts.find(
        shiftObj => shiftObj.id == this.props.match.params.id
      )
      this.props.onShiftDetailsChange(shift)
    } else {
      this.props.onShiftDetailsChange({ id: null, name: null })
    }
  }

  handleChange = async event => {
    const shiftDetails = Object.assign({}, this.props.shift)
    shiftDetails[event.target.name] = event.target.value
    // if(event.target.name == 'startTime' || event.target.name == 'endTime') {
    //   shiftDetails[event.target.name]+= ':00';
    // }
    if (event.target.name == 'off') {
      shiftDetails[event.target.name] = event.target.value == 0 ? false : true
    }
    this.props.onShiftDetailsChange(shiftDetails)
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
    this.context.router.history.push(`/admin/shifts`)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Manage Shifts</title>
          <meta name="description" content="Dashboard page" />
        </Helmet>
        {(this.props.shift.id || this.state.action == 'add') &&
          this.props.info && (
            <ShiftForm
              shiftDetails={this.props.shift}
              handleChange={this.handleChange}
              onSave={this.onSave}
              action={this.state.action}
            />
          )}
      </div>
    )
  }
}

ManageShift.propTypes = {
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
  onShiftDetailsChange: PropTypes.func,
  info: PropTypes.object,
  shift: PropTypes.object,
}
