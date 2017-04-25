import React, {Component} from 'react';

class SearchBar extends Component {
	var products = this.props.products;
	runSearch (products) {
		var search = document.getElementById("search").innerHTML;
		products.map( product => {
			console.log(product)
			if (search === product.name) {
				this.setState(product.visible = true);
			}
		})
	}

	render () {
		return (
			<div>
				<input id='search' type='text'></input>
				<input onClick={this.runSearch()} type='submit'></input>
			</div>
		);
	}
}
export default SearchBar;