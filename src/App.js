import React, { Component } from 'react';
import ContactTile from './ContactTile.js';
import ProductTile from './ProductTile.js';
import SearchBar from './SearchBar.js';
import './App.css';


class App extends Component {
  render() {

    const contact = {id: 0, name: "First Name", address: "1 Main St", hobby: "Jumping", favorite: false}
    const products = [
                          {
                            name: "JavaScript: The Definitive Guide",
                            description: `Since 1996, JavaScript: The Definitive Guide...`,
                            price: 28.89
                          },
                          {
                            name: "Eloquent JavaScript",
                            description: `JavaScript lies at the heart...`,
                            price: 21.22
                          },
                          {
                            name: "JavaScript: The Good Parts",
                            description: `Most programming languages...`,
                            price: 16.59
                          }
                      ]

    

    return (
      <section className="body">
          <SearchBar/>
          <h1>All Contacts</h1>
          <ContactTile key={contact.id}
                       contact={contact} />
          <h1>All Products</h1>
            {products.map(product => 
              <ProductTile key={product.price}
                           product={product}/>
            )}
      </section>
    );
  }
}

export default App;