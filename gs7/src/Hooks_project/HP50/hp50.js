import React, { Component } from 'react'
import User from "./User"
import Guest from "./Guest"

export default class Hp50 extends Component {
    state={
        name:'Rahul'
    }

  render() {
    return <User name={this.state.name} />;
      
    
  }
}
