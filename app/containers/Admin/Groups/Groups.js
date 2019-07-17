/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import EnhancedTable from 'components/EnhancedTable'
import TableButtons from 'components/TableButtons'

export default class Groups extends React.PureComponent {
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
          <title>Users</title>
          <meta name="description" content="Admin" />
        </Helmet>
        <EnhancedTable
          initialData={[
            [
              'Somodi',
              'Robert',
              'somodirobert24@gmail.com',
              'Department Manager',
              'Food',
              <TableButtons key={123} />,
            ],
          ]}
          rows={[
            {
              id: 'first_name',
              numeric: false,
              disablePadding: false,
              label: 'First name',
            },
            {
              id: 'last_name',
              numeric: false,
              disablePadding: false,
              label: 'Last name',
            },
            {
              id: 'email',
              numeric: false,
              disablePadding: false,
              label: 'Email',
            },
            {
              id: 'position',
              numeric: false,
              disablePadding: false,
              label: 'Position',
            },
            {
              id: 'department',
              numeric: false,
              disablePadding: false,
              label: 'Department',
            },
            {
              id: 'actions',
              numeric: false,
              disablePadding: false,
              label: 'Actions',
            },
          ]}
        />
      </div>
    )
  }
}
