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
      history: true
    });
  }

  highlightCode() {
    let codeFormatting = function(element) {
      return niceCode(element.firstChild.nodeValue, {
        indent_size: 2
      });
    };

    ReactDOM.findDOMNode(this)
      .querySelectorAll('pre code').forEach(element => {
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
            data-background-image='http://wallpapercave.com/wp/NNo5yub.jpg'>
            <h1>ES6 / ES7</h1>
            <h6>under the hood</h6>
          </section>
          {/*  slide#1 */}


          {/*  slide#2 */}
          <section>
            <h1>ES6</h1>
            <h4>Standard ECMA-262 <br/> 6ᵗʰ Edition / June 2015</h4>
            <span className='fragment fade-in'>
              <h1>ES7</h1>
              <h4>Standard ECMA-262 <br/> 7ᵗʰ Edition / June 2016</h4>
            </span>
          </section>
          {/*  slide#2 */}


          {/*  slide#3 */}
          <section>
            <h1>+350</h1>
            <h4>features</h4>
          </section>
          {/*  slide#3 */}

          <section data-background-image='http://i.giphy.com/5yaou1jFxTV6M.gif'></section>

          <section>
            <section>
              <h1>ES6</h1>
            </section>
            <section className={styles.list}>
              <p>let + const</p>
              <p>Arrows and arrow functions</p>
              <p>Classes</p>
              <p>Enhanced object literals</p>
              <p>Template strings</p>
              <p>Destructuring</p>
              <p>Default + rest + spread</p>
              <p>Iterators + for..of</p>
              <p>Generators</p>
              <p>Unicode</p>
            </section>

            <section className={styles.list}>
              <p>Modules</p>
              <p>Module loaders</p>
              <p>Map + Set + Weakmap + Weakset</p>
              <p>Proxies</p>
              <p>Symbols</p>
              <p>Subclassable built-ins</p>
              <p>Promises</p>
              <p>Math + Number + String + Array + Object</p>
              <p>Reflect api</p>
              <p>Tail calls</p>
            </section>
          </section>

          <section>
            <section>
              <h1>ES7</h1>
            </section>
            <section className={styles.list}>
              <p>Defensible Classes</p>
              <p>Relationships</p>
              <p>String.prototype.at</p>
              <p>Reflect.isCallable</p>
              <p>Reflect.isConstructor</p>
              <p>Additional metaproperties</p>
              <p>Function Bind Syntax</p>
              <p>Do Expressions</p>
              <p>Method Parameter Decorators</p>
            </section>
            <section className={styles.list}>
              <p>Function Expression Decorators</p>
              <p>Zones</p>
              <p>Object enumerables</p>
              <p>Nested import declarations</p>
              <p>export * as ns from "mod";</p>
              <p>export v from "mod";</p>
              <p>Observable</p>
              <p>String.prototype.matchAll</p>
              <p>Private Fields</p>
              <p>WeakRefs</p>
            </section>

            <section className={styles.list}>
              <p>Cancelable Promises</p>
              <p>ArrayBuffer.transfer</p>
              <p>Math Extensions</p>
              <p>Template Literal Revision</p>
              <p>System.global</p>
              <p>Shared memory and atomics</p>
              <p>Rest and Spread properties</p>
              <p>function.sent Meta Property</p>
              <p>Asynchronous Iterators</p>
            </section>
            <section className={styles.list}>
              <p>Class Property Declarations</p>
              <p>Promise.prototype.finally</p>
              <p>Public Class Fields</p>
              <p>String.prototype. 'trimLeft, trimRight'</p>
              <p>Class and Property Decorators</p>
              <p>Function.prototype.toString revision</p>
              <p>SIMD APIs</p>
              <p>Lifting Template Literal Restriction</p>
              <p>Async Functions</p>
              <p>Trailing commas in function parameter lists and calls</p>
            </section>
          </section>

          <section data-background-image='http://i.giphy.com/BA37nbRYsqwKI.gif'></section>

          <section>
            <h1>ES6</h1>
          </section>

          <section>
            <h4>Let + Const</h4>
            <pre>
              <code className='javascript es6'>
              {`
                function f() {
                  {
                    let x;
                    {
                      // okay, block scoped name
                      const x = "sneaky";
                      // error, const
                      x = "foo";
                    }
                    // error, already declared in block
                    let x = "inner";
                  }
                }
              `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Arrows</h4>
            <pre>
              <code className='js'>
              {`
                // Expression bodies
                let odds = evens.map(v => v + 1);
                let nums = evens.map((v, i) => v + i);
                let pairs = evens.map(v => ({even: v, odd: v + 1}));
              `}
              </code>
            </pre>

            <span className='fragment fade-in'>
              <pre>
                <code className='js'>
                {`
                  // Statement bodies
                  nums.forEach(v => {
                    if (v % 5 === 0)
                      fives.push(v);
                  });
                `}
                </code>
              </pre>
            </span>

            <span className='fragment fade-in'>
              <pre>
                <code className='js'>
                {`
                  // Lexical this
                  var bob = {
                    _name: "Bob",
                    _friends: [],
                    printFriends() {
                      this._friends.forEach(f =>
                        console.log(this._name + " knows " + f));
                    }
                  }
                `}
                </code>
              </pre>
            </span>
          </section>

          <section>
            <h4>Classes</h4>
            <pre>
              <code className='js'>
              {`
                class SkinnedMesh extends THREE.Mesh {
                  constructor(geometry, materials) {
                    super(geometry, materials);
                  }
                  update(camera) {
                    super.update();
                  }
                  get boneCount() {
                    return this.bones.length;
                  }
                  set matrixType(matrixType) {
                    this.idMatrix = SkinnedMesh[matrixType]();
                  }
                  static defaultMatrix() {
                    return new THREE.Matrix4();
                  }
                }
              `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Enhanced Object Literals</h4>
            <pre>
              <code className='js'>
              {`
                var obj = {
                  // __proto__
                  __proto__: theProtoObj,
                  // Shorthand for ‘handler: handler’
                  handler,
                  // Methods
                  toString() {
                   // Super calls
                   return "d " + super.toString();
                  },
                  // Computed (dynamic) property names
                  [ 'prop_' + (() => 42)() ]: 42
                };
              `}</code>
            </pre>
          </section>

          <section>
            <h4>Template Strings</h4>
            <pre>
              <code className='js'>
              {`
                // String interpolation
                var name = 'Bob';
                var time = 'today';
                \`Hello \$\{name}, how are you \$\{time}?\`
              `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Destructuring</h4>
            <pre>
              <code className='js'>
              {`
                // list matching
                var [a, , b] = [1,2,3];

                // object matching shorthand
                var {op, lhs, rhs} = getASTNode()
              `}
              </code>
            </pre>
            <pre>
              <code className='js'>
              {`
                // Can be used in parameter position
                function g({ name: x }) {
                  console.log(x);
                };

                g({ name: 5 })
              `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Default + Rest + Spread</h4>
            <pre>
              <code className='js'>
              {`
                function f(x, y=12) {
                  // y is 12 if not passed (or passed as undefined)
                  return x + y;
                }
                f(3) == 15
              `}
              </code>
            </pre>
            <pre>
              <code className='js'>
              {`
                function f(x, ...y) {
                  // y is an Array
                  return x * y.length;
                }
                f(3, "hello", true) == 6
              `}
              </code>
            </pre>
            <pre>
              <code className='js'>
              {`
                function f(x, y, z) {
                  return x + y + z;
                }
                // Pass each elem of array as argument
                f(...[1,2,3]) == 6
              `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Iterators + For..Of</h4>
            <pre>
              <code className='js'>
              {`
                let fibonacci = {
                  [Symbol.iterator]() {
                    let pre = 0;
                    let cur = 1;
                    return {
                      next() {
                        [pre, cur] = [cur, pre + cur];
                        return { done: false, value: cur }
                      }
                    }
                  }
                }
              `}
              </code>
            </pre>
            <pre>
              <code className='js'>
              {`
                for (var n of fibonacci) {
                  // truncate the sequence at 1000
                  if (n > 1000){
                    break;
                  }
                  console.log(n);
                }
              `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Generators</h4>
            <pre>
              <code className='js'>
              {`
                var fibonacci = {
                  [Symbol.iterator]: function*() {
                    var pre = 0;
                    let cur = 1;
                    for (;;) {
                      var temp = pre;
                      pre = cur;
                      cur += temp;
                      yield cur;
                    }
                  }
                }
              `}
              </code>
            </pre>
            <pre>
              <code className='js'>
              {`
                for (var n of fibonacci) {
                  // truncate the sequence at 1000
                  if (n > 1000) break;
                  console.log(n);
                }
              `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Unicode</h4>
            <pre>
              <code className='js'>
              {`
                // same as ES5.1
                '𠮷'.length == 2

                // new RegExp behaviour, opt-in ‘u’
                '𠮷'.match(/./u)[0].length == 2

                // new form
                '\u{20BB7}'=='𠮷'=='\uD842\uDFB7'

                // new String ops
                '𠮷'.codePointAt(0) == 0x20BB7

                // for-of iterates code points
                for(var c of '𠮷') {
                  console.log(c);
                }
              `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Module Loaders</h4>
            <pre>
              <code className='js'>
              {`
                // lib/math.js
                export function sum(x, y) {
                  return x + y;
                }
                export var pi = 3.141593;
              `}
              </code>
            </pre>
            <pre>
              <code className='js'>
              {`
                // app.js
                import * as math from "lib/math";
                alert("2π = " + math.sum(math.pi, math.pi));
              `}
              </code>
            </pre>
            <pre>
              <code className='js'>
              {`
                // otherApp.js
                import { sum, pi } from "lib/math";
                alert("2π = " + sum(pi, pi));
              `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Map + Set + WeakMap + WeakSet</h4>
            <pre>
              <code className='js'>
              {`
                // Sets
                var s = new Set();
                s.add('hello').add('goodbye').add('hello');
                s.size === 2;
                s.has('hello') === true;
              `}
              </code>
            </pre>
            <pre>
              <code className='js'>
              {`
                // Maps
                var m = new Map();
                m.set('hello', 42);
                m.set(s, 34);
                m.get(s) == 34;
              `}
              </code>
            </pre>
            <pre>
              <code className='js'>
              {`
                // Weak Maps
                var wm = new WeakMap();
                wm.set(s, { extra: 42 });
                wm.size === undefined
              `}
              </code>
            </pre>
          </section>

          <section>
            <section>
              <h4>Proxying a normal object</h4>
              <pre>
                <code className='js'>
                {`
                  var target = {};
                  var handler = {
                    get: function (receiver, name) {
                      return \`Hello, \$\{name}!\`;
                    }
                  };

                  var p = new Proxy(target, handler);
                  p.world === 'Hello, world!';
                `}
                </code>
              </pre>
            </section>

            <section>
              <h4>Proxying a function object</h4>
              <pre>
                <code className='js'>
                {`
                  var target = function () { return 'I am the target'; };
                  var handler = {
                    apply: function (receiver, ...args) {
                      return 'I am the proxy';
                    }
                  };

                  var p = new Proxy(target, handler);
                  p() === 'I am the proxy';
                `}
                </code>
              </pre>
            </section>
          </section>

          <section>
            <h4>Symbols</h4>
            <pre>
              <code className='js'>
              {`
                var MyClass = (function() {
                  // module scoped symbol
                  var key = Symbol('key');

                  function MyClass(privateData) {
                    this[key] = privateData;
                  }

                  MyClass.prototype = {
                    doStuff: function() {
                      ... this[key] ...
                    }
                  };

                  return MyClass;
                })();

                var c = new MyClass('hello')
                c['key'] === undefined
              `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Subclassable Built-ins</h4>
            <pre>
              <code className='js'>
              {`
                // Pseudo-code of Array
                class Array {
                    constructor(...args) { /* ... */ }
                    static [Symbol.create]() {
                        // Install special [[DefineOwnProperty]]
                        // to magically update 'length'
                    }
                }
              `}
              </code>
            </pre>
            <pre>
              <code className='js'>
              {`
                // User code of Array subclass
                class MyArray extends Array {
                    constructor(...args) { super(...args); }
                }
              `}
              </code>
            </pre>
            <pre>
              <code className='js'>
              {`
                var arr = new MyArray();
                arr[1] = 12;
                arr.length == 2
              `}
              </code>
            </pre>
          </section>

          <section>
            <section>
              <h4>Math + Number + String + Array API's</h4>
              <pre>
                <code className='js'>
                {`
                  Number.EPSILON
                  Number.isInteger(Infinity) // false
                  Number.isNaN('NaN') // false
                `}
                </code>
              </pre>
              <pre>
                <code className='js'>
                {`
                  Math.acosh(3) // 1.762747174039086
                  Math.hypot(3, 4) // 5
                  Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2
                `}
                </code>
              </pre>
              <pre>
                <code className='js'>
                {`
                  'abcde'.includes('cd') // true
                  'abc'.repeat(3) // "abcabcabc"
                `}
                </code>
              </pre>
              <pre>
                <code>
                {`
                  // Returns a real Array
                  Array.from(document.querySelectorAll('*'));
                  // Similar to new Array(...) but without special one-arg behavior
                  Array.of(1, 2, 3)
                `}
                </code>
              </pre>
            </section>
            <section>
              <h4>Object API's</h4>
              <pre>
                <code className='js'>
                {`
                  [0, 0, 0].fill(7, 1) // [0,7,7]
                  [1, 2, 3].find(x => x == 3) // 3
                  [1, 2, 3].findIndex(x => x == 2) // 1
                  [1, 2, 3, 4, 5].copyWithin(3, 0) // [1, 2, 3, 1, 2]
                  ['a', 'b', 'c'].entries() // iterator [0, 'a'], [1,'b'], [2,'c']
                  ['a', 'b', 'c'].keys() // iterator 0, 1, 2
                  ['a', 'b', 'c'].values() // iterator 'a', 'b', 'c'

                  Object.assign(Point, { origin: new Point(0,0) })
                `}
                </code>
              </pre>
            </section>
          </section>

          <section>
            <h4>Promises</h4>
            <pre>
              <code className='js'>
              {`
                function timeout(duration = 0) {
                  return new Promise((resolve, reject) => {
                      setTimeout(resolve, duration);
                  })
                }

                var p = timeout(1000).then(() => {
                    return timeout(2000);
                }).then(() => {
                    throw new Error("hmm");
                }).catch(err => {
                    return Promise.all([timeout(100), timeout(200)]);
                })
              `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Tail Calls</h4>
            <pre>
              <code className='js'>
                {`
                  function factorial(n, acc = 1) {
                    'use strict';
                    if (n <= 1) return acc;
                    return factorial(n - 1, n * acc);
                  }

                  // Stack overflow in most implementations today,
                  // but safe on arbitrary inputs in ES6
                  factorial(100000)
                `}
              </code>
            </pre>
          </section>


          <section data-background-image='http://i.giphy.com/3rgXBAe5ZCUNrc952o.gif'></section>

          <section>
            <h1>ES7</h1>
          </section>

        </div>
      </section>
    );
  }
};

export default Slide;
