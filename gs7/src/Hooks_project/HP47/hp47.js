import React, { Component } from 'react'

export default class Hp47 extends Component {
    state={
        value:"Geekys",
        name:"",
        password:""
    };
    handleChange=e=>{
        
        this.setState({[e.target.name]:e.target.value})
    };
    handleSubmit=e=> {
        console.log(e.target[1].name);
        e.preventDefault();
    }
   
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
            <label>
                Name: <input  type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label> <br/><br/>
            <label>
                Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
            </label> <br></br>
            <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
