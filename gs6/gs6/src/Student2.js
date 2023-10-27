import Student3 from './Student3';
import React, { Component } from 'react'

export default class Student2 extends Component {
 constructor(props){
    super(props);
    console.log("App- Constructor Called ");
    console.log(props);
    this.state={
        roll:"101"
    };
 }
 static getDerivedStateFromProps(props,state){
    console.log("APP - get Derived State From Props");
    console.log(props,state);
    return null;
 }

 componentDidMount()
 {
    console.log("App - ComponntDidmont - Mounted");
 }

  render() {
    console.log("Student 2 - Rendered");
    return(
        <div>
            <Student3 name="Rahul" />
        </div>
    ) 
      
    
  }
}
