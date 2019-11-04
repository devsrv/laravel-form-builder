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
    render() {
        const { label, type } = this.props;

        return (
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" id={`type-${type}`} name="input-type" />
                <label className="custom-control-label" htmlFor={`type-${type}`}>{ label }</label>
            </div>
        )
    }
}

export default class ConfigForm extends Component {
    state = {
        label: "",
        isRequired: false,
        allowDataFill: true
    }

    static getDerivedStateFromProps(props, state) {
        if(props.show && state.allowDataFill) {
            const { label, isRequired } = props.field;

            return {
                label, 
                isRequired,
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

    handleFormSubmit = (id, e) => {
        const {label, isRequired} = this.state;
        
        this.props.onConfigSubmit({
            id, 
            payload: {label, isRequired}
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
                                    <InputFieldType label="Normal Text" type="text" />
                                    <InputFieldType label="Email" type="email" />
                                    <InputFieldType label="Phone" type="phone" />
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