import React, { Component } from 'react';
import ContactTile from './ContactTile.js';
import ProductContainer from './ProductContainer.js';
import './App.css';


class App extends Component {
  render() {
    const contact = {id: 0, name: "First Name", address: "1 Main St", hobby: "Jumping", favorite: false}
    return (
      <section className="body">
          <h1>Contact Tile</h1>
          <ContactTile key={contact.key}
                       contact={contact}/>
          <h1>Product Container</h1>
          <ProductContainer/>
      </section>
    );
  }
}

export default App;