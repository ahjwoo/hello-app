import React, { Component } from 'react';
import AddList from './AddList';


class Board extends Component {
  render(){
    return (
      <div>
        {this.props.thing}
      </div>
    )
  }
}

export default Board;