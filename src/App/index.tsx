import React from 'react';
import {
	render
} from 'react-dom';
import App from './App';

async function main() {

	const root = document.querySelector('#view');

	if (root !== null) {
		render(
			<App/>,
			root
		);
	}
}

main();
