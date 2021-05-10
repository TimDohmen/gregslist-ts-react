import React from "react"
// import api from "../services/AxiosService"
import Axios from "axios"
import CarComponent from "./CarComponent"
import CarInterface from "../interfaces/CarInterface"

interface State  {
  isLoaded: boolean
  cars:  CarInterface[]
}

export default class CarsComponent extends React.Component<{}, State>{

constructor(props: any){
    super(props);
    this.state = {
      cars: [],
      isLoaded: false
    } 
}

   async componentDidMount(){
     try{
       const cars = await Axios.get('http://localhost:3000/api/cars')
       console.log(cars)
       this.setState({cars:cars.data.map((c: CarInterface)=> c), isLoaded: true})
     }catch(e){
       console.error(e)
     }
   }


   
   render(){
     const {isLoaded, cars} = this.state;
     return(
       <div> 
         {isLoaded ? cars.map((c,i) => <CarComponent carProp={c} key={i}/> ) : <h1> 'No cars yo' </h1>}
      </div>
     )
   }

}

// export default CarsComponent