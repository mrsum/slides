'use strict';

// ======================
// Depends
// ======================
import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

// ======================
// Load stylesheets
// ======================
import '_app/assets/stylesheets/app.styl';
import '_app/assets/stylesheets/vendors/reveal.css';
import '_app/assets/stylesheets/vendors/reveal-theme.css';

// ======================
// Routes
// ======================
import createRoutes from './routes';

// ------------------------------------
// Prepare data
// ------------------------------------
const MOUNT_NODE = document.getElementById('slides');

const routes = (
  <Router history={hashHistory}>
    { /*  get shared routes */}
    { createRoutes() }
  </Router>
);

// ------------------------------------
// Render applciation
// ------------------------------------
render(routes, MOUNT_NODE);
