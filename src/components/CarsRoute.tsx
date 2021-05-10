import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import CarPage from "../CarPage";
import CarsComponent from "./CarsComponent";

export default class CarsRoute extends React.Component{

 render(){
   return(
     <div>
        <Switch>
            {/* <Route exact path='/cars' > <CarsComponent/> </Route>
            <Route path='/cars/:id' component={CarPage}>  </Route> */}
        </Switch>

     </div>

   )
 }
}