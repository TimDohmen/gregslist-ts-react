import React from "react";
import { Link } from "react-router-dom";
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
          <Link to={`/homes/${this.props.homeProp._id}`}>
          <img className="card-img-top" src={this.props.homeProp.img} alt=""></img>
          </Link>
          <div className="card-body">
            <p className="card-text">Floors : {this.props.homeProp.floors} Square Ft : {this.props.homeProp.sqFt}</p>
            <p className="card-text">Price : {this.props.homeProp.price}</p>
          </div>
        </div>
      </div>
    )
  }
}