import React, { Component } from 'react'

export default class Hp44 extends Component {
    state={
        value:"Geekyshs",
        name:"geeky",
        password:"geekysows"
    };
    handleName=e=>{
        this.setState({name: e.target.value})
    }
    handlePassword=e=>{
        this.setState({password: e.target.value})
    }

  render() {
    return (
      <div>
        <form>
            <label>
                Name: <input  type="text" name="name" value={this.state.name} onChange={this.handleName} />
            </label> <br/><br/>
            <label>
                Password: <input type="text" name="password" value={this.state.password} onChange={this.handlePassword} />
            </label> <br></br>
            
        </form>
      </div>
    )
  }
}
