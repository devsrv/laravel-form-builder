require('./../../bootstrap');

import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './../ErrorBoundary';

import Pallet from './pallet';
import Board from './board';
import SaveBtnArea from './builderBottom';

import './../../../css/builder.css';

class App extends Component {
	state = {
		showSuccess: false,
		saveForm: false
	}

	handleFormSave = () => {
		this.setState({saveForm: true, showSuccess: false});
	}

	handleMsgBoxClose = () => {
		this.setState({showSuccess: false});
	}

	handleSaveSuccess = (payload) => {
		// ajax here
		console.log(payload);
		
		this.setState({showSuccess: true, saveForm: false});
	}

	render() {
		return (
			<ErrorBoundary>
				<Board initSave={this.state.saveForm} onSaveSuccess={this.handleSaveSuccess} />
				<Pallet />

				<SaveBtnArea 
					onFormSave={this.handleFormSave} 
					showSuccess={this.state.showSuccess} 
					onMsgBoxClose={this.handleMsgBoxClose}
				/>
			</ErrorBoundary>
		);
	}
}

if (document.getElementById('builder-app')) {
    ReactDOM.render(<App />, document.getElementById('builder-app'));
}
