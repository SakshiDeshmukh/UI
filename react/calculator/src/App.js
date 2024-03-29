import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculate from './Calculate'
import CalStruct from './CalStruct'
import './css/CalStruct.css'
class App extends Component {
  constructor(){
    super()
    this.state = {
      result:""
    }
  }
  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};


  calculate = () => {
    try {
        this.setState({
        
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
        result: ""
    })
};

backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};

  render() {
    return (
      <div>
        <div className='calculator-body'>
        <h1>Calculator</h1>
        <Calculate result={this.state.result}/>
        <CalStruct onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
