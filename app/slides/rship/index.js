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
            data-background-image='https://s.mrsum.ru/images/rship/0.jpg'>
            <img src='https://rambler-digital-solutions.github.io/rship/styles/images/logo.svg' width='150px' />
            <h1>RSHIP</h1>
            <p><b>Node.js tool</b> which helps you to <b>develop</b> and <b>build</b> isomorphic web applications.</p>
          </section>

          <section>
            <h1>SPA</h1>
            <ul>
              <li>Easier state tracking</li>
              <li>Browser side caching</li>
              <li>No overhead latency on switching 'pages'</li>
            </ul>
          </section>

          <section>
            <img src='http://joshwlewis.com/images/single-page-web-app-7a095c2d.png' />
          </section>

          <section>
            <h1>Goals</h1>
            <ul>
              <li>Good for responsive sites</li>
              <li>No need to use extra queries to the server</li>
              <li>Looks just like another client for API</li>
              <li>Shared codebase</li>
            </ul>
          </section>

          <section
            className={styles.title}
            data-background-image='http://i.giphy.com/F6rmluLeKdfCo.gif'>
            <h1>Pain</h1>
            <ul>
              <li><b>SEO</b></li>
              <li>Duplication of client/server code </li>
              <li>No content if JavaScript is disabled</li>
              <li>Browser history</li>
              <li>Chubby codebase</li>
              <li>A lot of business logic</li>
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
              <li>Works without JavaScript</li>
            </ul>
          </section>

          <section
            className={styles.title}
            data-background-image='http://i.giphy.com/VZ5gRT17YNkn6.gif'>
            <h1>Problems</h1>
            <ul>
              <li>Different syntax for client/server side views</li>
              <li>One zone of responsibility for frontend and backend developers</li>
              <li>Slow feature developing</li>
            </ul>
          </section>

          <section>
            <h1>Whats next?</h1>
          </section>

          <section
            className={styles.title}
            data-background-image='https://s.mrsum.ru/images/rship/1.jpg'>
            <h1>Isomorphic<br/>Web App</h1>
          </section>

          <section data-background-image='https://s.mrsum.ru/images/rship/5.jpg' />

          <section>
            <h1>Goals</h1>
            <ul>
              <li><b>SEO</b></li>
              <li>JavaScript which runs on client and server</li>
              <li>Looks like another client for API</li>
              <li>Same view and routing layers</li>
              <li>Similar code base</li>
              <li>No content if JavaScript is disabled</li>
              <li>Easier state tracking</li>
              <li>Browser caching</li>
              <li>No overhead latency on switching 'pages'</li>
            </ul>
          </section>

          <section>
            <h1>Side effects</h1>
            <ul>
              <li>A bit more complexity</li>
              <li>Slightly more business logic</li>
              <li>Elevates requirements to developer skills</li>
            </ul>
          </section>

          <section>
            <h1>IWA steps</h1>
            <ol>
              <li>Choose libraries</li>
              <li>Read ton of manuals</li>
              <li>Create prototype</li>
              <li>Stackoverflow driven development</li>
              <li>God bless you :)</li>
            </ol>
          </section>

          <section
            className={styles.title}
            data-background-image='http://i.giphy.com/8kTpJQkDqubcs.gif'>
            <h1>Also</h1>
            <ul>
              <li>React Universal</li>
              <li>Angular tools</li>
              <li>meteor.js</li>
              <li>%Your own library%</li>
            </ul>
          </section>

          <section>
            <h1>Or</h1>
          </section>

          <section
            className={styles.title}
            data-background-image='https://s.mrsum.ru/images/rship/4.jpg'>
            <img src='https://rambler-digital-solutions.github.io/rship/styles/images/logo.svg' width='150px' />
            <h1>RSHIP</h1>
            <h6>The tool for isomorphic web apps</h6>
          </section>

          <section>
            <img src='https://s.mrsum.ru/images/rship/4_rship_interface.png' width='50%'/>
          </section>

          <section>
            <h1>Features:</h1>
            <ul>
              <li>Infinite rerun stop/run node.js server</li>
              <li>Recompile and start webserver in less then a second</li>
              <li>Keep and run source code inside RAM (MemoryFS)</li>
              <li>Instruments for debugging of server side code</li>
              <li>CPU and RAM usage metrics</li>
              <li>Installs locally or globally</li>
            </ul>
          </section>

          <section>
            <h1>Workflow</h1>
            <img src='https://camo.githubusercontent.com/e3d77645ffdf5d2b5f861ac6baec75af07dfed39/68747470733a2f2f72616d626c65722d6469676974616c2d736f6c7574696f6e732e6769746875622e696f2f72736869702f7374796c65732f696d616765732f72736869705f726f61646d61702e737667' />
          </section>

          <section>
            <h1>Technologies</h1>
            <ul>
              <li>node.js</li>
              <li>webpack</li>
              <li>babel.js</li>
            </ul>
          </section>

          <section>
            <h1>Also RSHIP is</h1>
          </section>

          <section>
            <h1>Scalable</h1>
          </section>

          <section>
            <h1>Extendable</h1>
          </section>

          <section>
            <h1>CLI</h1>
            <ul>
              <li>new</li>
              <li>setup</li>
              <li>run</li>
              <li>install</li>
              <li>remove</li>
            </ul>
          </section>

          <section
            className={styles.white}
            data-background-image='https://s.mrsum.ru/images/rship/2.jpg'>
            <h6>Initialize application</h6>
            <img src='https://s.mrsum.ru/images/rship/1_new_app.gif' />
          </section>

          <section
            className={styles.white}
            data-background-image='https://s.mrsum.ru/images/rship/2.jpg'>
            <h6>Developing mode</h6>
            <img src='https://s.mrsum.ru/images/rship/2_run_dev.gif' />
          </section>

          <section
            className={styles.white}
            data-background-image='https://s.mrsum.ru/images/rship/2.jpg'>
            <h6>Build application</h6>
            <img src='https://s.mrsum.ru/images/rship/3_run_build.gif' />
          </section>

          <section>
            <h1>Wanna see more?</h1>
          </section>

          <section
            className={styles.white}
            data-background-image='https://s.mrsum.ru/images/rship/2.jpg'>

            <a href='https://asciinema.org/a/117g7mc8edmxrbyckvh6qk2j9' target='_blank'>
              <img src='https://asciinema.org/a/117g7mc8edmxrbyckvh6qk2j9.png' />
            </a>
          </section>

          <section>
            <h1>Install & Remove</h1>
            <p>Works on <b>yarn</b> by:</p>
            <pre>
              <code className='bash'>
              {`
                $ rship i |package.name|
              `}
              </code>
            </pre>

            <pre>
              <code className='bash'>
              {`
                $ rship r |package.name|
              `}
              </code>
            </pre>
          </section>

          <section
            className={styles.title}
            data-background-image='https://s.mrsum.ru/images/rship/4.jpg'>
            <h4>Boilerplate</h4>
            <ul>
              <li>React as view engine</li>
              <li>Redux as state container</li>
              <li>Webpack as compiler of client and server codebase</li>
              <li>Stylus as style pre-processor</li>
              <li>CSSModules</li>
              <li>axios as HTTP client</li>
              <li>Koa 2.0 as http web server</li>
              <li>Jest as testing framework</li>
            </ul>
          </section>

          <section>
            <p>You can initialize your own application, with preferred frameworks</p>
          </section>

          <section>
            <h1>Project Plans</h1>
            <ul>
              <li>hot and live reload</li>
              <li>webpack 2.0</li>
              <li>more examples of isomorphic applications</li>
              <li>recipes and scenarios</li>
              <li>screencasts</li>
            </ul>
          </section>

          <section
            className={styles.title}
            data-background-image='http://i.giphy.com/TZf4ZyXb0lXXi.gif'>
            <h1>Welcome</h1>
            <p>Let's create it together</p>
          </section>

          <section>
            <h1>Links:</h1>
            <h6>
              <a href='https://goo.gl/7Y95T0'>https://goo.gl/7Y95T0</a>
              <br />
              <img src='http://qrcoder.ru/code/?https%3A%2F%2Fgoo.gl%2F7Y95T0&10&0' />
            </h6>
          </section>

        </div>
      </section>
    );
  }
};

export default Slide;
