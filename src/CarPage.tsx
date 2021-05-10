import React, { Component, useEffect, useState } from "react";
import Axios from 'axios'
import CarInterface from './interfaces/CarInterface'
import { useParams } from "react-router";

// interface Props{
//   match: {
//     params: string
//   };
// }
// type TParams = {id: string}

// function Params({match}: RouteComponentProps<TParams>){
//   return match.params.id
// }
// let id : Object;

type idParam={
  id: string
}

// const GetCar = async (param: idParam): Promise<CarInterface> =>{
//   try{
//     const car = await Axios.get('http://localhost:3000/api/cars/'+ param.id)
//     console.log(car)
//     return car as CarInterface
//   }catch(e){
//     console.error(e)
//   }
// }

// async function GetCar(param: idParam){
//   try{
//         const car = await Axios.get('http://localhost:3000/api/cars/'+ param.id)
//         console.log(car)
//         const carProp :any = {};
//         Object.keys(car.data).map((k)=>{
//             // carProp[k] = car.data[k]
//             console.log(car.data[k])
//             carProp[k] = car.data[k]
//         })
//         return carProp
//       }catch(e){
//         console.error(e)
//       }
// }


// async function GetCar(id: string){
//   try{
//             const car = await Axios.get('http://localhost:3000/api/cars/'+ id)
//             console.log(car)
//             const carProp :any = {};
//             Object.keys(car.data).map((k)=>{
//                 // carProp[k] = car.data[k]
//                 console.log(car.data[k])
//                 carProp[k] = car.data[k]
//             })
//             return carProp
//           }catch(e){
//             console.error(e)
//           }
// }


// ComponentDidMount()
function CarPage(){

  const [car, setCar] = useState(null)
  console.log(useParams())

  const id : idParam = useParams()

  useEffect(() => {
    async function GetCar(id: string){
      try{
                const car = await Axios.get('http://localhost:3000/api/cars/'+ id)
                const carProp :any = {};
                Object.keys(car.data).map((k)=>{
                    console.log(car.data[k])
                    carProp[k] = car.data[k]
                })
                setCar(carProp)
              }catch(e){
                console.error(e)
              }
    }
    GetCar(id.id);
    return () => {
    }
  }, [id])
   
if(car == null){
  return (
    <div>
      <h1>Car data not loaded</h1>
    </div>
  )
}

  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={car.img} alt="an img"></img>
        <div className="card-body">
          <h3 className="card-title">{car.make}</h3>
          <h4 className="card-text">{car.model}</h4>
          <p>{car.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CarPage

// function RouteParams(){
// return useParams();
// }

// export default class CarPage extends Component{

//   // eslint-disable-next-line @typescript-eslint/no-useless-constructor
//   constructor(props: any){
//     super(props);
//   }

//   async componentDidMount(){
//     try{

//       // const {match: {params}} = this.props
//       // console.log(params)
//         // console.log(Params())
//         // console.log(this.props.match.params)
//       // const car = await Axios.get('http://localhost:3000/api/cars/')
//       // console.log(car)
//       // this.setState({cars:cars.data.map((c: CarInterface)=> c), isLoaded: true})
//     }catch(e){
//       console.error(e)
//     }
//   }

//   render(){
//     return(
//       <div>

//         <h2>Yo Car Page {RouteParams()}</h2>
//       </div>

//     )
//   }
// }

// const CarPage = ()=>{

// }

// export default CarPage