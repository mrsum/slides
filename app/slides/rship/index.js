'use strict';

// Depends
import styles from './_styles';
import React, { Component } from 'react';

const Slide = class Slide extends Component {

  render() {
    return (
      <section className={`reveal ${styles.container}`}>
        <div className='slides'>
          {/*  slide#1 */}
          <section
            className={styles.title}
            data-background-image='https://s-media-cache-ak0.pinimg.com/originals/cc/08/24/cc0824888d22097990fe751bb7369eff.jpg'>
            <img src='https://rambler-digital-solutions.github.io/rship/styles/images/logo.svg' width='150px' />
            <h1>RSHIP</h1>
            <p>Node.js tool for developing and building<br/>isomorphic web apps</p>
          </section>
          {/*  slide#1 */}

          {/*  slide#2 */}
          <section>
            <h1>isomorphic web app / server side rendering</h1>
          </section>
          {/*  slide#2 */}

          {/*  slide#3 */}
          <section>
            <h1></h1>
          </section>
          {/*  slide#3 */}

        </div>
      </section>
    );
  }
};

export default Slide;
