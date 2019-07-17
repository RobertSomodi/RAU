/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

export default class DashboardPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Dashboard page" />
        </Helmet>
        <h1>Dashboard Page</h1>
      </div>
    )
  }
}
