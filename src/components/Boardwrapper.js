import React, { Component } from 'react';
import './Board.css';
import Board from './Board';
import NewList from './NewList';
import AddList from './AddList';

class BoardWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      value: '',
      childValue: '',
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
    console.log('changing');
    this.setState({
      value: event.target.value
      // childValue: event.target.value
    });
    console.log(this.state.value);
    // console.log('handling change', this.state.value);
    // console.log('child value', this.state.childValue);
    // this.setState({realValue: ...this.state.realValue, this.state.value});
  };

  handleSubmit(event) {
    // const { newTitle } = this.state;
    console.log('submitting!');
    // this.setState({childValue: event.target.value});
    this.setState({listNumber: this.state.listNumber += 1});
    this.setState({realValue: [...this.state.realValue, this.state.value]});
    // console.log(this.state.realValue);
    event.preventDefault();
    this.setState({
      value: '',
      childValue: ''
    });
  };
  

  render() {

    // const list = () => {
    //   for (let i=0; i<this.state.listNumber; i++) {
    //     console.log(this.state.listNumber)
    //     return <NewList listContent={this.state.realValue}/>
    //   }
    // }

    // const onSearchChange = this.props;
    let arr = Array.apply(null, {length: this.state.listNumber}).map(Number.call, Number);
    
    return (
      <div className="flex">
        <div className="board-wrapper">
          <AddList submit={this.handleSubmit} value={this.state.realValue} click={this.handleClick} change={this.handleChange} isActive={this.state.isActive}/>
        </div>
          {/*<NewList change={this.handleChange} thing={this.state.realValue}/>*/}
        {/*CHILD RENDERED HERE*/}
        {this.state.realValue.map((item, index) => {
          return <NewList change={this.handleChange} key={index} action={this.handleSubmit} thing={this.state.realValue[index]}/>
        })}
        
      </div>
    );
  }
}
export default BoardWrapper;