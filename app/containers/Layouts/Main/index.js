'use strict';

// ------------------------------
// Depends
// ------------------------------
import styles from './_styles';
import React, { Component } from 'react';

const MainLayout = class MainLayout extends Component {

  render() {
    return (
      <app id='mrsum-slides'>
        <div className={styles.container}>
          { this.props.children }
        </div>
      </app>
    );
  }
};

export default MainLayout;
