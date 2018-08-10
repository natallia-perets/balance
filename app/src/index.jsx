import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'

import App from './components/App.jsx';

import './styles/styles.css';


main();

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(<App />, app);
}
