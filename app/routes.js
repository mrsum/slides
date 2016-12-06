'use strict';

// ------------------------------
// Depends
// ------------------------------
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// ------------------------------
// Layout
// ------------------------------
import MainLayout from '_app/containers/Layouts/Main';

// ------------------------------
// Pages
// ------------------------------
import IndexPage from '_app/containers/Pages/Index';
import SlidePage from '_app/containers/Pages/Slide';

/**
 * Create routes
 * @param  {[type]} history [description]
 * @return {[type]}         [description]
 */
export default function() {
  return (
    <Route path='/' component={MainLayout}>
      <IndexRoute component={IndexPage} />
      <Route path='/slide/:name' component={SlidePage} />
    </Route>
  );
}
