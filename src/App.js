 import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm react app</h1>
       <p>This is really working !</p>
       <Person name ="Max" age="28"/>
       <Person name ="Andree" age="22">my hobbies : racing</Person>
       <Person name ="Chika" age="17"/>

      </div>
    );
  }
}

export default App;
