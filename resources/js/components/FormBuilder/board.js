import React, { Component }  from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from './utils';
import { TheField } from './field';

export default class Board extends Component {
    constructor() {
        super();

        this.state = {
            fields: [
                
            ]
        }
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
                                                {<TheField field={fld} isBoard={true} />}
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