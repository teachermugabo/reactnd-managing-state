import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
    value1: 0,
    value2: 0,
    value3: 0,
  }

  onClickingTrue = () => {
    console.log("Hi there!...clicking true")

	if(this.state.proposedAnswer === (this.state.value1 + this.state.value2 + this.state.value3)) {
      this.setState((state) => (
        {numCorrect : state.numCorrect + 1}
      ))
    }
    this.incrementNumQuestion();
  }

  onClickingFalse = () => {
    console.log("Hi there!...clicking false");
    
    if(this.state.proposedAnswer !== (this.state.value1 + this.state.value2 + this.state.value3)) {
      this.setState((state) => (
      	{numCorrect : state.numCorrect + 1}
       ))
    }
    
    this.incrementNumQuestion();
  }

  incrementNumQuestion = () => {
    this.setState((state) => (
      {numQuestions : state.numQuestions + 1}))
  }

  newGame = () => {
    this.setState({
      value1 : Math.floor(Math.random() * 100),
      value2 : Math.floor(Math.random() * 100),
      value3 : Math.floor(Math.random() * 100),
  	})
  }

  render() {
    const proposedAnswer = Math.floor(Math.random() * 3) 
		+ this.state.value1 
		+ this.state.value2 
		+ this.state.value3
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={this.onClickingTrue}>True</button>
          <button onClick={this.onClickingFalse}>False</button>
		  <button onClick={this.newGame}>New Game</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
