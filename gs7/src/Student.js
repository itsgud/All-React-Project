import Marks from './Marks';
import React, { Component } from 'react'

export default class Student extends Component 
{
    constructor()
    {
       super();
       this.state=
       {
            roll:101
       };
    }
    clickHandle=()=>{
        console.log("Button Clicked");
        //this.setState({roll:102});
        this.setState({roll:this.state.roll +2});

    }
  render() 
  {
    console.log("student Renderedd");
    return (<div>
        <Marks  roll={this.state.roll} />
        <button type="button" onClick={this.clickHandle}>Change</button>
        </div>
    );
      
    
  }
}
