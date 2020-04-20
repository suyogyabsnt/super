import React from 'react';
import './App.css';
import Home from './components/Home/index'
import Header from './components/Header/index';
import Router from './router/index';
import BankDetails from './components/BankDetails/index'

function App() {
  return (
    <div className="BackGround">
      <div><Header/></div>
      <Router/>

    </div>
  );
}

export default App;
