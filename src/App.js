import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import Product from './Product'
import CategoryButton from './Category-Button'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    categories.push('All')
    this.state = {
      currentCategory: 'All'
    }
  }
  setCategory(cat) {
    console.log(cat)
    this.setState({ currentCategory: cat})
  }

  render() {
    const cats = categories.map((cat) => {
      return (
        <CategoryButton
          selected={this.state.currentCategory === cat}
          key={cat}
          label={cat}
          onClick={ (cat) => this.setCategory(cat) }
        />
      )
    })

    const products = inventory.filter((item) => {
      return item.category === this.state.c
      
      (
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
          {cats}
        </ul>

        <ul>
          {products}
        </ul>

      </div>
    );
  }
}

export default App;
