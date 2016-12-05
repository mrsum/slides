'use strict';

// Depends
import styles from './_styles';
import Slides from '_app/slides';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';
import niceCode from 'js-beautify';
import Reveal from 'reveal.js';

const PageComponent = class PageComponent extends Component {

  static propTypes = {
    slide: PropTypes.string
  };

  static defaultProps = {
    slide: ''
  }

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
      transitionSpeed: 'fast'
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
    let Slide = Slides[this.props.slide] || false;
    return (
      <section className={styles.container}>
        <Slide />
      </section>
    );
  }
};

export default PageComponent;
