import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';

const groupStyle = {
  marginLeft: '50px',
  flex: 1
}

class Copy extends Component {
  constructor() {
    super();

    this.state = {
      items1: [
        { id: '1' + 1, data: `Source Draggable - 1` },
        { id: '1' + 2, data: `Source Draggable - 2` }
      ],
      items2: [
        { id: '2' + 1, data: `Draggable 2 - 1` },
        { id: '2' + 2, data: `Draggable 2 - 2` },
      ]
    }
  }
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'stretch', marginTop: '50px', marginRight: '50px' }}>
        <div style={groupStyle}>
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
        <div style={groupStyle}>
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
      </div>
    );
  }
}


export default Copy;

if (document.getElementById('example')) {
    ReactDOM.render(<Copy />, document.getElementById('example'));
}
