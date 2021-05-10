import React from "react";
import HomeInterface from "../interfaces/HomeInterface";
import HomeComponent from "./HomeComponent";
import Axios from 'axios'

type State={
  homes: string[]
}



export default class HomesComponent extends React.Component<{}, State>{
  constructor(props:any){
    super(props);
    this.state={ 
      homes: ["1", "2"]
    }
  }

async componentDidMount(){
  const res = await Axios.get('http://localhost:3000/api/homes')
  console.log(res)
  this.setState({homes: res.data})
}

  createHome= async (event:any, form:any)=>{
       event.preventDefault()
      console.log(event)
      console.log(form.floors.value)
      const res = await Axios.post('http://localhost:3000/api/homes', {
        floors: form.floors.value,
        sqFt: form.sqFt.value,
        description: form.description.value,
        img: form.img.value,
        price: form.price.value
      })
      console.log(res.data)
      this.setState({homes: [...this.state.homes, res.data]})
  }

  render(){
    return(
      <div>
        <form onSubmit={event=> this.createHome(event , event.target)}>
          <input type="number" placeholder="floors" name="floors"  />
          <input type="number" placeholder="sqFt" name="sqFt"  />
          <input type="text" placeholder="description" name="description"  />
          <input type="text" placeholder="img" name="img"  />
          <input type="number" placeholder="price" name="price"  />
          <button>Create Home</button>
        </form>
      <div>{this.state.homes.map(h=> <HomeComponent homeProp={h as any}  />)}</div>
      </div>
    )
  }
}