import React, { Component } from 'react';
import './Board.css';
// import Board from './Board';
import NewList from './NewList';

class BoardWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      value: '',
      realValue: [],
      listNumber: 0

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleClick() {
    this.setState(state => ({
      isActive: true
    }));
  };

  handleChange(event){
    this.setState({value: event.target.value});
  };

  handleSubmit(event) {
    this.setState({listNumber: this.state.listNumber += 1});
    this.setState({realValue: [...this.state.realValue, this.state.value]});
    // console.log(this.state.realValue);
    event.preventDefault();
    this.setState({
      value: ''
    });
  };
  

  render() {

    //LOOP HERE 
    // const list = () => {
    //   for (let i=0; i<this.state.listNumber; i++) {
    //     console.log(this.state.listNumber)
    //     return <NewList listContent={this.state.realValue}/>
    //   }
    // }
    // LOOP END

    // const onSearchChange = this.props;
    let arr = Array.apply(null, {length: this.state.listNumber}).map(Number.call, Number);
    
    return (
      <div className="flex">
        <div className="board-wrapper">
          <form onSubmit={ this.handleSubmit }>
            <input onClick={ this.handleClick } value={ this.state.value } onChange={ this.handleChange } className='add-list'/>
            <div className={ this.state.isActive ? 'list-controls active' : 'list-controls' }>
              <input type="submit" className="add-list-button"/>
            </div>
          </form>
        </div>
        {/*CHILD RENDERED HERE*/}
        {this.state.realValue.map((item, index) => {
          return <NewList key={index} listContent={this.state.realValue[index]}/>
        })}
        
      </div>
    );
  }
}
export default BoardWrapper;