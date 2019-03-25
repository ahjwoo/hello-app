import React, { Component } from 'react';
import './NewList.css';


class NewList extends Component {
  render() {
    return (
      <div className={ this.props.listContent ? "new-list-wrapper active" : 'new-list-wrapper'}>
        <div>{this.props.listContent}</div>
      
      </div>
    )
  }
};



export default NewList;
