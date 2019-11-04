import React, { Component }  from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from './utils';
import { TheField } from './field';
import { Modal, ModalBody } from './configModal';

export default class Board extends Component {
    state = {
        fields: [],
        showConfigModal: false,
        currConfigField: null
    }

    // handle user click field config / remove field
    handleAction = (payload) => {
        const { id, type } = payload.field;

        switch (payload.trigger) {
            case "SHOW_CONFIG_MODAL":
                this.setState({showConfigModal: true, currConfigField: {...payload.field}});
                break;
        
            default:
                // delete the field from board
                const fieldIndex = this.state.fields.findIndex(f => {
                    return f.id === id.toString();
                });
    
                this.setState({
                    fields: [
                        ...this.state.fields.slice(0, fieldIndex),
                        ...this.state.fields.slice(fieldIndex + 1)
                    ]
                });

                break;
        }
    }

    // handle all click events of the modal body content
    handleClick = (e) => {
        if(e.target.className == "rav_modal") this.handleModalCloseAttempt();
    }

    handleModalCloseAttempt = () => {
        this.setState({showConfigModal: false, currConfigField: null});
    }

    handleConfigSubmit = (data) => {
        const { id, payload } = data;
        
        const fieldIndex = this.state.fields.findIndex(f => {
            return f.id === id.toString();
        });

        this.setState({
            fields: [
                ...this.state.fields.slice(0, fieldIndex),
                Object.assign({}, this.state.fields[fieldIndex], { ...payload }),
                ...this.state.fields.slice(fieldIndex + 1)
            ]
        });
	}

    render() {
        return (
            <div className="col">
                <div className="card bg-light mb-3">
                    <div className="card-header">BUILDER BOARD</div>
                    <div className="card-body">
                        <div className="d-flex justify-content-start">
                            <Container groupName="1" lockAxis="y" dragHandleSelector=".column-drag-handle" getChildPayload={i => this.state.fields[i]} onDrop={e => this.setState({ fields: applyDrag(this.state.fields, e) })}>
                            {
                                this.state.fields.map((fld) => {
                                    return (
                                        <Draggable key={fld.id}>
                                            <div className="draggable-board-item">
                                                <span className="column-drag-handle" style={{float:'left', padding:'0 10px'}}>&#x2630;</span>
                                                {<TheField field={fld} isBoard={true} onUserAction={this.handleAction} />}
                                            </div>
                                        </Draggable>
                                    );
                                })
                            }
                            </Container>
                        </div>       
                    </div>

                    <div onClick={this.handleClick}>
                        <Modal>
                            <ModalBody 
                                show={this.state.showConfigModal}
                                field={this.state.currConfigField}
                                onCloseClick={this.handleModalCloseAttempt} 
                                onConfigSubmit={this.handleConfigSubmit}
                            />
                        </Modal>
                    </div>
                </div>
            </div>      
        );
    }
}