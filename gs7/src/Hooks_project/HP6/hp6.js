import React, { Component } from 'react'

export default class Hp6 extends Component {
    state={
        change:false
    };
    clickHandle=()=>{
        this.setState({change:true});
    };
  render() {
    
    const btnStyle={
        color:'blue',
        backgroundColor:"orange"
    };
    if(this.state.change){
        btnStyle.backgroundColor="white";
        
    }
    
    return (
      <div>
        <button onClick={this.clickHandle} style={btnStyle} >Button</button>
      </div>
    )
  }
}
