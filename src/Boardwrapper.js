import React, { Component } from 'react';
import './Board.css';
import Board from './Board';




class BoardWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    console.log('click');
    this.setState(state => ({
      isActive: !state.isActive
    }));
  }

  render() {
    
    return (
      <div className="board-wrapper">
        <form>
          <input onClick={this.handleClick} className='add-list'/>
          <div className={this.state.isActive ? 'list-controls active' : 'list-controls' }>
            <input type="submit" className="add-list-button"/>

          </div>
        </form>
        {/*<Board />*/}
      </div>
    );
  }
}
export default BoardWrapper;