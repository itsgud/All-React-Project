import  React,{Component} from "react";

class Student extends Component
{
    state={
        name:"Rahul",
    };
    render(){
        return <h1>Hello {this.state.name} </h1>;
        
    }
}
export default Student;