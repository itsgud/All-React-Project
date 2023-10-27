import React, { Component } from 'react';

class Student1 extends Component{
    
   state={
    id:1,
    name:"Rahul"
   };
    // Event Handler Arrow Function
    handleClick= (id,e)=> {
       console.log(id);
       console.log(e);

    }
    
    handleClickArg=e =>{
        this.handleClick(this.state.id,e);
    }

    render(){
        return(
            <div>
                <h1>Hello Event , {this.state.name}   </h1>
                <button onClick={this.handleClickArg} >Delete </button>
                <button onClick={this.handleClick.bind(this,this.state.id)} >Delete 2 Way</button>
            </div>
        );
    }
}export default Student1;