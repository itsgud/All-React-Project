import Student4 from './Student4';
import React, { Component } from 'react'

export default class Student3 extends Component {
    
  render() {
    console.log("Student 3 - Rendered")
    return (
      <div> <h1>Student3 {this.props.name}</h1>
         <Student4 />
       </div>
    )
  }
}
