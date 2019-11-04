import React, { Component }  from 'react';

class DropdownOptions extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="dropdown-options">Comma Seperated Options</label>
                <textarea className="form-control" id="dropdown-options" rows="3"></textarea>
            </div>
        )
    }
}

class TextareaRows extends Component {
    render() {
        return (
            <div className="form-group row">
                <label htmlFor="no-rows" className="col-sm-4 col-form-label">Number of rows</label>
                <div class="col-sm-6">
                    <input type="number" className="form-control" id="no-rows" />
                </div>
            </div>
        )
    }
}

class InputFieldType extends Component {
    handleChange = (e) => {
        if(e.target.checked) {
            this.props.onTypeSelect(this.props.type);
        }
    }

    render() {
        const { label, type, checked } = this.props;

        return (
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" id={`type-${type}`} name="input-type" checked={checked}
                    onChange={this.handleChange}
                />
                <label className="custom-control-label" htmlFor={`type-${type}`}>{ label }</label>
            </div>
        )
    }
}

export default class ConfigForm extends Component {
    state = {
        label: "",
        isRequired: false,
        allowDataFill: true,
        inputType: "text",
        listOptions: [],
        textAreaRows: 4
    }

    static getDerivedStateFromProps(props, state) {
        if(props.show && state.allowDataFill) {
            const { label, isRequired, additionalConfig } = props.field;

            return {
                label, 
                isRequired,
                ...additionalConfig,
                allowDataFill: false
            };
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.show === false && prevState.allowDataFill === false){
            this.setState({allowDataFill: true});
        }
    }

    handleLabelChange = (e) => {
        this.setState({label: e.target.value});
    }

    handleRequiredChange = (e) => {
        this.setState({isRequired: e.target.checked});
    }

    handleTypeSelect = (type) => {
        this.setState({inputType: type});
    }

    handleFormSubmit = (id, e) => {
        const {label, isRequired, inputType, textAreaRows, listOptions} = this.state;
        let additionalConfig;
        
        switch (this.props.field.type) {
            case "select":
                additionalConfig = {listOptions};
                break;
        
            case "textarea":
                additionalConfig = {textAreaRows};
                break;
        
            default:
                additionalConfig = {inputType};
                break;
        }

        this.props.onConfigSubmit({
            id, 
            payload: {label, isRequired, additionalConfig}
        });

        this.props.onCloseClick();
        e.preventDefault();
    }

	getForm = (fieldType) => {
        const Fragment = React.Fragment;

        let extraConfigs;

        switch (fieldType) {
            case "select":
                extraConfigs = <DropdownOptions />

                break;

            case "textarea":
                extraConfigs = <TextareaRows />
                
                break;
        
            default:
                extraConfigs = <div className="form-group">
                                    <InputFieldType label="Normal Text" type="text" checked={this.state.inputType == "text"} onTypeSelect={this.handleTypeSelect} />
                                    <InputFieldType label="Email" type="email" checked={this.state.inputType == "email"} onTypeSelect={this.handleTypeSelect} />
                                    <InputFieldType label="Phone" type="phone" checked={this.state.inputType == "phone"} onTypeSelect={this.handleTypeSelect} />
                                </div>

                break;
        }

        return (
            <Fragment>
                <div className="form-group">
                    <label htmlFor="field-lable" className="col-form-label">Field Label:</label>
                    <input type="text" className="form-control" id="field-lable" value={this.state.label} onChange={this.handleLabelChange} />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="rule-required" checked={this.state.isRequired} onChange={this.handleRequiredChange} />
                        <label className="custom-control-label" for="rule-required">Required</label>
                    </div>
                </div>

                {extraConfigs}
            </Fragment>
        )
    }

	render() {
        const { field, show } = this.props;

		return(
            <form onSubmit={(e) => this.handleFormSubmit(field.id, e)}>
                <div className="modal-body">
                    {show && this.getForm(field.type)}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.props.onCloseClick()}>Close</button>
                    <button type="submit" className="btn btn-primary">Save Field</button>
                </div>
            </form>
		);
	}
}