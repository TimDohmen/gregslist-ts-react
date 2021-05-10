import React from "react"


export default class TestComponent extends React.Component{

  handleClick(event: any){
      console.log(event)
  }
  render(){
    return(
      <div onClick={this.handleClick}>
        "yoyo"
      </div>
    )
  }
}