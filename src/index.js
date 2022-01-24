import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,useLocation,
  Route,Link, Navigate
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>

    <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

