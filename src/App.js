import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo"
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "put mila to bed",
        completed: false,
      },
      {
        id: 3,
        title: "fix backyard",
        completed: false,
      },
    ],
  };
  // togle completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          // toglo true and false
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //  Delete Todo
  delTodo = (id) => {
    // spear operator?
    //  fliter any todo that id is not equal to pass in id
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Header />
        <AddTodo/>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
