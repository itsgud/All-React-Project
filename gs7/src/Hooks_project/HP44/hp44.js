import React, { Component } from 'react'

export default class Hp44 extends Component {
    state={
        value:"Geekyshs"
    };
    handleChange=e=>{
        this.setState({value: e.target.value})
    }
  render() {
    return (
      <div>
        <form>
            <h2>Controlled by react</h2>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            
        </form>
      </div>
    )
  }
}
