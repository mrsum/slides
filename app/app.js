'use strict';

// load variables
import Routes from './routes';
import Director from 'director';

// load stylesheet
import '_app/assets/stylesheets/app.styl';
import '_app/assets/stylesheets/vendors/reveal.css';
import '_app/assets/stylesheets/vendors/reveal-theme.css';

// start router
new Director.Router(Routes).init('/');
