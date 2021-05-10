import React  from "react"
import { Link } from "react-router-dom";
import CarInterface from "../interfaces/CarInterface"

interface Props {
  carProp: CarInterface
}

export default class CarComponent extends React.Component<Props, {}> {

  constructor(props: any){
    super(props);
    this.bid = this.bid.bind(this)
  }

  bid(){
    console.log(this.props.carProp)
    this.props.carProp.price +=100
    // bad but need to figure out how to trigger render on prop update
    this.forceUpdate()
  }

  render(){
    return(
      <div className="card">
        <Link to={`/cars/${this.props.carProp._id}`} >
        <img className="card-img-top" src={this.props.carProp.img} alt=""></img>
        </Link>
        <div className="card-body">
         <div> <h3> {this.props.carProp.make}</h3></div>
         <div><h3>{this.props.carProp.model}</h3></div>
         <div><h3>{this.props.carProp.price}</h3>
         <button className="btn btn-success" onClick={this.bid}>Bid</button>
         </div>
        </div>
      </div>
    )
  }
  
}