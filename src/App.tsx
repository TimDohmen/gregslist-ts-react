import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import HomePage from './HomePage';
import CarsRoute from './components/CarsRoute';
import CarPage from './CarPage';
import CarsComponent from './components/CarsComponent';
import HomesComponent from './components/HomesComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to GregsList</h1>
        

        <Link to='/cars'>View Cars</Link>
        <Link to='/homes'>View Homes</Link>
        <Link to='/'>Home</Link>

      </header>
      <main>
        {/* <CarsComponent/> */}
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          {/* <Route path='/cars' component={CarsRoute}></Route> */}
          {/* a space breaks the route.................... */}
          <Route exact path='/cars' component={CarsComponent} ></Route>
          <Route exact path='/cars/:id' component={CarPage}><CarPage/></Route>
          <Route exact path='/homes' component={HomesComponent} ></Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;
