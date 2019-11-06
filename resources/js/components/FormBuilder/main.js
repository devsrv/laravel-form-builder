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
			show: false, type: "", msg: ""
		},
		saveForm: false,
		formData: ""
	}

	handleFormSave = () => {
		this.setState((state) => {
			return {
				saveForm: true, 
				notification: Object.assign({...state.notification}, {show: false})
			};
		});
	}

	handleMsgBoxClose = () => {
		this.setState((state) => {
			return {
				notification: Object.assign({...state.notification}, {show: false})
			};
		});
	}

	handleComplete = ({success, msg, payload}) => {
		const type = success? "success" : "warning";

		this.setState((state) => {
			return {
				saveForm: false, 
				formData: JSON.stringify(payload),  
				notification: Object.assign({...state.notification}, {show: true, type, msg})
			};
		});
	}

	render() {
		const { saveForm, notification, formData } = this.state;

		return (
			<ErrorBoundary>
				<Board initSave={saveForm} onSaveEnd={this.handleComplete} />
				<Pallet />

				<SaveBtnArea 
					onFormSave={this.handleFormSave} 
					notification={notification} 
					onMsgBoxClose={this.handleMsgBoxClose}
					disableBtn={saveForm}
					formData={formData}
				/>
			</ErrorBoundary>
		);
	}
}

if (document.getElementById('builder-app')) {
    ReactDOM.render(<App />, document.getElementById('builder-app'));
}
