import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App'
import { HashRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter>
      <App />
  </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();
