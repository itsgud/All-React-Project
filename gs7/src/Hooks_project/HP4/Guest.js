import React, { Component } from 'react'

export default class Guest extends Component {
  render() {
    return (
      <div><h1>Welcome Guest</h1> 
           <button type="button">Login</button>
           <button type="button">Sign Up</button>
      </div>
    )
  }
}
