import React from "react";
import HomeInterface from "../interfaces/HomeInterface";

type Props= {
  homeProp: HomeInterface
}

export default class HomeComponent extends React.Component<Props, {}>{
  
constructor(props : any){
  super(props)
}

  render(){
    return(
      <div>
        <div className="card">
          <img className="card-img-top" src={this.props.homeProp.img} alt=""></img>
          <div className="card-body">
            <p className="card-text">Floors : {this.props.homeProp.floors} Square Ft : {this.props.homeProp.sqFt}</p>
            <h4 className="card-title">{this.props.homeProp.description}</h4>
            <p className="card-text">Price : {this.props.homeProp.price}</p>
          </div>
        </div>
      </div>
    )
  }
}