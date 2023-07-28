import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <User name={"John"} email={"John@gmail.com"}/>
      <User name={"Amine"} email={"Amine@gmail.com"}/>
    </div>
  );
}

export default App;
