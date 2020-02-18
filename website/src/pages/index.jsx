import React from 'react';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Prism from 'prismjs';
// import classnames from 'classnames';
// import Embed from 'react-runkit';
// import TextLoop from "react-text-loop";

// import CodeBlock from '../components/CodeBlock';

// export default class Index extends React.Component {
//   state = {
//     selectedDeploy: {},
//     deployments: [
//       {
//         name: 'ZEIT Now',
//         code: 'process.env.LIGHT_ENV = \'now\';',
//       },
//       {
//         name: 'RunKit',
//         code: 'process.env.LIGHT_ENV = \'runkit\';',
//       },
//       {
//         name: 'AWS',
//         code: 'process.env.LIGHT_ENV = \'aws\';',
//       },
//       {
//         name: 'Google Cloud',
//         code: 'process.env.LIGHT_ENV = \'gcloud\';',
//       },
//       {
//         name: 'Netlify',
//         code: 'process.env.LIGHT_ENV = \'netlify\';',
//       },
//       {
//         name: 'Server',
//         code: '// no configuration needed',
//       },
//       {
//         name: 'Heroku',
//         code: '// no configuration needed',
//       },
//     ]
//   }

//   componentDidMount() {
//     this.setState(prevState => ({
//       selectedDeploy: prevState.deployments[0],
//     }));

//     const code = `
//     const light = require('light');

//     module.exports = light({
//       path: '/',
//       async handler() {
//         return {
//           hello: 'world',
//         };
//       },
//     });
//     `

//     const highlightedCode = Prism.highlight(
//       code,
//       Prism.languages.javascript,
//       'javascript',
//     );
//   }

//   changeDeployment(obj) {
//     this.setState({
//       selectedDeploy: obj,
//     });
//   }

//   render() {
//     const { deployments, selectedDeploy } = this.state;
//     return (
//       <div>
//         <div className="w-full max-w-screen-xl relative mx-auto container pb-6 text-center">
//           <h1 className="font-bold uppercase text-yellow-400 pt-16"></h1>
//           <h1 className="text-xl font-bold uppercase pb-8 pt-2">light.js</h1>
//           <h2 className="text-xl font-semibold uppercase">a</h2>
//           <h2 className="text-4xl font-semibold uppercase">
//             <TextLoop className="center-hero" springConfig={{ stiffness: 200, damping: 25 }}>

//             </TextLoop>
//           </h2>
//           <h2 className="text-xl font-semibold uppercase">framework</h2>
//           <div className="pt-12">

//           </div>
//         </div>
//         <div className="bg-gray-100 py-12">
//           <div className="flex container mx-auto flex-row flex-wrap">
//             <div className="flex flex-col w-full md:w-1/2 text-center p-4 pb-0">
//               <span className="flex-1" />
//               <h2 className="text-lg pb-1 px-3">as simple as</h2>
//               <h1 className="text-3xl font-mono pb-4 md:pb-0 px-3">light dev</h1>
//               <span className="flex-1" />
//               <div className="bg-white shadow-xl text-left p-4 rounded overflow-x-auto">
//                 <pre className="items-end">
//                   <code className="text-indigo-500">$ light dev</code>{ '\n' }
//                   <code className="text-pink-500">> start      🔥 igniting the server 🔥</code>{ '\n' }
//                   <code className="text-pink-500">> listening  on port 3000</code>{ '\n' }
//                   <code className="text-blue-500">> hmr        starting the hot reloader</code>{ '\n' }
//                   <code className="text-blue-500">> hmr        watching for changes</code>{ '\n' }
//                   <code className="text-green-500">  GET        200 to /, request completed in 1 ms</code>{ '\n' }
//                 </pre>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 shadow-xl text-center m-4 md:m-0 rounded overflow-x-auto">
//             <CodeBlock language="javascript" value={`const { route } = require('light');
// const { handler, middleware, plugin } = route();

// middleware(auth, cors);
// plugin(errorHandling);
// module.exports = handler((req, res) => {
//   return {
//     hello: 'world',
//   };
// });`} />
//             </div>
//           </div>
//         </div>
//         <div className="py-12 container mx-auto">
//           <h1 className="text-3xl text-center px-3">reload without actually reloading</h1>
//           <h2 className="text-lg text-center pb-4 px-3">dont waste your time waiting for your server to restart</h2>
//           <div className="flex flex-row flex-wrap">
//             <div className="flex flex-row flex-1 text-center p-4 md:pb-0">
//               <div className="self-center w-full bg-gray-900 shadow-3xl text-left p-4 rounded">
//                 <pre className="items-end">
//                   <code className="text-indigo-400">$ light dev</code>{ '\n' }
//                   <code className="text-pink-400">> listening on port 3000</code>{ '\n' }
//                   <code className="text-pink-400">> routes/index.js changed</code>{ '\n' }
//                   <code className="text-gray-400">hot-swapping file</code>{ '\n' }
//                   <code className="text-green-400">> done [1 ms]</code>{ '\n' }
//                 </pre>
//               </div>
//             </div>
//             <div className="flex flex-col self-center text-center text-md uppercase text-gray-500 tracking-wider p-2 w-full md:w-auto">
//               vs
//             </div>
//             <div className="flex flex-row flex-1 text-center p-4 pb-0">
//               <div className="self-center w-full bg-gray-900 shadow-3xl text-left p-4 rounded">
//                 <pre className="items-end">
//                   <code className="text-indigo-400">$ node express.js</code>{ '\n' }
//                   <code className="text-pink-400">> listening on port 3000</code>{ '\n' }
//                   <code className="text-pink-400">> routes/index.js changed</code>{ '\n' }
//                   <code className="text-gray-400">restarting server</code>{ '\n' }
//                   <code className="text-gray-400">reimporting all routes</code>{ '\n' }
//                   <code className="text-gray-400">reconnecting to database</code>{ '\n' }
//                   <code className="text-gray-400">reconnecting to cache</code>{ '\n' }
//                   <code className="text-gray-400">recompiling templates</code>{ '\n' }
//                   <code className="text-pink-400">> listening on port 3000</code>{ '\n' }
//                   <code className="text-green-400">> done [1-5 s]</code>{ '\n' }
//                 </pre>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-100 py-12 -mb-12 md:m-0">
//           <div className="flex container mx-auto flex-row flex-wrap">
//             <div className="flex flex-col w-full md:w-1/3 text-center p-4 md:pb-0">
//               <span className="flex-1" />
//               <h1 className="text-3xl px-3">write once</h1>
//               <h2 className="text-lg px-3">deploy anywhere</h2>
//               <span className="flex-1" />
//             </div>
//             <div className="flex flex-col w-full md:w-1/6 px-4">
//               <span className="flex-1" />
//               <h1 className="uppercase text-gray-700 tracking-wider pb-2">Deployments</h1>
//               { deployments.map((deployment) => (
//                 <a key={deployment.name} onClick={() => this.changeDeployment(deployment)} className={classnames('w-full text-left rounded py-2 px-4 cursor-pointer', deployment.name === selectedDeploy.name ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200')}>{ deployment.name }</a>
//               )) }
//               <span className="flex-1" />
//             </div>
//             <div className="w-full md:w-1/2 shadow-xl text-center m-4 md:m-0 rounded overflow-x-auto">
//               <CodeBlock language="javascript" value={`const { route } = require('light');
// const { handler, middleware, plugin } = route();

// ${selectedDeploy.code ? `${selectedDeploy.code}` : ''}

// middleware(auth, cors);
// plugin(errorHandling);
// module.exports = handler((req, res) => {
//   return {
//     hello: 'world',
//   };
// });`} />
//             </div>
//           </div>
//         </div>
//         <div className="pt-12 md:block md:m-0 hidden">
//           <div className="container mx-auto flex-col-reverse md:flex-row flex-wrap md:flex">
//             <div className="w-full md:w-2/3 text-center px-2 m-4 md:m-0">
//               <Embed source={ `const { route } = require('light');
// const { handler, middleware, plugin } = route();
// process.env.LIGHT_ENV='runkit';

// /*
// // middleware is run before your handler
// middleware(
//   (req, res) => console.log(req.url),
// );
// // plugins wrap your handlers (and middleware)
// plugin(
//   (fn) => async (req, res) => {
//     const before = Date.now();
//     await fn(req, res)
//     const after = Date.now();
//     console.log('the request took', after - before, 'ms');
//   },
// );
// */
// module.exports = handler((req, res) => {
//   return {
//     hello: 'world',
//   };
// });` } mode='endpoint' />
//             </div>
//             <div className="flex flex-col w-full md:w-1/3 text-center p-4 pb-0">
//               <span className="flex-1" />
//               <h1 className="text-3xl">try it yourself</h1>
//               <h2 className="text-lg">on RunKit</h2>
//               <span className="flex-1" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default function Index() {
  return (
    <>
      <section className="hero is-black">
        <div className="hero-body">
          <div className="container has-text-centered">
            <span className="icon has-text-warning is-large">
              <FontAwesomeIcon icon="bolt" size="4x" />
            </span>
            <h1 className="title is-uppercase is-size-4">
              light.js
            </h1>
            <h2 className="title is-uppercase is-size-5">
              a
              <br />
              <span className="is-size-1">
                <Typed
                  strings={[
                    'fast',
                    'serverless',
                    'testable',
                    'functional',
                    'developer friendly',
                    'flexible',
                    'lightweight',
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  backDelay={1500}
                />
              </span>
              <br />
              framework
            </h2>
          </div>
        </div>
        <div class="hero-foot has-text-centered">
          <a href="https://circleci.com/gh/ludicroushq/light" className="inline-block" target="_blank" rel="noopener noreferrer">
            <img alt="CircleCI" src="https://img.shields.io/circleci/project/github/ludicroushq/light.svg?label=ci%20status&style=for-the-badge&labelColor=0a0a0a" />
          </a>
          &nbsp;&nbsp;
          <a href="https://www.npmjs.com/package/light" className="inline-block" target="_blank" rel="noopener noreferrer">
            <img alt="NPM" src="https://img.shields.io/npm/v/light.svg?label=npm%20version&style=for-the-badge&labelColor=0a0a0a" />
          </a>
          &nbsp;&nbsp;
          <a href="https://www.npmjs.com/package/light" className="inline-block" target="_blank" rel="noopener noreferrer">
            <img alt="Downloads" src="https://img.shields.io/npm/dm/light.svg?label=downloads&style=for-the-badge&labelColor=0a0a0a" />
          </a>
          &nbsp;&nbsp;
          <a href="https://github.com/ludicroushq/light" className="inline-block" target="_blank" rel="noopener noreferrer">
            <img alt="Stars" src="https://img.shields.io/github/stars/ludicroushq/light.svg?style=for-the-badge&labelColor=0a0a0a" />
          </a>
          &nbsp;&nbsp;
          <a href="https://coveralls.io/github/ludicroushq/light" className="inline-block" target="_blank" rel="noopener noreferrer">
            <img alt="Coveralls" src="https://img.shields.io/coveralls/github/ludicroushq/light.svg?label=code%20coverage&style=for-the-badge&labelColor=0a0a0a" />
          </a>
        </div>
      </section>
    </>
  )
}
