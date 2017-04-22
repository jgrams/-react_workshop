import React from 'react';

function ContactTile ({contact}) {
	return (
		<div>
 			<header>{ contact.name }</header>
 			<p>{ contact.address }</p>
 			<p>{ contact.hobby }</p>
 		</div>
 	)
}

export default ContactTile;