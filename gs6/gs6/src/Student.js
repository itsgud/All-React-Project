import React, { Component } from 'react';

class Student extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"rahul",
            roll:this.props.roll
        }
        this.handleClick=this.handleClick.bind(this);
    }
    // handleClick(){
    //     console.log("Button Clicked",this);
    // }
    // Arrow Function
    handleClick= ()=> {
        console.log("Button Clicked",this);
        this.setState({name: "jai",roll: "105"});

    }
    render(){
        return(
            <div>
                <h1>Hello Event , {this.state.name} and rolll no is {this.state.roll}  </h1>
                <button onClick={this.handleClick} >Click Me</button>
            </div>
        );
    }
}export default Student;