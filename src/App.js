import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/home/Navbar";
import HomePage from "./components/home/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <HomePage/>
      </div>
    );
  }
}

export default App;
