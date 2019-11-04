require('./../../bootstrap');

import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './../ErrorBoundary';

import Pallet from './pallet';
import Board from './board';

import './../../../css/builder.css';

class App extends Component {
	constructor() {
		super();

		this.state = {}
	}

	render() {
		return (
			<ErrorBoundary>
				<Board />
				<Pallet />
			</ErrorBoundary>
		);
	}
}

if (document.getElementById('builder-app')) {
    ReactDOM.render(<App />, document.getElementById('builder-app'));
}
