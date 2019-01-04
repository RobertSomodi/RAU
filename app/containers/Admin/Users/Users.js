/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import EnhancedTable from 'components/EnhancedTable';

export default class Users extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Users</title>
          <meta name="description" content="Admin" />
        </Helmet>
        <EnhancedTable
          initialData={
            [
              ['Cupcake', 305, 3.7, 67, 4.3]
            ]
          }
          rows={[{
            id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)'
          },
          {
            id: 'calories', numeric: true, disablePadding: false, label: 'Calories'
          },
          {
            id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)'
          },
          {
            id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)'
          },
          {
            id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)'
          }]}
        />

      </div>
    );
  }
}

