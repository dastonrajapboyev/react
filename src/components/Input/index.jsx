import React from "react";

export default class Input extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: ''
    }
  }

  
  render(){

    const getValue = (e) =>{
      if(onclick){

        this.setState({title: e.target.value})
      }
    }

    const onclick = ()=>{
    }

    return (
      <div>
        <input onChange={getValue} type="text" placeholder="enter your name" />
        <button onClick={onclick}>Click</button>
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}