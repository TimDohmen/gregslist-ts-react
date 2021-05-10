import React from "react";
import { Route, Switch } from "react-router-dom";
import CarComponent from "./CarComponent";
import CarsComponent from "./CarsComponent";


export default class CarsRoute extends React.Component{
 
 render(){
   return(
     <div>
        <Switch>
            <Route exact path='/cars' component={CarsComponent}> Cars </Route>
            <Route path='/cars/:id' component={CarComponent}> One Car </Route>
        </Switch>

     </div>

   )
 }
}