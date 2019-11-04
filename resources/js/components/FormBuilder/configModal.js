import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './../../../css/modal.css';

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
	render() {
		const { show } = this.props;

		return (
			<div id="myModal" className="rav_modal" style={show? {display: 'block'} : {}}>
				<div className="modal-dialog">
					<div className="modal-content rav_modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">New message</h5>
							<button type="button" className="close" onClick={() => this.props.onCloseClick()} aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label for="recipient-name" className="col-form-label">Recipient:</label>
									<input type="text" className="form-control" id="recipient-name"/>
								</div>
								<div className="form-group">
									<label for="message-text" className="col-form-label">Message:</label>
									<textarea className="form-control" id="message-text"></textarea>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.props.onCloseClick()}>Close</button>
							<button type="button" className="btn btn-primary">Send message</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}