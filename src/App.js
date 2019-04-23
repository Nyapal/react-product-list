import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

class App extends Component {

  render() {

    const catButtons = categories.map((catName) => {
      return (
        <button>{catName}</button>
      )
    })

    const products = inventory.map((item) => {
      return (
        <div>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </div>
      )

    })

    return (
      <div className="App">
        <h1>Show products here</h1>

        <ul>
          {catButtons}
        </ul>

        <ul>
          {products}
        </ul>

      </div>
    );
  }
}

export default App;
