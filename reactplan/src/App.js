import React, { Component } from 'react'
import Plan from './plan'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


 class App extends Component {

  state={
    items:[],
    text:""
  }
  handlechange=e=>{
    this.setState({text : e.target.value})
  }

  handleAdd=e=>{
    if(this.state.text !==""){
        const items=[...this.state.items, this.state.text];
        this.setState({items:items, text: ""});
    }
  }

  handleDelete=id=>{
    console.log("delete",id);
    const olditems=[...this.state.items]
    console.log("old items :  ",olditems);
    const items=olditems.filter((element,i)=>{
      return i !== id
    })
    this.setState({items:items});
  }

  render() {
    return (
      <div className='container-fluid my-5' >
        <div className='row' >
            <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
              <h1 className='=text-center' >Today's Plan</h1>
              <div className="row">
                <div className="col-9">
                  <input type="text" className='form-control' value={this.state.text} onChange={this.handlechange} placeholder='Write Plan Here' />
                </div>
                <div className="col-2" >
                  <button type="button" className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd} >Add</button>
                </div>
                <div className="container-fluid">
                  <ul className='list-unstyled row m-5'>
                  
                    
                    {
                        this.state.items.map((value,i)=>{
                          return <Plan key={i} id={i} value={value} 
                          sendData={this.handleDelete} />
                        })
                    }

                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}


export default App;
