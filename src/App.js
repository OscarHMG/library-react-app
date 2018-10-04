import React, { Component } from 'react';
import HomePage from './components/pages/HomePage';
import './resources/css/App.css'
import LoginPage from './components/pages/LoginPage';

import {Route} from 'react-router-dom';

const App = () =>
  <div>
    <Route path="/" exact component={HomePage}/>
    <Route path="/loginPage" exact component={LoginPage}/>>
  </div>


export default App;
