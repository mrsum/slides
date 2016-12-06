'use strict';

// ======================
// Depends
// ======================
import styles from './_styles';
import React, { Component } from 'react';

const Slide = class Slide extends Component {

  render() {
    return (
      <section className={`reveal ${styles.container}`}>
        <div className='slides'>

          <section
            className={styles.title}
            data-background-image='https://s-media-cache-ak0.pinimg.com/originals/cc/08/24/cc0824888d22097990fe751bb7369eff.jpg'>
            <img src='https://rambler-digital-solutions.github.io/rship/styles/images/logo.svg' width='150px' />
            <h1>RSHIP</h1>
            <p>Node.js tool for developing and building<br/>isomorphic web apps</p>
          </section>

          <section>
            <h1>SPA</h1>
            <ul>
              <li>A lot of logic</li>
            </ul>
          </section>

          <section>
            <h1>Goals</h1>
          </section>

          <section>
            <h1>Problems</h1>
          </section>

          <section>
            <h1>Is it possible?</h1>
          </section>

          <section>
            <h1>Server Side Rendering (SSR)</h1>
          </section>

          <section>
            <h1>Goals</h1>
          </section>

          <section>
            <h1>Problems</h1>
          </section>

          <section>
            <h1>Isomorphic Web App</h1>
          </section>

          <section>
            <h1>Goals</h1>
          </section>

          <section>
            <h1>Problems</h1>
          </section>

          <section>
            <img src='https://rambler-digital-solutions.github.io/rship/styles/images/logo.svg' width='150px' />
            <h1>RSHIP</h1>
          </section>

        </div>
      </section>
    );
  }
};

export default Slide;
