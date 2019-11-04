import React, { Component }  from 'react';

export default class ConfigForm extends Component {
	getForm = (fieldType) => {
        let extraConfigs;

        switch (fieldType) {
            case "select":
                extraConfigs = <div className="form-group">
                                    <label htmlFor="dropdown-options">Comma Seperated Options</label>
                                    <textarea className="form-control" id="dropdown-options" rows="3"></textarea>
                                </div>

                break;

            case "textarea":
                extraConfigs = <div className="form-group row">
                                    <label htmlFor="no-rows" className="col-sm-4 col-form-label">Number of rows</label>
                                    <div class="col-sm-6">
                                        <input type="number" className="form-control" id="no-rows" />
                                    </div>
                                </div>
                
                break;
        
            default:
                extraConfigs = <div className="form-group">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="type-text" name="input-type" />
                                        <label className="custom-control-label" for="type-text">Normal Text</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="type-email" name="input-type" />
                                        <label className="custom-control-label" for="type-email">Email</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="type-phone" name="input-type" />
                                        <label className="custom-control-label" for="type-phone">Phone</label>
                                    </div>
                                </div>

                break;
        }

        return (
            <form>
                <div className="form-group">
                    <label htmlFor="field-lable" className="col-form-label">Field Label:</label>
                    <input type="text" className="form-control" id="field-lable" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="rule-required" />
                        <label className="custom-control-label" for="rule-required">Required</label>
                    </div>
                </div>

                {extraConfigs}
            </form>
        )
    }

	render() {
        const { field, show } = this.props;

		return(
            show? this.getForm(field.type) : null
		);
	}
}