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
		notification: {
			show: false, type: "success", msg: ""
		},
		saveForm: false
	}

	handleFormSave = () => {
		this.setState((state, props) => {
			return {saveForm: true, notification: Object.assign({...state.notification}, {show: false})};
		});
	}

	handleMsgBoxClose = () => {
		this.setState((state, props) => {
			return {notification: Object.assign({...state.notification}, {show: false})};
		});
	}

	handleComplete = ({success, msg}) => {
		if(success) {
			this.setState((state, props) => {
				return {saveForm: false, notification: Object.assign({...state.notification}, {show: true, type: "success", msg})};
			});
		}
		else {
			this.setState((state, props) => {
				return {saveForm: false, notification: Object.assign({...state.notification}, {show: true, type: "warning", msg})};
			});
		}
	}

	render() {
		return (
			<ErrorBoundary>
				<Board initSave={this.state.saveForm} onSaveEnd={this.handleComplete} />
				<Pallet />

				<SaveBtnArea 
					onFormSave={this.handleFormSave} 
					notification={this.state.notification} 
					onMsgBoxClose={this.handleMsgBoxClose}
				/>
			</ErrorBoundary>
		);
	}
}

if (document.getElementById('builder-app')) {
    ReactDOM.render(<App />, document.getElementById('builder-app'));
}
