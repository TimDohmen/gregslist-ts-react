import React from 'react';
import logo from './logo.svg';
import './App.css';
import CarsComponent from './components/CarsComponent';
import {Switch, Route, Link} from 'react-router-dom'
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to GregsList</h1>
        <Link to='/cars'>Cars</Link>
        <Link to='/'>Home</Link>
      </header>
      <main>
        {/* <CarsComponent/> */}
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/cars' component={CarsComponent}></Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;
