 import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name : 'Max', age : 28},
      {name : 'Andree', age : 22},
      {name : 'Chika', age : 19}

    ]
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm react app</h1>
       <p>This is really working !</p>
       <button>Switch name</button>
       <Person name ={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name ={this.state.persons[1].name} age={this.state.persons[1].age}/>
       <Person name ={this.state.persons[2].name} age={this.state.persons[2].age}/>
       

      </div>
    );
  }
}

export default App;
