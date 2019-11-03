require('./../../bootstrap');

import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

import Pallet from './pallet';
import Board from './board';

class App extends Component {
	constructor() {
		super();

		this.state = {}
	}
	render() {
		return (
			<div style={{ display: 'flex', justifyContent: 'stretch', marginTop: '50px', marginRight: '50px' }}>
				<Pallet />
				<Board />    
			</div>
		);
	}
}

if (document.getElementById('builder-app')) {
    ReactDOM.render(<App />, document.getElementById('builder-app'));
}
