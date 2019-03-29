/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AuthPage from 'containers/AuthPage/Loadable';
import Admin from 'containers/Admin/Loadable';
import Unauthorized from 'components/Unauthorized';

import authenticate from 'containers/Authenticate/index';


const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={authenticate(HomePage, 'user')} />
      <Route path="/unauthorized" component={Unauthorized} />
      <Route path="/authentication" component={AuthPage} />
      <Route path="/admin" component={authenticate(Admin, 'admin')} />
      <Route path="" component={NotFoundPage} />

    </Switch>
  </div>
);

export default App;
