import React, { Component } from 'react';
import './NewList.css';


class NewList extends Component {
  
  render() {
    const handleChange = this.props.handleChange;

    return (
      <textarea value={this.props.thing} onChange={this.props.change} className={ this.props.thing ? "new-list-wrapper active" : 'new-list-wrapper'}>
      </textarea>
    )
  }
};



export default NewList;
