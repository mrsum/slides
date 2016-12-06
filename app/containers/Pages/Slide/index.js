'use strict';

// ======================
// Depends
// ======================
import styles from './_styles';
import Slides from '_app/slides';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';
import niceCode from 'js-beautify';
import Reveal from 'reveal.js';

/**
 * Page component
 * @type {[type]}
 */
const PageComponent = class PageComponent extends Component {

  /**
   * Propery types
   * @type {Object}
   */
  static propTypes = {
    routeParams: PropTypes.object
  };

  /**
   * Default properties value
   * @type {Object}
   */
  static defaultProps = {
    routeParams: {}
  }

  /**
   * @return {[type]} [description]
   */
  componentDidMount() {
    // highlight code samples
    this.highlightCode();
    // initialize reveal.js
    Reveal.initialize({
      // Display controls in the bottom right corner
      controls: true,
      // Display a presentation progress bar
      progress: true,
      // Display the page number of the current slide
      slideNumber: true,
      // Transition speed
      transitionSpeed: 'fast'
    });
  }

  /**
   * Highlight source code
   * @return {[type]} [description]
   */
  highlightCode() {
    let codeFormatting = function(element) {
      return niceCode(element.firstChild.nodeValue, {
        indent_size: 2
      });
    };

    // get pre code elements inside
    [].forEach.call(ReactDOM.findDOMNode(this).querySelectorAll('pre code'), function(element) {
      element.firstChild && element.firstChild.nodeValue.length > 0
        ? element.firstChild.nodeValue = codeFormatting(element)
        : null;

      // hightlight
      hljs.highlightBlock(element);
    });
  }


  render() {
    const { name } = this.props.routeParams;
    let Slide = Slides[name] || false;
    return (
      <section className={styles.container}>
        <Slide />
      </section>
    );
  }
};

export default PageComponent;
