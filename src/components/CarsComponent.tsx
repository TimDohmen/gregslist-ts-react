import React from "react"
// import api from "../services/AxiosService"
import Axios from "axios"
import CarComponent from "./CarComponent"
import CarInterface from "../interfaces/CarInterface"

interface State  {
  isLoaded: boolean
  cars:  CarInterface[],
  // newCar: CarInterface
}



export default class CarsComponent extends React.Component<{}, State>{

constructor(props: any){
    super(props);
    this.state = {
      cars: [],
      isLoaded: false,
      // newCar: {
      //   make: "",
      //   model: "",
      //   description: "",
      //   img: "",
      //   price: 0,
      //   mileage: 0,
      //   _id: ""
      // }

    } 
    this.createCar=this.createCar.bind(this)
    this.setState = this.setState.bind(this)
}


   async componentDidMount(){
     try{
       const cars = await Axios.get('http://localhost:3000/api/cars')
      //  console.log(cars)
       this.setState({cars:cars.data.map((c: CarInterface)=> c), isLoaded: true})
      // this.getCars()
     }catch(e){
       console.error(e)
     }
   }

   async componentDidUpdate(){
    try{
      const cars = await Axios.get('http://localhost:3000/api/cars')
      this.setState({cars:cars.data.map((c: CarInterface)=> c), isLoaded: true})
    }catch(e){
      console.error(e)
    }
   }

createCar= async(event : any, carData: any)=>{
   event.preventDefault()
   console.log(carData.make.value)
   const newCar = await Axios.post('http://localhost:3000/api/cars', {
     make: carData.make.value,
     model: carData.model.value,
     description: carData.description.value,
     img: carData.img.value,
     price: carData.price.value,
     mileage: carData.mileage.value,
   })
   console.log(newCar)
   this.setState({cars: [...this.state.cars, newCar.data]})

}

   
   render(){
     const {isLoaded, cars} = this.state;
     return(
       <div>
          <form onSubmit={event=> this.createCar(event, event.target)}>
            <input type="text" placeholder="Car Make" name="make"/>
            <input type="text" placeholder="Car model" name="model"/>
            <input type="text" placeholder="Car description" name="description"/>
            <input type="text" placeholder="Car img" name="img"/>
            <input type="number" placeholder="Car price" name="price"/>
            <input type="number" placeholder="Car mileage" name="mileage"/>
            <button type="submit">Submit</button>
          </form>
       <div> 
         {isLoaded ? cars.map((c,i) => <CarComponent carProp={c} key={i} getCars={this.componentDidUpdate}/> ) : <h1> 'No cars loaded.' </h1>}
      </div>
       </div>
     )
   }

}

// export default CarsComponent