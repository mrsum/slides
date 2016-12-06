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

          {/*  slide#1 */}
          <section
            className={styles.title}
            data-background-image='https://hsto.org/files/763/e78/11f/763e7811f7c74ee68068809bf1043990.jpg'>
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

          <section data-background-image='https://www.allenpike.com/images/2015/javascript-guy.jpg'></section>

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

          <section data-background-image='https://i.giphy.com/BA37nbRYsqwKI.gif'></section>

          <section>
            <h1>ES6</h1>
          </section>

          <section>
            <section>
              <h4>Const (ES6)</h4>
              <pre>
                <code className='javascript es6'>
                {`
                  const G = 9.8;
                `}
                </code>
              </pre>
            </section>
            <section>
              <h4>Const (ES5)</h4>
              <pre>
                <code className='javascript es6'>
                {`
                  Object.defineProperty(typeof global === "object" ? global : window, "G", {
                      value:        9.8
                      enumerable:   true,
                      writable:     false,
                      configurable: false
                  })
                `}
                </code>
              </pre>
            </section>
          </section>

          <section>
            <section>
              <h4>Block Scoping Functions (ES6)</h4>
              <pre>
                <code className='javascript es6'>
                {`
                  var a = 5;
                  var b = 10;

                  if (a === 5) {
                    let a = 4; // The scope is inside the if-block
                    var b = 1; // The scope is inside the function

                    console.log(a);  // 4
                    console.log(b);  // 1
                  }

                  console.log(a); // 5
                  console.log(b); // 1
                `}
                </code>
              </pre>
            </section>
            <section>
              <h4>Block Scoping Functions (ES5)</h4>
              <pre>
                <code className='javascript es6'>
                {`
                  var a = 5;
                  var b = 10;

                  if (a === 5) {
                    (function () {
                      var a = 4;
                      b = 1;

                      console.log(a); // 4
                      console.log(b); // 1
                    })();
                  }

                  console.log(a); // 5
                  console.log(b); // 1
                `}
                </code>
              </pre>
            </section>
          </section>

          <section>
            <section>
              <h4>Arrows (ES6)</h4>
              <pre>
                <code className='js'>
                {`
                  var evens = [2, 4, 6, 8, 10];
                  // Expression bodies
                  let odds = evens.map(v => v + 1);
                  let nums = evens.map((v, i) => v + i);
                  let pairs = evens.map(v => ({even: v, odd: v + 1}));
                  console.log(odds); // [3, 5, 7, 9, 11]
                  console.log(nums); // [2, 5, 8, 11, 14]
                `}
                </code>
              </pre>

              <span className='fragment fade-in'>
                <pre>
                  <code className='js'>
                  {`
                    var fives = [];
                    // Statement bodies
                    nums.forEach(v => {
                      if (v % 5 === 0)
                        fives.push(v);
                    });
                    console.log(fives); // [5, 15, 25]

                  `}
                  </code>
                </pre>
              </span>
            </section>

            <section>
              <h4>Arrows (ES5)</h4>
              <pre>
                <code className='js'>
                {`
                  var evens = [2, 4, 6, 8, 10];
                  // Expression bodies
                  var odds = evens.map(function (v) { return v + 1; }, this);
                  var nums = evens.map(function (v, i) { return v + i; }, this);
                  console.log(odds); // [3, 5, 7, 9, 11]
                  console.log(nums); // [2, 5, 8, 11, 14]
                `}
                </code>
              </pre>

              <span className='fragment fade-in'>
                <pre>
                  <code className='js'>
                  {`
                    var fives = [];
                    nums = [1, 2, 5, 15, 25, 32];

                    // Statement bodies
                    nums.forEach(function (v) {
                      if (v % 5 === 0) { fives.push(v); }
                    }, this);

                    console.log(fives); // [5, 15, 25]
                  `}
                  </code>
                </pre>
              </span>
            </section>
          </section>

          <section>
            <section>
              <h4>Classes (ES6)</h4>
              <pre>
                <code className='js'>
                {`
                  class Hello {
                    constructor(name) {
                      this.name = name;
                    }
                    hello() {
                      return 'Hello ' + this.name + '!';
                    }
                    static sayHelloAll() {
                      return 'Hello everyone!';
                    }
                  }
                `}
                </code>
              </pre>
              <span className='fragment fade-in'>
                <pre>
                  <code className='js'>
                  {`
                    class HelloWorld extends Hello {
                      constructor() {
                        super('World');
                      }
                      echo() {
                        alert(super.hello());
                      }
                    }
                    var hw = new HelloWorld();
                  `}
                  </code>
                </pre>
              </span>
            </section>
            <section>
              <h4>Classes (ES5)</h4>
              <pre>
                <code className='js'>
                {`
                  function Hello(name) {
                    this.name = name;
                  }
                  Hello.prototype.hello = function hello() {
                    return 'Hello ' + this.name + '!';
                  };
                  Hello.sayHelloAll = function () {
                    return 'Hello everyone!';
                  };
                  function HelloWorld() {
                    Hello.call(this, 'World');
                  }
                `}
                </code>
              </pre>
              <span className='fragment fade-in'>
                <pre>
                  <code className='js'>
                  {`
                    HelloWorld.prototype = Object.create(Hello.prototype);
                    HelloWorld.sayHelloAll = Hello.sayHelloAll;

                    HelloWorld.prototype.echo = function echo() {
                      alert(Hello.prototype.hello.call(this));
                    };

                    var hw = new HelloWorld();
                  `}
                  </code>
                </pre>
              </span>
            </section>
          </section>

          <section>
            <section>
              <h4>Computed Property Names (ES6)</h4>
              <pre>
                <code className='js'>
                {`
                  var prefix = 'foo';
                  var myObject = {
                    [prefix + 'bar']: 'hello',
                    [prefix + 'baz']: 'world'
                  };

                  console.log(myObject['foobar']); // hello
                  console.log(myObject['foobaz']); // world
                `}</code>
              </pre>
            </section>

            <section>
              <h4>Computed Property Names (ES5)</h4>
              <pre>
                <code className='js'>
                {`
                  var prefix = 'foo';
                  var myObject = {};

                  myObject[prefix + 'bar'] = 'hello';
                  myObject[prefix + 'baz'] = 'world';

                  console.log(myObject['foobar']); // hello
                  console.log(myObject['foobaz']); // world
                `}</code>
              </pre>
            </section>

          </section>

          <section>
            <section>
              <h4>Template Strings (ES6)</h4>
              <pre>
                <code className='js'>
                {`
                  // String interpolation
                  var name = 'Bob';
                  var time = 'today';
                  \`Hello \$\{name}, how are you \$\{time}?\`

                  // Expression interpolation. One use is readable inline math.
                  var a = 50;
                  var b = 100;
                  console.log(\`The number of JS frameworks: 
                  is \$\{a + b} and not \$\{2 * a + b}.\`);
                `}
                </code>
              </pre>
            </section>

            <section>
              <h4>Template Strings (ES5)</h4>
              <pre>
                <code className='js'>
                {`
                  // String interpolation
                  var name = 'Bob';
                  var time = 'today';
                  console.log('Hello ' + name + ', how are you' + today + '.')

                  // Expression interpolation. One use is readable inline math.
                  var a = 50;
                  var b = 100;
                  console.log('The number of JS frameworks is ' 
                    + (a + b) + 
                    ' and not ' 
                    + (2 * a + b) 
                    + '.');
                `}
                </code>
              </pre>
            </section>

          </section>

          <section>
            <section>
              <h4>Destructuring (ES6)</h4>
              <pre>
                <code className='js'>
                {`
                  // list matching
                  var { foo, bar } = {foo: 'lorem', bar: 'ipsum'};
                `}
                </code>
              </pre>
            </section>
            <section>
              <h4>Destructuring (ES5)</h4>
              <pre>
                <code className='js'>
                {`
                  'use strict';
                  var _ref = { foo: 'lorem', bar: 'ipsum' };

                  // foo => lorem and bar => ipsum
                  var foo = _ref.foo;
                  var bar = _ref.bar;
                `}
                </code>
              </pre>
            </section>

          </section>

          <section>
            <section>
              <h4>Default + Rest + Spread (ES6)</h4>
              <pre>
                <code className='js'>
                {`
                  function greet(msg='hello', name='world') {
                    console.log(msg,name);
                  }
                  greet() // hello, world
                `}
                </code>
              </pre>
              <span className='fragment fade-in'>
                <pre>
                  <code className='js'>
                  {`
                    function f(x, ...y) {
                      // y is an Array
                      return x * y.length;
                    }

                    console.log(f(3, 'hello', true) === 6);
                  `}
                  </code>
                </pre>
              </span>
              <span className='fragment fade-in'>
                <pre>
                  <code className='js'>
                  {`
                    function f(x, y, z) {
                      return x + y + z;
                    }
                    // Pass each elem of array as argument
                    f(...[1,2,3]) === 6;
                  `}
                  </code>
                </pre>
              </span>
            </section>
            <section>
              <h4>Default + Rest + Spread (ES5)</h4>
              <pre>
                <code className='js'>
                {`
                  function greet() {
                    var msg = arguments[0] === undefined ? 'hello' : arguments[0];
                    var name = arguments[1] === undefined ? 'world' : arguments[1];
                    console.log(msg, name);
                  }
                `}
                </code>
              </pre>
              <span className='fragment fade-in'>
                <pre>
                  <code className='js'>
                  {`
                    function f(x) {
                      var y = [];
                      y.push.apply(y, arguments) && y.shift();
                      // y is an Array
                      return x * y.length;
                    }
                    console.log(f(3, 'hello', true) === 6); // true
                  `}
                  </code>
                </pre>
              </span>
              <span className='fragment fade-in'>
                <pre>
                  <code className='js'>
                  {`
                    function f(x, y, z) {
                      return x + y + z;
                    }
                    // Pass each elem of array as argument
                    f.apply(null, [1, 2, 3]) === 6;
                  `}
                  </code>
                </pre>
              </span>
            </section>
          </section>

          <section>
            <section>
              <h4>For..Of (ES6)</h4>
              <pre>
                <code className='js'>
                {`
                  for (let element of [1, 2, 3]) {
                    console.log(element);
                  }
                  // => 1 2 3 not 0 1 2
                `}
                </code>
              </pre>
            </section>
            <section>
              <h4>For..Of (ES5)</h4>
              <pre>
                <code className='js'>
                {`
                  var a = [1,2,3];
                  for (var i = 0; i < a.length; ++i) {
                    console.log(a[i]);
                  }
                  // 1 2 3 not 0 1 2
                `}
                </code>
              </pre>
            </section>
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

          <section data-background-image='https://i.giphy.com/3rgXBAe5ZCUNrc952o.gif'></section>

          <section>
            <h4>Generators</h4>
            <pre>
              <code className='js'>
              {`
                function* idMaker(){
                    var index = 0;
                    while(true){
                      yield index++;
                    }
                }

                var gen = idMaker();
              `}
              </code>
            </pre>
            <span className='fragment fade-in'>
              <pre>
                <code className='js'>
                {`
                  console.log(gen.next().value); // 0
                  console.log(gen.next().value); // 1
                  console.log(gen.next().value); // 2
                `}
                </code>
              </pre>
            </span>
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
            <span className='fragment fade-in'>
              <pre>
                <code className='js'>
                {`
                  // app.js
                  import * as math from "lib/math";
                  alert("2π = " + math.sum(math.pi, math.pi));
                `}
                </code>
              </pre>
            </span>
            <span className='fragment fade-in'>
              <pre>
                <code className='js'>
                {`
                  // otherApp.js
                  import { sum, pi } from "lib/math";
                  alert("2π = " + sum(pi, pi));
                `}
                </code>
              </pre>
            </span>
          </section>

          <section>
            <section>
              <h4>Map + Set</h4>
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
              <span className='fragment fade-in'>
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
              </span>
            </section>

            <section>
              <h4>WeakMap + WeakSet</h4>
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
              <span className='fragment fade-in'>
                <pre>
                  <code className='js'>
                  {`
                    // Weak Sets
                    var ws = new WeakSet();
                    ws.add({ data: 42 });
                  `}
                  </code>
                </pre>
              </span>
            </section>
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
                let sym = Symbol();
                typeof sym; // symbol

                let sym = Symbol('name')
                sym.toString(); // Symbol(name)

                Symbol('name') == Symbol('name') // false

                let user = {
                  name: "Jhon",
                  age: 30,
                  [Symbol.for('isReal')]: true
                };

                // has no symbol in iteration
                Object.keys(user); // name, age

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
              <span className='fragment fade-in'>
                <pre>
                  <code className='js'>
                  {`
                    'abcde'.includes('cd') // true
                    'abc'.repeat(3) // 'abcabcabc'
                  `}
                  </code>
                </pre>
              </span>
              <span className='fragment fade-in'>
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
              </span>
            </section>

            <section>
              <h4>Object API's</h4>
              <pre>
                <code className='js'>
                {`
                  [0, 0, 0].fill(7, 1); // [0,7,7]
                  [1, 2, 3].find(x => x == 3); // 3
                  [1, 2, 3].findIndex(x => x == 2); // 1
                  [1, 2, 3, 4, 5].copyWithin(3, 0); // [1, 2, 3, 1, 2]
                  ['a', 'b', 'c'].entries(); // iterator [0, 'a'], [1,'b'], [2,'c']
                  ['a', 'b', 'c'].keys(); // iterator 0, 1, 2
                  ['a', 'b', 'c'].values(); // iterator 'a', 'b', 'c'

                  Object.assign(Point, { origin: new Point(0,0) })
                `}
                </code>
              </pre>
            </section>
          </section>

          <section data-background-image='https://i.giphy.com/ySggT6TkbhucU.gif'></section>

          <section>
            <h4>Promise</h4>
            <pre>
              <code className='js'>
              {`
                // Create Promise object
                let promise = new Promise((resolve, reject) => {
                  setTimeout(() => {
                    // set promise to fulfilled state with "result"
                    resolve('result');
                  }, 1000);
                });
              `}
              </code>
            </pre>

            <span className='fragment fade-in'>
              <pre>
                <code className='js'>
                {`
                  promise
                  .then(
                    result => {
                      // first function will execute before resolve
                      alert('Fulfilled: ' + result);
                    },
                    error => {
                      // secon function will execute on error
                      alert('Rejected: ' + error);
                    }
                  );
                `}
                </code>
              </pre>
            </span>
          </section>

          <section className={styles.title} data-background-image='https://i.giphy.com/dM2xuxnJCg4H6.gif'>
            <h1>ES7 / stage - 0</h1>
          </section>

          <section>
            <h4>Class Property Declarations</h4>
            <pre>
              <code className='js'>
                {`
                  // Class instance field
                  class MyClass {
                    myProp = 42;

                    constructor() {
                      console.log(this.myProp); // Prints '42'
                    }
                  }
                `}
                </code>
              </pre>
              <span className='fragment fade-in'>
                <pre>
                  <code className='js'>
                  {`

                    // Static property
                    class MyClass {
                      static myStaticProp = 42;

                      constructor() {
                        console.log(MyClass.myStaticProp); // Prints '42'
                      }
                    }
                  `}
                </code>
              </pre>
            </span>
          </section>

          <section>
            <h4>Defensible Classes</h4>
            <pre>
              <code className='js'>
                {`
                  const class Point { 
                    constructor(x, y) {
                      public getX() { return x; }
                      public getY() { return y; }
                    }
                    toString() { 
                      return \`<\$\{this.getX()\}, \$\{this.getY()\}>\`;
                    }
                  }
                `}
              </code>
            </pre>
          </section>

          <section>
            <h4>String.prototype.at</h4>
            <pre>
              <code className='js'>
                {`
                  'abc𝌆def'.at(3) // → '𝌆'
                `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Additional metaproperties</h4>
            <pre>
              <code className='js'>
                {`

                  let a = function() {};

                  // function object that is currently being 
                  // evaluated by the running execution context.
                  a.callee; 
                  
                  // number of arguments pass to the function
                  a.count;
                  
                  // array containing the actual 
                  // arguments passed to the function.
                  a.arguments;
                `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Function Bind Syntax</h4>
            <pre>
              <code className='js'>
                {`
                  // :: which performs this binding
                  // and method extraction.
                  Promise
                    .resolve(123)
                    .then(::console.log);
                `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Method Parameter Decorators</h4>
            <pre>
              <code className='js'>
                {`
                  class MyComponent {
                    refresh(@lastRefreshTime timeStamp) { … }
                  }

                  export function lastRefreshTime(...) {
                    // at minimum, the arguments of this function should contain:
                    // - reference to owner of the parameter (the method)
                    // - parameter index
                    // - parameter name
                    // - is parameter a rest parameter?

                    // store parameter metadata using the same storage mechanism
                    // as the one used for methods
                  }
                `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Function Expression Decorators</h4>
            <pre>
              <code className='js'>
                {`
                  scheduleForFrequentReexecution(@memoize function(value) { 
                    value++
                  });

                  export function memoize(...) {
                    // wrap the decorated function expression 
                    // memoization implementation and return it
                  }
                `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Object enumerables</h4>
            <pre>
              <code className='js'>
                {`
                  // Ordered list of keys.
                  Object.enumerableKeys(obj);
                `}
              </code>
            </pre>
            <span className='fragment fade-in'>
              <pre>
                <code className='js'>
                  {`
                    // Ordered list of Values.
                    Object.enumerableValues(obj);
                  `}
                </code>
              </pre>
            </span>
            <span className='fragment fade-in'>
              <pre>
                <code className='js'>
                  {`
                    // Ordered list of key value pairs.
                    Object.enumerableEntries(obj);
                  `}
                </code>
              </pre>
            </span>
          </section>

          <section>
            <h4>Nested import declarations</h4>
            <pre>
              <code className='js'>
                {`
                  describe('fancy feature #5', () => {
                    import { strictEqual } from 'assert';

                    // strictEqual will be avaliable here
                    it('should work on the client', () => {
                      import { check } from './client.js';
                      strictEqual(check(), 'client ok');
                    });
                  });
                `}
              </code>
            </pre>
          </section>

          <section className={styles.title} data-background-image='https://i.giphy.com/XpoVnTiN66bQI.gif'>
            <h1>ES7 / stage - 1</h1>
          </section>

          <section>
            <h4>export * as ns from 'mod';</h4>
            <pre>
              <code className='js'>
                {`
                  // Exporting the ModuleNameSpace
                  // object as a named export.

                  export * as ns from 'mod';
                `}
              </code>
            </pre>
            <span className='fragment fade-in'>
              <h4>export v from 'mod';</h4>
              <pre>
                <code className='js'>
                  {`
                    export v, {x, y as w} from 'mod';
                    export v, * as ns from 'mod';
                  `}
                </code>
              </pre>
            </span>
          </section>

          <section>
            <h4>String.prototype.matchAll</h4>
            <pre>
              <code className='js'>
                {`
                  var str = 'Hello world!!!';
                  var regexp = /(\w+)\W*/g;
                  console.log(str.matchAll(regexp));

                  /*
                    [
                      {
                        0: "Hello ",
                        1: "Hello"
                        index: 0,
                        input: "Hello world!!!"
                      },
                      {
                        0: "world!!!",
                        1: "world"
                        index: 6,
                        input: "Hello world!!!"
                      }
                    ]
                  */
                `}
              </code>
            </pre>
          </section>

          <section className={styles.title} data-background-image='https://i.giphy.com/l0HlADMS95lBYXUl2.gif'>
            <h1>ES7 / stage - 2</h1>
          </section>

          <section>
            <h4>String.prototype.(trimLeft, trimRight)</h4>
            <pre>
              <code className='js'>
                {`
                  String.prototype.trimLeft('     Meow'); // 'Meow'
                  String.prototype.trimRight('Meow    '); // 'Meow'
                `}
              </code>
            </pre>
          </section>

          <section>
            <h4>Cancelable Promises</h4>
            <pre>
              <code className='js'>
                {`
                  // create promise
                  new Promise((resolve, reject, cancel) => {});
                  
                  // cancel promise
                  Promise.cancel(cancelation);
                  
                  // new promise events
                  Promise.then(onFulfilled, onRejected, onCanceled);
                  Promise.cancelCatch(cancelation => {
                    ...
                  });
                `}
              </code>
            </pre>
          </section>

          <section className={styles.title} data-background-image='https://i.giphy.com/YcNHgQG0iol7q.gif'>
            <h1>ES7 / stage - 3</h1>
          </section>

          <section>
            <h4>Async/Await</h4>
            <pre>
              <code className='js'>
                {`
                  async function loadStory() {
                    try {
                      let story = await getJSON('story.json');
                      addHtmlToPage(story.heading);
                      for (let chapter of story.chapterURLs.map(getJSON)) {
                        addHtmlToPage((await chapter).html);
                      }
                      addTextToPage('All done');
                    } catch (err) {
                      addTextToPage('Argh, broken: ' + err.message);
                    }
                    document.querySelector('.spinner').style.display = 'none';
                  }
                `}
              </code>
            </pre>
            <span className='fragment fade-in'>
              <pre>
                <code className='js'>
                  {`
                    (async function() {
                      await loadStory();
                      console.log('Yey, story successfully loaded!');
                    }());
                  `}
                </code>
              </pre>
            </span>
          </section>

          <section data-background-color='#000' data-background-image='https://raw.githubusercontent.com/babel/logo/master/babel.png'></section>

          <section data-background-color='#000'>
            <h4 className={styles.link}>https://s.mrsum.ru/#/slides/es6es7</h4>
            <img src='https://hsto.org/files/864/f7e/684/864f7e6847084ed4a3a3b7838c14a4bf.png' />
          </section>

        </div>
      </section>
    );
  }
};

export default Slide;
