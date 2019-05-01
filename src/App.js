import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import Product from './Product'
import CategoryButton from './Category-Button'

class App extends Component {
  constructor(props) {
    super(props);

    categories.push('All');

    this.state = {
      currentCategory: !null,
    };
  }

  setCategory(cat) {
    this.setState({ currentCategory: cat });
  }

  render() {
    const { currentCategory } = this.state;
    const cats = categories.map(cat => (
      <CategoryButton
        isSelected={currentCategory === 'cat'}
        key={cat}
        label={cat}
        onClick={currentCategory => this.setCategory(currentCategory)}
      />));

    const products = inventory.filter(
      item => item.category === currentCategory || currentCategory === 'All',
    ).map((item, index) => {
      const { name, description, price } = item;
      return (
        <Product
          key={`${name.id} - ${index.id}`}
          title={name}
          desc={description}
          price={price}
        />
      );
    });

    return (
      <div className="App">
        <h1>Wonder Emporium</h1>

        <div className="Categories">
          {cats}
        </div>

        <div className="Products">
          {products}
        </div>

        <div className="inventory" />
      </div>
    );
  }
}

export default App;
