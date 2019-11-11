import React, { Component }  from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
    state = {
        startDate: new Date()
    };

    handleDateChange = date => {
        this.setState({
            startDate: date
        });
    };

	handleFldControlClick = (payload) => {
		this.props.onUserAction(payload);
	}

	generatedField = (field, isBoard) => {
		let fieldMarkup, helpText;
		let fieldClass = isBoard? "form-control" : "form-control bg-secondary";
		let label = field.label;

		switch (field.type) {
			case "select":
				fieldClass = isBoard? "custom-select" : "custom-select bg-secondary text-white";
				fieldMarkup = <select className={fieldClass}>
								{
									isBoard ?
									field.additionalConfig.listOptions.split(",").map((opt) => {
											let option = opt.trim();
											if(option !== "") return <option key={option.toString()} value={option}>{option}</option>
										}
									)
									:
									<option value="0">choose...</option>
								}
							</select>;
				helpText = "allow the user to select an option from the drop-down list";

				break;

			case "textarea":
				fieldMarkup = <textarea className={fieldClass} rows={field.additionalConfig.textAreaRows}></textarea>;
				helpText = "defines a multi-line input field";

				break;

			case "date":
				fieldClass = isBoard? "form-control" : "form-control bg-secondary text-white";
				fieldMarkup = <input type="date" className={fieldClass} aria-describedby={`palletDateHelp${field.id}`} placeholder="" />;
				fieldMarkup = <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleDateChange}
                                dateFormat="yyyy/MM/dd"
                            />;

				helpText = "used for date input- resulting value includes the year, month, and day";

				break;

			default:
				fieldMarkup = <input type={field.additionalConfig.inputType} className={fieldClass} aria-describedby={`palletInputHelp${field.id}`} placeholder="" />;
				helpText = "used for normal text input, email or phone number field";

				break;
		}

		return {fieldMarkup, label, helpText};
	}

	render() {
		const { isBoard, field } = this.props;
		const { fieldMarkup, label, helpText } = this.generatedField(field, isBoard);

		return (
			<div className="form-group">
				<div className={isBoard ? "d-flex justify-content-between align-items-start pb-2" : ""}>
					<span>{label}</span>

					{isBoard &&
						<FieldControls field={field} onBtnClick={this.handleFldControlClick} />
					}
				</div>

				{fieldMarkup}

				{! isBoard && <small className="form-text text-muted">{helpText}</small>}
			</div>
		)
	}
}
