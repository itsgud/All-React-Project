import React, { Component } from 'react'

export default class Hp5 extends Component {
  render() {
    const arr=[10,20,30,40];
    let i=0;
    const newArr= arr.map( (num)=>{
       return <li key={i++}>{num*2}</li> ;
    } )
    return (
      <div>
        <ul>
            {newArr}
        </ul>
      </div>
    )
  }
}
