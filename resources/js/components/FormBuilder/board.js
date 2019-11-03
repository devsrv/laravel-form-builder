import React, { Component }  from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from './utils';

export default class Board extends Component {
    constructor() {
        super();

        this.state = {
            items2: [
                { id: 1, data: `Draggable 2 - 1` },
                { id: 2, data: `Draggable 2 - 2` },
                { id: 3, data: `Draggable 2 - 3` },
            ]
        }
    }

    render() {
        return (
            <div className="d-flex ml-3">
                <Container groupName="1" lockAxis="y" getChildPayload={i => this.state.items2[i]} onDrop={e => this.setState({ items2: applyDrag(this.state.items2, e) })}>
                {
                    this.state.items2.map((p, i) => {
                        return (
                            <Draggable key={i}>
                                <div className="draggable-item">
                                {p.data}
                                </div>
                            </Draggable>
                        );
                    })
                }
                </Container>
            </div>             
        );
    }
}