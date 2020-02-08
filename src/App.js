import React, {Component} from 'react';
import './App.css';
import Todo from './components/Todo-Demo/Todo';
import Add from './components/Add-Comp/Add';

class App extends Component {

  state = {
    items: [
      {id: 1, task: "Wake Up Early at 6 Clock"},
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    });

    this.setState({items});
  }

  addItem = (item) => {
    item.id = Math.random() * 1;
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }

  render() {
    return (
      <div className="App">
        <h1>Task List App With React.JS &trade;</h1>
        <br /><br /><hr />
        <Todo items={this.state.items} deleteItem={this.deleteItem} />
        <Add addItem={this.addItem} />
      </div>
    );
  }

}


export default App;