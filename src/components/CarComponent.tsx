import axios from "axios";
import React  from "react"
import { Link } from "react-router-dom";
import CarInterface from "../interfaces/CarInterface"

interface Props {
  carProp: CarInterface
  getCars: Function
}

export default class CarComponent extends React.Component<Props, {}> {

  constructor(props: any){
    super(props);
    this.bid = this.bid.bind(this)
    this.deleteCar = this.deleteCar.bind(this)
  }

  bid(){
    console.log(this.props.carProp)
    this.props.carProp.price +=100
    // this.shouldComponentUpdate(this.props,this.state ){
    // }
    // bad but need to figure out how to trigger render on prop update
    this.forceUpdate()
  }

  async deleteCar(){
    await axios.delete(`http://localhost:3000/api/cars/${this.props.carProp._id}`)
    this.props.getCars()
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
         <button className="btn btn-danger" onClick={this.deleteCar}>Delete</button>
         </div>
        </div>
      </div>
    )
  }
  
}