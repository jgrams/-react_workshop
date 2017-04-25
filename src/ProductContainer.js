import React, { Component } from 'react';
import ProductTile from './ProductTile.js';
import SearchBar from './SearchBar.js';


class ProductContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {products: [
        {
          id: 0,
          name: "JavaScript: The Definitive Guide",
          description: `Since 1996, JavaScript: The Definitive Guide...`,
          visible: false,
          price: 28.89
        },
        {
          id: 1,
          name: "Eloquent JavaScript",
          description: `JavaScript lies at the heart...`,
          visible: false,
          price: 21.22
        },
        {
          id: 2,
          name: "JavaScript: The Good Parts",
          description: `Most programming languages...`,
          visible: false,
          price: 16.59
        }
    ]};
  }
  render() {
    return (
      <div>
        <SearchBar key="1"
                   products={this.state.products}/>
        {this.state.products.map (product => {
          if (product.visible) {
           return (<ProductTile key={product.id}
                               product={product}/>)
          }})
        }
      </div>
    );
  }
}

export default ProductContainer;