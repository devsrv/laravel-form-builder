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
			<Container groupName="1" behaviour="copy" getChildPayload={i => this.state.items1[i]} onDrop={e => this.setState({ items1: applyDrag(this.state.items1, e) })}>
			{
				this.state.items1.map((p,i) => {
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
