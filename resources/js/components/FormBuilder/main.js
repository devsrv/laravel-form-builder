require('./../../bootstrap');

import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

import Pallet from './pallet';
import Board from './board';

import './../../../css/builder.css';

class App extends Component {
	constructor() {
		super();

		this.state = {}
	}

	render() {
		const Fragment = React.Fragment;

		return (
			<Fragment>
				<Board />
				<Pallet />
			</Fragment>
		);
	}
}

if (document.getElementById('builder-app')) {
    ReactDOM.render(<App />, document.getElementById('builder-app'));
}
