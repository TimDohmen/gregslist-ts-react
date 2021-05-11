import React  from "react";
import ClockComponent from "./components/ClockComponent";


type State = {
  time: number
}

export default class HomePage extends React.Component<{}, State>{
 
  constructor(props:any){
    super(props)
    this.state ={time: Date.now()}
  }


checkTime(){

}

  // setTimeout( () => {
  //   this.setState({time: Date.now()})
  // }, 1000);

  // useEffect(() => {
  //  this.setState({time: Date.now()})
  // }, [Date.now()])

  render(){
    return(
      <div>
        <h1>This the home page!</h1>
        <ClockComponent date={this.state.time}/>
        </div>
    )
  }
}

