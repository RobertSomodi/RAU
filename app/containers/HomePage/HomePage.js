/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import './style.scss'

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {}

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="Carrefour Schedules"
          />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Start your next react project in seconds</h2>
            <p>
              A minimal <i>React-Redux</i> boilerplate with all the best
              practices
            </p>
          </section>
        </div>
      </article>
    )
  }
}
