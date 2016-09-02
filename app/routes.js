'use strict';

// define components
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import PageComponent from './components/page';

export default (function(container) {
  return {
    '': () => {
      ReactDOM.render(<PageComponent slide='es6es7'/>, container);
    },
    '/:page': () => {
      ReactDOM.render(<PageComponent slide='es6es7' />, container);
    },
    '/:page/:section': () => {
      ReactDOM.render(<PageComponent slide='es6es7' />, container);
    },
    'slides/:id': (id) => {
      ReactDOM.render(<PageComponent slide={id.toLowerCase()} />, container);
    }
  };
}(document.getElementById('slides')));
