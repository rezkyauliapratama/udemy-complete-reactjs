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
    otherState: 'some other value'
  }

  switchNameHandler = (newName) =>{
      this.setState({
        persons: [
          {name : newName, age : 28},
          {name : 'Andree', age : 22},
          {name : 'Chika', age : 22}
        ],
        showPersons: false
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

    return (
      <div className="App">
       <h1>Hi, I'm react app</h1>
       <p>This is really working !</p>
       <button 
        style={style}
        onClick={this.togglePersonHandler}>Switch name</button>

        {this.state.showPersons === true ?
          <div >
            <Person 
            name ={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name ={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,"Rezky Aulia")}/>
          <Person 
            name ={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
          
          </div> : null
        }

      </div>
    );
  }
}

export default App;
