import React from 'react';

const FieldControls = () => {
    return (
        <span>
            <button className="btn btn-light btn-sm"><i className="fa fa-wrench"></i></button> 
            <button className="btn btn-light text-danger btn-sm ml-3" type="button"><i className="fa fa-times-circle"></i></button>
        </span>
    )
}

export const genField = (field, isBoard = false) => {
	switch (field.type) {
		case "select":
			return (
				<div className="form-group">
					<label className={isBoard ? "d-flex justify-content-between align-items-center" : ""}>
						<span>Drop-down list</span>
						{isBoard && <FieldControls />} 
					</label>
					<select value="0" className="custom-select">
						<option value="0">choose...</option>
					</select>
					{! isBoard &&<small className="form-text text-muted">allow the user to select an option from the drop-down list</small>}
				</div>
			)

			break;
	
		case "textarea":
			return (
				<div className="form-group">
					<label>Textarea</label>
					<textarea className="form-control"></textarea>
					{! isBoard &&<small className="form-text text-muted">
						defines a multi-line input field
					</small>}
				</div>
			)

			break;
	
		default:
			return (
				<div className="form-group">
					<label>Input field</label>
					<input type="email" className="form-control" aria-describedby={`palletInputHelp${field.id}`} placeholder="" />
					{! isBoard &&<small id={`palletInputHelp${field.id}`} className="form-text text-muted">used for normal text input, email or phone number field</small>}
				</div>
			)

			break;
	}
}