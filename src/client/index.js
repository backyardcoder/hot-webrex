// Add required polyfills for React 16
// Reference: https://reactjs.org/docs/javascript-environment-requirements.html
import 'raf/polyfill';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));
