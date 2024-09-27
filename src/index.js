import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './App';
// import App from './App.js';
// import App from './App';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import './color.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import Students from './Login';
const root =ReactDOM.createRoot(document.getElementById('root'));
// const root = ReactDOM.createRoot(rootElement);
root.render(
  <>
   {/* <Router><App /></Router> */}
    {/* <App /> */}
    <Game />
 
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();