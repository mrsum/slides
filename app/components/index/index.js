'use strict';

// Deepnds
import styles from './_styles.styl';
import React, { Component, PropTypes } from 'react';

const PageComponent = class PageComponent extends Component {

  static propTypes = {
    slide: PropTypes.string
  };

  static defaultProps = {
    slide: ''
  }

  render() {
    return (
      <section className={styles.container}>
        <h1>Choose slide:</h1>

        <a href='/#/slides/rship'>
          <div className={styles.slide}>
            RSHIP
          </div>
        </a>

        <a href='/#/slides/es6es7'>
          <div className={styles.slide}>
            ES6 under the hood
          </div>
        </a>

      </section>
    );
  }
};

export default PageComponent;
