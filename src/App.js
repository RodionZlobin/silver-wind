import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login/Login";
import Services from "./AllServices/AllServices";
//import './login.css';
//import './login2.css';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to SilverMill</h2>
        </div>

          <Main />
      </div>
    );
  }
}

export default App;
