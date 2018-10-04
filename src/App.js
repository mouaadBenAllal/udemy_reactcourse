import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    clicks: 4,
    persons: [
      {
        id: "ie54",
        name: "Max",
        age: 20
      },
      {
        id: "if32",
        name: "Ttest",
        age: 43
      },
      {
        id: "fd23",
        name: "fefe",
        age: 66
      }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    console.log("was clicked");
    // this.setState(
    //   { clicks: this.state.clicks + 1 }
    // )
    const test = "";
    this.setState({
      persons: [
        {
          name: newName,
          age: 20
        },
        {
          name: "Ttest",
          age: 43
        },
        {
          name: "fefe",
          age: 66
        }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    console.log(event.type);
    const person = {
      ...this.state.persons[personIndex]
    };

    console.log(person);
    person.name = event.target.value;

    const persons = this.state.persons.slice();
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonsHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const current = this.state.showPersons;
    this.setState({
      showPersons: !current
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {" "}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonsHandler.bind(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}{" "}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("green");
    }

    return (
      <div className="App">
        <p className={classes}> Less than 2 persons?</p>{" "}
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle person{" "}
        </button>{" "}
        {persons}{" "}
      </div>
    );
  }
}

export default App;
