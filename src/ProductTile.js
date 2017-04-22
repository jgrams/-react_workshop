import React from 'react';

function ProductTile ({ product }) {
	return (
		<div>
 			<header>{ product.name }</header>
 			<p>{ product.description }</p>
 			<p>{ product.price }</p>
 		</div>
 		)
}

export default ProductTile;