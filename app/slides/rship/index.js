'use strict';

import styles from './_styles';

import hljs from 'highlight.js';
import niceCode from 'js-beautify';
import Reveal from 'reveal.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const Slide = class Slide extends Component {

  componentDidMount() {
    this.highlightCode();

    Reveal.initialize({
      // Display controls in the bottom right corner
      controls: true,

      // Display a presentation progress bar
      progress: true,

      // Display the page number of the current slide
      slideNumber: true,

      // Transition speed
      transitionSpeed: 'fast',

      // push state history
      // history: true
    });
  }

  highlightCode() {
    let codeFormatting = function(element) {
      return niceCode(element.firstChild.nodeValue, {
        indent_size: 2
      });
    };


    [].forEach.call(ReactDOM.findDOMNode(this).querySelectorAll('pre code'), function(element) {
      element.firstChild && element.firstChild.nodeValue.length > 0
        ? element.firstChild.nodeValue = codeFormatting(element)
        : null;

      hljs.highlightBlock(element);
    });
  }

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
            <h6>tool for developing <br/> isomprhic web apps</h6>
          </section>
          {/*  slide#1 */}

          {/*  slide#2 */}
          <section>
            <h1>What is rship?</h1>
          </section>
          {/*  slide#2 */}

        </div>
      </section>
    );
  }
};

export default Slide;
