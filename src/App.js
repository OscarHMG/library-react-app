import React, { Component } from 'react';
import HomePage from './components/pages/HomePage';
import './resources/css/App.css'
import LoginPage from './components/pages/LoginPage';


class App extends Component {
  render() {
    return (
      <div>
        <LoginPage/>
      </div>
    );
  }
}

export default App;