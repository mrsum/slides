'use strict';

import styles from './_styles';
import Slides from '_app/slides';
import React, { Component, PropTypes } from 'react';

const PageComponent = class PageComponent extends Component {

  static propTypes = {
    slide: PropTypes.string
  };

  static defaultProps = {
    slide: ''
  }

  render() {
    let Slide = Slides[this.props.slide] || false;
    return (
      <section className={styles.container}>
        <Slide />
      </section>
    );
  }
};

export default PageComponent;
