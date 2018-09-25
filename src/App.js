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
    ],
    
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) =>{
      this.setState({
        persons: [
          {name : newName, age : 28},
          {name : 'Andree', age : 22},
          {name : 'Chika', age : 22}
        ]
      });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
  }

  render() {

    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div >
          {this.state.persons.map(
            person => {
               return <Person 
               name = {person.name} 
               age={person.age}/>
            }
          )}
       
        </div>    
      );
    }
    return (
      <div className="App">
       <h1>Hi, I'm react app</h1>
       <p>This is really working !</p>
       <button 
        style={style}
        onClick={this.togglePersonHandler}>Toggle person</button>         
        {persons}

      </div>
    );
  }
}

export default App;
