import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './../../../css/modal.css';
import ConfigForm from './configForm';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
	constructor(props) {
		super(props);
		this.el = document.createElement('div');
	}

	componentDidMount() {
		modalRoot.appendChild(this.el);
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(
			this.props.children,
			this.el,
		);
	}
}

export class ModalBody extends Component {
	handleModalCloseClick = () => {
		this.props.onCloseClick();
	}

	handleConfigSubmit = (data) => {
		this.props.onConfigSubmit(data);
	}

	render() {
		const { show, field } = this.props;

		return (
			<div id="myModal" className="rav_modal" style={show? {display: 'block'} : {}}>
				<div className="modal-dialog">
					<div className="modal-content rav_modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Configure</h5>
							<button type="button" className="close" onClick={this.handleModalCloseClick} aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>

						<ConfigForm 
							field={field} 
							show={show} 
							onCloseClick={this.handleModalCloseClick} 
							onConfigSubmit={this.handleConfigSubmit}
						/>
					</div>
				</div>
			</div>
		)
	}
}