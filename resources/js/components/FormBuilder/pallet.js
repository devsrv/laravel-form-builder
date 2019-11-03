import React, { Component }  from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from './utils';

export default class Pallet extends Component {
	constructor() {
		super();

		this.state = {
			fields: [
				{ id: 1, type: 'input' },
				{ id: 2, type: 'select' },
				{ id: 3, type: 'textarea' }
			]
		}
	}

	genField = (field) => {
		switch (field.type) {
			case "select":
				return (
					<div className="form-group">
						<label>Drop-down list</label>
						<select value="0" className="custom-select">
							<option value="0">Choose...</option>
						</select>
						<small className="form-text text-muted">allow the user to select an option from the drop-down list</small>
					</div>
				)

				break;
		
			case "textarea":
				return (
					<div className="form-group">
						<label>Textarea</label>
						<textarea className="form-control"></textarea>
						<small className="form-text text-muted">
							defines a multi-line input field
						</small>
					</div>
				)

				break;
		
			default:
				return (
					<div className="form-group">
						<label>Input field</label>
						<input type="email" className="form-control" aria-describedby={`palletInputHelp${field.id}`} placeholder="" />
						<small id={`palletInputHelp${field.id}`} className="form-text text-muted">used for normal text input, email or phone number field</small>
					</div>
				)

				break;
		}
	}

  render() {
    return (
		<div className="col">
			<div className="card bg-light mb-3">
				<div className="card-header">Header</div>
				<div className="card-body">
					<div className="d-flex ml-3">
						<Container groupName="1" dragHandleSelector=".column-drag-handle" dragClass="opacity-ghost" dropClass="opacity-ghost-drop" behaviour="copy" getChildPayload={i => this.state.fields[i]} onDrop={e => this.setState({ fields: applyDrag(this.state.fields, e) })}>
						{
							this.state.fields.map((fld,i) => {
								return (
									<Draggable key={fld.id}>
										<div className="draggable-item">
											<span className="column-drag-handle" style={{float:'left', padding:'0 10px'}}>&#x2630;</span>
											
											{this.genField(fld)}
										</div>
									</Draggable>
								);
							})
						}
						</Container>
					</div>
        		</div>
        	</div>
        </div>
    );
  }
}
