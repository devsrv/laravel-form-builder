import React, { Component }  from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from './utils';

export default class Pallet extends Component {
	constructor() {
		super();

		this.state = {
			items1: [
				{ id: '1' + 1, data: `Source Draggable - 1` },
				{ id: '1' + 2, data: `Source Draggable - 2` }
			]
		}
	}

  render() {
    return (
        <div className="d-flex ml-3">
			<Container groupName="1" dragHandleSelector=".column-drag-handle" dragClass="opacity-ghost" dropClass="opacity-ghost-drop" behaviour="copy" getChildPayload={i => this.state.items1[i]} onDrop={e => this.setState({ items1: applyDrag(this.state.items1, e) })}>
			{
				this.state.items1.map((p,i) => {
					return (
						<Draggable key={i}>
							<div className="draggable-item">
								<span className="column-drag-handle" style={{float:'left', padding:'0 10px'}}>&#x2630;</span>
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
