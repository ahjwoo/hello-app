import React, {Component} from 'react';
import './Board.css';


class AddList extends Component {

  handleSubmit(event) {
    console.log(event)
  };
  
  render() {
    return (
      <form onSubmit={ this.props.submit }>
        <input onClick={this.props.click } onChange={ this.props.change } className='add-list'/>
        <div className={ this.props.isActive ? 'list-controls active' : 'list-controls' }>
          <input type="submit" className="add-list-button"/>
        </div>
      </form>
    )
  }
}



export default AddList;