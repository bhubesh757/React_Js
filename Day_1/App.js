import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import greet from './component/greet';

class App extends Component{
  render(){
    return (
      <div>
          <h1 > Hello This is Bhubesh</h1>
          <greet></greet>
      </div>
    );
  }
}

export default App;
