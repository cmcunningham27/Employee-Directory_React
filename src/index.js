import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//brings in bootstrap to use in components
import 'bootstrap/dist/css/bootstrap.min.css';

//sends app component to correct location in the index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);