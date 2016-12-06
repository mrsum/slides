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
            <p>A <b>node.js</b> tool for <b>developing</b> and <b>building</b><br/>isomorphic web applications</p>
          </section>

          <section>
            <h1>SPA</h1>
            <ul>
              <li>Easier state tracking</li>
              <li>Caching on browser side</li>
              <li>No overhead latency on switching 'pages'</li>
            </ul>
          </section>

          <section>
            <h1>Goals</h1>
            <ul>
              <li>Good for very responsive sites</li>
              <li>Don't need to use extra queries to the server</li>
              <li>Look's like another one client for API</li>
              <li>Similar codebase</li>
            </ul>
          </section>

          <section>
            <h1>Problems</h1>
            <ul>
              <li><b>SEO</b></li>
              <li>Client/Server code partitioning</li>
              <li>No content if javascript is disabled</li>
              <li>Browser history</li>
              <li>Speed of initial load</li>
              <li>Lot of buisenes logic</li>
            </ul>
          </section>

          <section>
            <h1>How to solve?</h1>
          </section>

          <section>
            <h1>SSR</h1>
            <p>Server Side Rendering</p>
          </section>

          <section>
            <h1>Goals</h1>
            <ul>
              <li><b>SEO</b></li>
              <li>Has content if javascript is disabled</li>
            </ul>
          </section>

          <section>
            <h1>Problems</h1>
            <ul>
              <li>Lot of buisenes logic</li>
              <li>Developers should maintain two different views for client/server side</li>
              <li>One zone of responsibility for fronted/backend developers</li>
              <li>Long time feature developing</li>
            </ul>
          </section>

          <section>
            <h1>Whats next?</h1>
          </section>

          <section
            className={styles.title}
            data-background-image='http://www.technocrazed.com/wp-content/uploads/2015/12/HD-Space-Wallpaper-For-Background-6.jpg'>
            <h1>Isomorphic<br/>Web App</h1>
          </section>

          <section>
            <h1>Goals</h1>
            <ul>
              <li><b>SEO</b></li>
              <li>JavaScript code that can run on both the client and server</li>
              <li>Same view layer</li>
              <li>Looks like another client for API</li>
              <li>Similar code base</li>
              <li>Has content if javascript is disabled</li>
              <li>Easier state tracking</li>
              <li>Caching on browser side</li>
              <li>No overhead latency on switching 'pages'</li>
            </ul>
          </section>

          <section>
            <h1>Problems</h1>
            <ul>
              <li>Complexity</li>
              <li>Lot of buisenes logic</li>
              <li>Developers should have high expierence level</li>
            </ul>
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
