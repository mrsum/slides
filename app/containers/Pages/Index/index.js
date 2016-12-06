'use strict';

// ======================
// Depends
// ======================
import styles from './_styles';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
        <Link to='/slide/rship'>
          <div className={styles.slide}>
            RSHIP
          </div>
        </Link>

        <Link to='/slide/es6es7'>
          <div className={styles.slide}>
            ES6 under the hood
          </div>
        </Link>

      </section>
    );
  }
};

export default PageComponent;
