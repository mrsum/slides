'use strict';

// define components
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import IndexPage from './components/index';
import PageComponent from './components/page';

export default (function(container) {
  return {
    '': () => {
      ReactDOM.render(<IndexPage />, container);
    },
    'slides/:id': (id) => {
      ReactDOM.render(<PageComponent slide={id.toLowerCase()} />, container);
    }
  };
}(document.getElementById('slides')));
