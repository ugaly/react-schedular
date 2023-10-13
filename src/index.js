/*
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import './index.css'

import App from "./App";
import Login from "./components/pages/login";

const rootElement = document.getElementById("root");
ReactDOM.render(

    sessionStorage.getItem('login')==='true'?<Login />:<App/>

    , rootElement);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react'; // Import StrictMode

import Login from "./components/pages/login";
import App from "./App";
import PreDashboard from "./components/pages/pre-dashboard/PreDashboard";

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    {sessionStorage.getItem('login') === 'true' ? <PreDashboard /> : <Login />}
  </StrictMode>,
  root
);
