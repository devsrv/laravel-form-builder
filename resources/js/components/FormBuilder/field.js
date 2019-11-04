import React, { Component }  from 'react';
require('lodash.uniqueid');

class FieldControls extends Component{
	render() {
		const { field, onBtnClick } = this.props;

		return (
			<span>
				<button className="btn btn-light btn-sm" type="button" onClick={ () => onBtnClick({ trigger: "SHOW_CONFIG_MODAL", field }) }>
					<i className="fa fa-wrench"></i>
				</button> 

				<button className="btn btn-light text-danger btn-sm ml-3" type="button" onClick={ () => onBtnClick({ trigger: "REMOVE_FIELD", field }) }>
					<i className="fa fa-times-circle"></i>
				</button>
			</span>
		)
	}
}

export class TheField extends Component {

	handleFldControlClick = (payload) => {
		this.props.onUserAction(payload);
	}

	generatedField = (field) => {
		let fieldMarkup, label, helpText;

		switch (field.type) {
			case "select":
				fieldMarkup = <select value="0" className="custom-select">
								<option value="0">choose...</option>
							</select>;

				label = "Drop-down list";
				helpText = "allow the user to select an option from the drop-down list";
	
				break;
		
			case "textarea":
				fieldMarkup = <textarea className="form-control"></textarea>;

				label = "Textarea";
				helpText = "defines a multi-line input field";
	
				break;
		
			default:
				fieldMarkup = <input type="email" className="form-control" aria-describedby={`palletInputHelp${field.id}`} placeholder="" />;

				label = "Input field";
				helpText = "used for normal text input, email or phone number field";
	
				break;
		}

		return {fieldMarkup, label, helpText};
	}

	render() {
		const { isBoard, field } = this.props;
		const { fieldMarkup, label, helpText } = this.generatedField(field);

		return (
			<div className="form-group">
				<label className={isBoard ? "d-flex justify-content-between align-items-center" : ""}>
					<span>{label}</span>

					{isBoard && 
						<FieldControls field={field} onBtnClick={this.handleFldControlClick} />
					} 
				</label>

				{fieldMarkup}

				{! isBoard && <small className="form-text text-muted">{helpText}</small>}
			</div>
		)
	}
}