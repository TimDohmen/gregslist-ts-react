import React from 'react';
import logo from './logo.svg';
import './App.css';
import CarsComponent from './components/CarsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to GregsList</h1>
      </header>
      <main>
        <CarsComponent/>
      </main>
    </div>
  );
}

export default App;
